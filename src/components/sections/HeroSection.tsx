"use client";

import { motion } from "framer-motion";
import { CreditCard, Play, Star, MessageSquare, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-bg-saffron pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Bill ka photo lo,{" "}
              <span className="text-saffron">baaki bot sambhal lega</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              {SITE.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-saffron hover:bg-saffron-hover text-white text-base px-8 py-6"
              >
                <a href="#pricing">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Subscribe karo
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 py-6"
              >
                <a href="#demo">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-saffron/10 text-xs font-bold text-saffron"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-warning text-warning"
                    />
                  ))}
                  <span className="ml-1 text-sm font-medium">4.8</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  500+ dukandaar already use {SITE.name}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] sm:w-[320px]">
              {/* Phone frame */}
              <div className="rounded-[2.5rem] border-[8px] border-foreground/90 bg-foreground/5 p-2 shadow-2xl">
                {/* Screen */}
                <div className="rounded-[2rem] bg-white overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between bg-telegram-blue px-4 py-2">
                    <span className="text-xs font-medium text-white">{SITE.name}</span>
                    <span className="text-xs text-white/70">online</span>
                  </div>

                  {/* Chat messages */}
                  <div className="space-y-3 p-3 min-h-[380px]">
                    {/* User message - bill photo */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-green-100 p-3">
                        <div className="flex items-center gap-2 rounded-lg bg-white/60 p-4">
                          <div className="text-center">
                            <div className="text-2xl">📸</div>
                            <p className="text-xs text-muted-foreground mt-1">bill_photo.jpg</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bot message - OCR result */}
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white border p-3 shadow-sm">
                        <p className="text-xs font-medium text-foreground">Bill scanned! ✅</p>
                        <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                          <div className="flex justify-between">
                            <span>Chini (Sugar)</span>
                            <span>Rs.45</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Atta (Flour)</span>
                            <span>Rs.280</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tel (Oil)</span>
                            <span>Rs.165</span>
                          </div>
                          <div className="mt-2 flex justify-between border-t pt-1 font-semibold text-foreground">
                            <span>Total</span>
                            <span>Rs.490</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Inline buttons */}
                    <div className="flex flex-wrap gap-1.5 px-1">
                      <span className="inline-flex items-center gap-1 rounded-lg bg-success/10 px-2.5 py-1.5 text-xs font-medium text-success">
                        <CheckCircle className="h-3 w-3" /> Paid
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-lg bg-warning/10 px-2.5 py-1.5 text-xs font-medium text-warning">
                        <Clock className="h-3 w-3" /> Pending
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-lg bg-telegram-blue/10 px-2.5 py-1.5 text-xs font-medium text-telegram-blue">
                        <MessageSquare className="h-3 w-3" /> Partial
                      </span>
                    </div>

                    {/* Query example */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-green-100 px-3 py-2">
                        <p className="text-xs text-foreground">Ramesh ka kitna baaki hai?</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white border px-3 py-2 shadow-sm">
                        <p className="text-xs text-foreground">Ramesh ka total pending: <span className="font-bold text-saffron">Rs.1,240</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-saffron/10 blur-xl" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-telegram-blue/10 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
