"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Camera, CheckCircle, MessageSquare, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const demoSteps = [
  {
    icon: Camera,
    title: "Bill ki photo bhejo",
    description: "Telegram pe kisi bhi bill ki photo send karo",
    screen: (
      <div className="space-y-3 p-4">
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-br-sm bg-green-100 p-4">
            <div className="flex h-32 w-40 items-center justify-center rounded-lg bg-white/60">
              <div className="text-center">
                <span className="text-4xl">📸</span>
                <p className="mt-1 text-xs text-muted-foreground">bill_photo.jpg</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-telegram-blue" />
          <span className="text-xs text-muted-foreground">Bot is reading your bill...</span>
        </div>
      </div>
    ),
  },
  {
    icon: CheckCircle,
    title: "AI sab padh lega",
    description: "Har item, amount aur total — automatically extract",
    screen: (
      <div className="space-y-3 p-4">
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <p className="text-sm font-medium">Bill scanned! ✅</p>
          <p className="mt-1 text-xs text-muted-foreground">Customer: Ramesh Kumar</p>
          <div className="mt-3 space-y-1.5 text-xs">
            <div className="flex justify-between"><span>Atta (5kg)</span><span className="font-medium">Rs.280</span></div>
            <div className="flex justify-between"><span>Chini (2kg)</span><span className="font-medium">Rs.90</span></div>
            <div className="flex justify-between"><span>Daal (1kg)</span><span className="font-medium">Rs.145</span></div>
            <div className="flex justify-between"><span>Chai Patti</span><span className="font-medium">Rs.120</span></div>
            <div className="mt-2 flex justify-between border-t pt-2 text-sm font-bold">
              <span>Total</span><span className="text-saffron">Rs.635</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: MessageSquare,
    title: "Status mark karo",
    description: "Ek button se Paid, Pending ya Partial set karo",
    screen: (
      <div className="space-y-3 p-4">
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <p className="text-sm font-medium">Ramesh Kumar - Rs.635</p>
          <p className="mt-1 text-xs text-muted-foreground">Mark payment status:</p>
        </div>
        <div className="flex flex-wrap gap-2 px-2">
          <span className="rounded-lg bg-success/10 px-4 py-2.5 text-sm font-medium text-success">✅ Paid</span>
          <span className="rounded-lg bg-warning/10 px-4 py-2.5 text-sm font-medium text-warning">⏳ Pending</span>
          <span className="rounded-lg bg-telegram-blue/10 px-4 py-2.5 text-sm font-medium text-telegram-blue">💳 Partial</span>
        </div>
        <div className="flex flex-wrap gap-2 px-2">
          <span className="rounded-lg bg-accent px-3 py-2 text-xs text-muted-foreground">➕ Add Name</span>
          <span className="rounded-lg bg-accent px-3 py-2 text-xs text-muted-foreground">📅 Add Date</span>
        </div>
      </div>
    ),
  },
  {
    icon: Search,
    title: "Poochho kuch bhi",
    description: "Hindi ya English mein sawaal poochho, bot jawab dega",
    screen: (
      <div className="space-y-3 p-4">
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-br-sm bg-green-100 px-4 py-2.5">
            <p className="text-sm">Kitna pending hai total?</p>
          </div>
        </div>
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <p className="text-sm font-medium">Aapke total pending bills:</p>
          <div className="mt-3 space-y-2 text-xs">
            <div className="flex justify-between rounded-lg bg-warning/5 p-2">
              <span>Ramesh Kumar</span><span className="font-bold text-warning">Rs.1,240</span>
            </div>
            <div className="flex justify-between rounded-lg bg-warning/5 p-2">
              <span>Suresh Patel</span><span className="font-bold text-warning">Rs.890</span>
            </div>
            <div className="flex justify-between rounded-lg bg-warning/5 p-2">
              <span>Mohan Singh</span><span className="font-bold text-warning">Rs.450</span>
            </div>
            <div className="mt-2 flex justify-between border-t pt-2 text-sm font-bold">
              <span>Total Pending</span><span className="text-saffron">Rs.2,580</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function DemoSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="demo" className="bg-bg-saffron py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Dekho kaise kaam karta hai
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Sirf 4 screens mein samajh aa jayega
          </p>
        </motion.div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          {/* Step indicators */}
          <div className="order-2 space-y-4 lg:order-1">
            {demoSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex w-full items-start gap-4 rounded-xl p-4 text-left transition-all ${
                    activeStep === index
                      ? "bg-white shadow-md"
                      : "hover:bg-white/50"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      activeStep === index
                        ? "bg-saffron text-white"
                        : "bg-saffron/10 text-saffron"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Phone mockup */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="w-[280px] sm:w-[300px]">
              <div className="rounded-[2.5rem] border-[8px] border-foreground/90 bg-foreground/5 p-2 shadow-2xl">
                <div className="rounded-[2rem] bg-white overflow-hidden">
                  <div className="flex items-center justify-between bg-telegram-blue px-4 py-2.5">
                    <span className="text-sm font-medium text-white">Udhaar Sudhaar AI</span>
                    <span className="text-xs text-white/70">online</span>
                  </div>
                  <div className="min-h-[400px]">
                    {demoSteps[activeStep].screen}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile navigation dots */}
        <div className="mt-6 flex items-center justify-center gap-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          {demoSteps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === activeStep ? "w-8 bg-saffron" : "w-2.5 bg-saffron/20"
              }`}
            />
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setActiveStep(Math.min(demoSteps.length - 1, activeStep + 1))}
            disabled={activeStep === demoSteps.length - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
