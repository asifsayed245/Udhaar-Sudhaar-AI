"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export function WhatsAppFloat() {
  if (!SITE.whatsapp) return null;

  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      aria-label="WhatsApp Support"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
