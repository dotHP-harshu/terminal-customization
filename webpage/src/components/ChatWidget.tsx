"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import ErrorBanner from "./ErrorBanner";

const BASE_URL = "http://localhost:3000";

export type MESSAGE_INTERFACE = { role: "ai" | "user"; message: string };

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userMessageInput, setUserMessageInput] = useState("");
  const [messages, setMessages] = useState<MESSAGE_INTERFACE[]>([
    { role: "ai", message: "Hello \nHow can I help you today?" },
  ]);
  const bottomMsgRef = useRef<HTMLDivElement>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const sendMessage = async () => {
    setErrorMsg("")
    if (userMessageInput.trim() === "" || isLoading) return;

    const updatedMessages: MESSAGE_INTERFACE[] = [
      ...messages,
      {
        role: "user",
        message: userMessageInput,
      },
    ];

    setMessages(updatedMessages);
    setUserMessageInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      if (res.status !== 200) {
        return console.log(res.statusText);
      }

      const data = await res.json();
      if (data.status === 200) {
        const aiRes = data.aiRes;
        return setMessages((p) => [...p, { role: "ai", message: aiRes }]);
      }

      setErrorMsg(data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    bottomMsgRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isLoading]);

  return (
    <>
      <div
        style={{
          ...styles.widgetContainer,
          ...(isOpen ? styles.widgetContainerOpen : {}),
        }}
      >
        {errorMsg !== "" && <ErrorBanner message={errorMsg} />}
        {isOpen && (
          <div style={styles.panel}>
            {/* Header */}
            <div style={styles.header}>
              <div style={styles.headerLeft}>
                <span style={styles.headerIcon}>
                  <Image
                    src={"/chatbot.svg"}
                    alt="chatbot"
                    width={20}
                    height={20}
                  />
                </span>
                <span style={styles.headerTitle}>AI Assistant</span>
              </div>

              <button style={styles.headerBtn} onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>

            {/* Messages */}
            <div style={styles.messages}>
              {messages.map((msg, i) => {
                const isUser = msg.role === "user";

                return (
                  <div
                    key={`${msg.role}-${i}`}
                    style={{
                      ...styles.messageRow,
                      ...(isUser ? styles.messageRowUser : {}),
                    }}
                  >
                    <div
                      style={{
                        ...styles.avatar,
                        ...(isUser ? styles.avatarUser : styles.avatarBot),
                      }}
                    >
                      {isUser ? "You" : "AI"}
                    </div>
                    <div style={{ ...styles.bubble, ...styles.bubbleUser }}>
                      <Markdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeHighlight]}
                        components={{
                          h1: ({ children }) => (
                            <h1
                              style={{
                                fontWeight: "700",
                                marginBottom: "1rem",
                                fontSize: "1.5rem",
                              }}
                              className="text-2xl font-bold mb-4"
                            >
                              {children}
                            </h1>
                          ),

                          h2: ({ children }) => (
                            <h2
                              style={{
                                fontWeight: "600",
                                marginBottom: "0.5rem",
                                fontSize: "1.25rem",
                                marginTop: "1.25rem",
                              }}
                              className="text-xl font-semibold mt-6 mb-2"
                            >
                              {children}
                            </h2>
                          ),

                          p: ({ children }) => (
                            <p
                              style={{
                                lineHeight: "1.75rem",
                                marginBottom: "1.75",
                              }}
                              className="leading-7 mb-3"
                            >
                              {children}
                            </p>
                          ),

                          ul: ({ children }) => (
                            <ul
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "1rem",
                              }}
                            >
                              {children}
                            </ul>
                          ),
                          ol: ({ children }) => (
                            <ul
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "1rem",
                              }}
                            >
                              {children}
                            </ul>
                          ),
                        }}
                      >
                        {msg.message}
                      </Markdown>
                    </div>
                    <div ref={bottomMsgRef} />
                  </div>
                );
              })}
              {isLoading && (
                <div style={styles.messageRow}>
                  <div style={{ ...styles.avatar, ...styles.avatarBot }}>
                    AI
                  </div>

                  <div style={{ ...styles.bubble, ...styles.bubbleBot }}>
                    <div style={styles.typing}>
                      <span style={styles.dot}>●</span>
                      <span style={styles.dot}>●</span>
                      <span style={styles.dot}>●</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div style={styles.inputArea}>
              <div style={styles.inputRow}>
                <textarea
                  disabled={isLoading}
                  value={userMessageInput}
                  onChange={(e) => setUserMessageInput(e.target.value)}
                  onKeyUp={(e) => (e.key === "Enter" ? sendMessage() : "")}
                  placeholder="Type your message..."
                  rows={1}
                  style={styles.textarea}
                />

                <button
                  disabled={isLoading}
                  onClick={sendMessage}
                  style={{
                    ...styles.sendBtn,
                    ...(isLoading ? { opacity: "0.5" } : {}),
                  }}
                >
                  {!isLoading ? "↑" : "■"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          ...styles.fab,
          ...(isOpen ? styles.fabOpen : {}),
        }}
      >
        {isOpen ? (
          "✕"
        ) : (
          <Image src={"/chatbot.svg"} alt="chatbot" width={20} height={20} />
        )}
      </button>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  fab: {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    border: "none",
    background: " #91c8ec",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s cubic-bezier(0.16,1,0.3,1), box-shadow 0.2s",
    zIndex: 9999,
    lineHeight: 1,
    padding: 0,
  },
  fabOpen: {
    transform: "rotate(90deg)",
    background: "var(--text-secondary, #787774)",
  },
  widgetContainer: {
    position: "fixed",
    bottom: "92px",
    right: "24px",
    zIndex: 9998,
    display: "flex",
    flexDirection: "column",
    pointerEvents: "none",
  },
  widgetContainerOpen: {
    pointerEvents: "auto",
  },
  panel: {
    width: "380px",
    maxHeight: "calc(100vh - 140px)",
    background: "var(--surface, #fff)",
    border: "1px solid var(--border, #eaeaea)",
    borderRadius: "16px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.14)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    animation: "chatSlideUp 0.25s cubic-bezier(0.16,1,0.3,1)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 16px",
    borderBottom: "1px solid var(--border, #eaeaea)",
    background: "var(--surface-alt, #f9f9f8)",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  headerIcon: {
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontWeight: 600,
    fontSize: "14px",
    color: "var(--text-primary, #2f3437)",
  },
  headerActions: {
    display: "flex",
    gap: "4px",
  },
  headerBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "6px",
    borderRadius: "8px",
    fontSize: "14px",
    color: "var(--text-secondary, #787774)",
    lineHeight: 1,
    transition: "background 0.15s",
  },
  messages: {
    flex: 1,
    overflowY: "auto",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    minHeight: "300px",
    maxHeight: "calc(100vh - 280px)",
  },
  emptyState: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: "8px",
    opacity: 0.6,
  },
  emptyIcon: {
    fontSize: "32px",
    marginBottom: "4px",
  },
  emptyTitle: {
    fontWeight: 600,
    fontSize: "15px",
    color: "var(--text-primary, #2f3437)",
    margin: 0,
  },
  emptyDesc: {
    fontSize: "13px",
    color: "var(--text-secondary, #787774)",
    textAlign: "center",
    margin: 0,
    maxWidth: "260px",
  },
  messageRow: {
    display: "flex",
    gap: "8px",
    whiteSpace: "pre-line",
  },
  messageRowUser: {
    alignSelf: "flex-end",
    flexDirection: "row-reverse",
  },
  avatar: {
    width: "28px",
    height: "28px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    fontWeight: 700,
    flexShrink: 0,
    letterSpacing: "0.02em",
  },
  avatarUser: {
    background: "var(--accent-blue-bg, #e1f3fe)",
    color: "var(--accent-blue-fg, #1f6c9f)",
  },
  avatarBot: {
    background: "var(--accent-green-bg, #edf3ec)",
    color: "var(--accent-green-fg, #346538)",
  },
  bubble: {
    padding: "10px 14px",
    borderRadius: "12px",
    fontSize: "13.5px",
    lineHeight: "1.55",
    color: "var(--text-primary, #2f3437)",
    wordBreak: "break-word",
    display: "flex",
    flexDirection: "column",
  },
  bubbleUser: {
    background: "var(--canvas)",
    borderBottomRightRadius: "4px",
  },
  bubbleBot: {
    background: "var(--surface-alt, #f9f9f8)",
    border: "1px solid var(--border-subtle, rgba(0,0,0,0.06))",
    borderBottomLeftRadius: "4px",
  },
  codeBlock: {
    background: "var(--code-bg, #f4f3f0)",
    border: "1px solid var(--border, #eaeaea)",
    borderRadius: "8px",
    padding: "12px",
    overflowX: "auto",
    fontSize: "12.5px",
    fontFamily: "'JetBrains Mono', 'Fira Mono', monospace",
    margin: "8px 0 4px",
    lineHeight: "1.5",
    color: "var(--text-primary, #2f3437)",
  },
  inlineCode: {
    background: "var(--code-bg, #f4f3f0)",
    border: "1px solid var(--border, #eaeaea)",
    borderRadius: "4px",
    padding: "1px 5px",
    fontSize: "12.5px",
    fontFamily: "'JetBrains Mono', 'Fira Mono', monospace",
  },
  typing: {
    display: "inline-flex",
    gap: "3px",
    padding: "2px 0",
  },
  dot: {
    fontSize: "10px",
    color: "var(--text-tertiary, #a5a2a0)",
    animation: "chatBlink 1.2s ease-in-out infinite",
  },
  inputArea: {
    borderTop: "1px solid var(--border, #eaeaea)",
    padding: "12px 16px",
    background: "var(--surface, #fff)",
  },
  error: {
    fontSize: "12px",
    color: "var(--accent-red-fg, #9f2f2d)",
    background: "var(--accent-red-bg, #fdebec)",
    padding: "8px 12px",
    borderRadius: "8px",
    marginBottom: "8px",
  },
  inputRow: {
    display: "flex",
    alignItems: "flex-end",
    gap: "8px",
  },
  textarea: {
    flex: 1,
    resize: "none",
    border: "1px solid var(--border, #eaeaea)",
    borderRadius: "12px",
    padding: "10px 14px",
    fontSize: "13.5px",
    fontFamily: "inherit",
    lineHeight: "1.45",
    color: "var(--text-primary, #2f3437)",
    background: "var(--surface-alt, #f9f9f8)",
    outline: "none",
    maxHeight: "120px",
    minHeight: "42px",
  },
  sendBtn: {
    width: "42px",
    height: "42px",
    borderRadius: "12px",
    border: "none",
    background: "var(--accent-blue-fg, #1F6C9F)",
    color: "#fff",
    fontSize: "18px",
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "opacity 0.15s",
  },
  sendBtnDisabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
  stopBtn: {
    width: "42px",
    height: "42px",
    borderRadius: "12px",
    border: "1px solid var(--border, #eaeaea)",
    background: "var(--surface, #fff)",
    color: "var(--accent-red-fg, #9f2f2d)",
    fontSize: "14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  noKeyBanner: {
    padding: "20px 16px",
    textAlign: "center",
    borderBottom: "1px solid var(--border, #eaeaea)",
    background: "var(--accent-yellow-bg, #fbf3db)",
  },
  noKeyText: {
    fontSize: "13px",
    color: "var(--accent-yellow-fg, #956400)",
    margin: "0 0 10px",
  },
  noKeyBtn: {
    background: "var(--accent-yellow-fg, #956400)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "7px 16px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
  },
  settingsPanel: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: 1,
    overflowY: "auto",
  },
  settingsTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--text-primary, #2f3437)",
    margin: 0,
  },
  settingsDesc: {
    fontSize: "12.5px",
    color: "var(--text-secondary, #787774)",
    margin: 0,
    lineHeight: "1.5",
  },
  label: {
    fontSize: "12px",
    fontWeight: 600,
    color: "var(--text-secondary, #787774)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.04em",
  },
  input: {
    width: "100%",
    padding: "9px 12px",
    borderRadius: "8px",
    border: "1px solid var(--border, #eaeaea)",
    background: "var(--surface-alt, #f9f9f8)",
    fontSize: "13px",
    fontFamily: "'JetBrains Mono', 'Fira Mono', monospace",
    color: "var(--text-primary, #2f3437)",
    outline: "none",
    boxSizing: "border-box" as const,
  },
  settingsActions: {
    display: "flex",
    gap: "8px",
    marginTop: "6px",
  },
  settingsCancelBtn: {
    flex: 1,
    padding: "9px",
    borderRadius: "8px",
    border: "1px solid var(--border, #eaeaea)",
    background: "var(--surface, #fff)",
    color: "var(--text-primary, #2f3437)",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
  },
  settingsSaveBtn: {
    flex: 1,
    padding: "9px",
    borderRadius: "8px",
    border: "none",
    background: "var(--accent-blue-fg, #1F6C9F)",
    color: "#fff",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
  },
};
