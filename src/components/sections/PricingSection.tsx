"use client";

import { motion } from "framer-motion";
import { Check, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PRICING, SITE } from "@/lib/constants";
import { RazorpayCheckout } from "@/components/shared/RazorpayCheckout";

export function PricingSection() {
  const plans = [PRICING.free, PRICING.pro];

  return (
    <section id="pricing" className="bg-bg-blue py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Saste mein smart billing
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Start free, upgrade when ready
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "border-2 border-saffron bg-white shadow-xl shadow-saffron/10"
                  : "border bg-white"
              }`}
            >
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-saffron text-white hover:bg-saffron">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Most Popular
                </Badge>
              )}

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}{" "}
                  <span className="text-muted-foreground">({plan.nameHindi})</span>
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.priceDisplay}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                {"pricePerDay" in plan && (
                  <p className="mt-1 text-sm text-saffron font-medium">
                    Sirf {plan.pricePerDay}!
                  </p>
                )}
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="h-5 w-5 shrink-0 text-success" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {plan.highlighted ? (
                  <RazorpayCheckout />
                ) : (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full py-6 text-base"
                  >
                    <a href={SITE.telegramBot} target="_blank" rel="noopener noreferrer">
                      <Send className="mr-2 h-4 w-4" />
                      {plan.ctaHindi}
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Price anchor */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Ek register Rs.50. Ek POS machine Rs.15,000+.{" "}
          <span className="font-semibold text-saffron">{SITE.name} sirf Rs.549/month.</span>
        </motion.p>
      </div>
    </section>
  );
}
