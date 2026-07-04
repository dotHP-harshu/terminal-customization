"use client";
import Customisation from "@/components/Customisation";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Hiw from "@/components/Hiw";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import Prerequistites from "@/components/Prerequisites";
import PromptGallery from "@/components/PromptGallery";
import Setup from "@/components/Setup";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // --- Scroll Entry Animations ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  });
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Prerequistites />
      <Setup />
      <PromptGallery />
      <Customisation />
      <Hiw />
      <Faq />
      {/* <!-- Footer --> */}
      <footer
        style={{ padding: "3rem 0", borderTop: "1px solid var(--border)" }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-tertiary)",
            }}
          >
            terminal-customization
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--text-tertiary)" }}>
            PowerShell 7+ / Windows
          </div>
        </div>
      </footer>
    </>
  );
}
