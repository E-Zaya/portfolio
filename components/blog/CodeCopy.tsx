"use client";

import { useEffect } from "react";
import { getMessages, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export default function CodeCopy({ locale }: Props) {
  const t = getMessages(locale).blog;

  useEffect(() => {
    const codeBlocks = document.querySelectorAll<HTMLElement>(".blog-article pre");

    codeBlocks.forEach((block) => {
      if (block.dataset.copyReady === "true") return;

      const codeNode = block.querySelector("code");
      if (!codeNode) return;

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = t.copyCode;
      button.setAttribute("aria-label", t.copyCodeAria);
      button.className = "copy-btn";

      button.onclick = async () => {
        const code = codeNode.textContent ?? "";

        try {
          await navigator.clipboard.writeText(code);
          button.textContent = t.copiedCode;

          window.setTimeout(() => {
            button.textContent = t.copyCode;
          }, 1200);
        } catch {
          button.textContent = t.copyCode;
        }
      };

      block.dataset.copyReady = "true";
      block.appendChild(button);
    });

    return () => {
      document.querySelectorAll<HTMLElement>(".blog-article pre[data-copy-ready='true']").forEach((block) => {
        block.dataset.copyReady = "false";
        block.querySelector(".copy-btn")?.remove();
      });
    };
  }, [t.copyCode, t.copiedCode, t.copyCodeAria]);

  return null;
}
