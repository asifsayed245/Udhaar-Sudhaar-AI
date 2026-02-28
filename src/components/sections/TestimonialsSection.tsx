"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
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
            Dukandaar kya keh rahe hain
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Real reviews from real shop owners
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl border bg-card p-6"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-saffron/10" />

              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-warning text-warning"
                  />
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron/10 text-sm font-bold text-saffron">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.store}, {testimonial.city}
                  </p>
                </div>
                <Badge variant="secondary" className="ml-auto text-xs">
                  Early Adopter
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
