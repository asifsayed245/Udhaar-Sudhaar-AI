"use client";

import { motion } from "framer-motion";
import { Camera, Bot, CheckCircle, ArrowRight } from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/constants";

const iconMap = {
  Camera,
  Bot,
  CheckCircle,
} as const;

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-bg-blue py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Sirf 3 step mein sab set
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            No training needed. Telegram chalana aata hai? Toh yeh bhi aata hai.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {HOW_IT_WORKS.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-saffron text-white shadow-lg shadow-saffron/25">
                  <Icon className="h-8 w-8" />
                </div>

                <div className="absolute top-8 left-[calc(50%+40px)] hidden w-[calc(100%-80px)] lg:block">
                  {index < HOW_IT_WORKS.length - 1 && (
                    <div className="flex items-center">
                      <div className="h-0.5 flex-1 bg-saffron/20" />
                      <ArrowRight className="h-5 w-5 text-saffron/40" />
                    </div>
                  )}
                </div>

                <div className="mt-2 inline-flex items-center justify-center rounded-full bg-saffron/10 px-3 py-1 text-sm font-semibold text-saffron">
                  Step {step.step}
                </div>

                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
