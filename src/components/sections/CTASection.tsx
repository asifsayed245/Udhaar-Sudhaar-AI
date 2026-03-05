"use client";

import { motion } from "framer-motion";
import { CreditCard, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-saffron to-saffron-hover py-16 sm:py-24">
      {/* Decorative shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Aaj hi apni dukaan ko smart banao
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Subscribe karo aur apni dukaan ko smart banao. Sirf Telegram chahiye.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-saffron hover:bg-white/90 px-8 py-6 text-base font-semibold"
            >
              <a href="#pricing">
                <CreditCard className="mr-2 h-5 w-5" />
                Subscribe karo
              </a>
            </Button>
            {SITE.whatsapp && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-base"
              >
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp par poochho
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
