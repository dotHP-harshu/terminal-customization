import { client } from "@/app/lib/client";
import { getContext } from "@/app/lib/getcontext";
import { MESSAGE_INTERFACE } from "@/components/ChatWidget";
import { SYSTEM_PROMPT } from "@/data/systemPrompt";

import { ChatCompletionMessageParam } from "openai/resources.js";

export async function POST(request: Request) {
  const body = await request.json();
  const { messages } = body;

  // check if query or messages are missing
  if (!messages || !Array.isArray(messages))
    return Response.json({ message: "Messages not found", status: 400 });

  const userMessage = messages.pop();

  const context = await getContext(userMessage?.message);

  const HISTORY: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: `=== SYSTEM PROMPT ===\n${SYSTEM_PROMPT}`,
    },
    ...messages.map((msg: MESSAGE_INTERFACE) => {
      return {
        role: msg.role == "ai" ? "assistant" : "user",
        content: msg.message,
      } as ChatCompletionMessageParam;
    }),
  ];
  try {
    // Generating the ai response
    HISTORY.push({ role: "user", content: userMessage.message });
    const res = await client.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `=== SYSTEM PROMPT ===\n${SYSTEM_PROMPT}\n=== CONTEXT ===\n${context}`,
        },
        ...HISTORY,
      ],
    });

    if (!res.choices) {
      return Response.json({ message: "Error on generating res from ai." });
    }

    return Response.json({
      aiRes: res.choices[0].message.content,
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message, status: 400 });
    }
    return Response.json({
      message: "Internal Server Error while generating response",
      status: 500,
    });
  }
}
