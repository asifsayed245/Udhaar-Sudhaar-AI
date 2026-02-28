"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, HelpCircle, Smartphone } from "lucide-react";
import { PAIN_POINTS } from "@/lib/constants";

const iconMap = {
  BookOpen,
  Clock,
  HelpCircle,
  Smartphone,
} as const;

export function PainPointsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Kya aapko bhi yeh problem hai?
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Har chhote dukandaar ki yahi kahani hai...
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_POINTS.map((point, index) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                  <Icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
