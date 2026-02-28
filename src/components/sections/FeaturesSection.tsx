"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Languages,
  BookOpen,
  IndianRupee,
  MessageCircle,
  Shield,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";

const iconMap = {
  Camera,
  Languages,
  BookOpen,
  IndianRupee,
  MessageCircle,
  Shield,
} as const;

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Sab kuch ek bot mein
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Billing, tracking, queries — sab Telegram pe
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-2xl border bg-card p-6 transition-all hover:border-saffron/30 hover:shadow-lg hover:shadow-saffron/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-saffron/10 transition-colors group-hover:bg-saffron/20">
                  <Icon className="h-6 w-6 text-saffron" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
