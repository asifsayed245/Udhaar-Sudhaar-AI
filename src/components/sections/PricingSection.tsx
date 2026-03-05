"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING, SITE } from "@/lib/constants";
import { RazorpayCheckout } from "@/components/shared/RazorpayCheckout";

export function PricingSection() {
  const plan = PRICING.pro;

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
            Smart billing sirf {plan.pricePerDay}
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border-2 border-saffron bg-white p-8 shadow-xl shadow-saffron/10"
          >
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

              <p className="mt-1 text-sm text-saffron font-medium">
                Sirf {plan.pricePerDay}!
              </p>
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
              <RazorpayCheckout />
            </div>
          </motion.div>
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
