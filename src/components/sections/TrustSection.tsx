"use client";

import { motion } from "framer-motion";
import { Shield, CreditCard, Send, Lock, Flag } from "lucide-react";

const trustBadges = [
  {
    icon: Flag,
    text: "Made in India",
    subtext: "Bharat mein bana",
  },
  {
    icon: CreditCard,
    text: "Secured by Razorpay",
    subtext: "UPI, Card, Net Banking",
  },
  {
    icon: Send,
    text: "Built on Telegram",
    subtext: "80 crore+ users trust it",
  },
  {
    icon: Lock,
    text: "Data Encrypted",
    subtext: "Sirf aapko dikhe",
  },
  {
    icon: Shield,
    text: "7-Day Refund",
    subtext: "No questions asked",
  },
];

export function TrustSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-3 rounded-xl bg-accent/50 px-4 py-3"
              >
                <Icon className="h-6 w-6 shrink-0 text-deep-blue" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{badge.text}</p>
                  <p className="text-xs text-muted-foreground">{badge.subtext}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
