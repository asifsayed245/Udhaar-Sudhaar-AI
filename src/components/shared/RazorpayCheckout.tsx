"use client";

import { useState } from "react";
import Script from "next/script";
import { CreditCard, Loader2, CheckCircle, Send, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING, SITE } from "@/lib/constants";

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      open: () => void;
      on: (event: string, handler: () => void) => void;
    };
  }
}

export function RazorpayCheckout() {
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [activationCode, setActivationCode] = useState("");
  const [copied, setCopied] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: PRICING.pro.priceInPaise,
          plan: "pro",
        }),
      });

      const data = await res.json();

      if (!data.orderId) {
        throw new Error("Failed to create order");
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: PRICING.pro.priceInPaise,
        currency: "INR",
        name: SITE.name,
        description: "Pro Plan - Monthly Subscription",
        order_id: data.orderId,
        handler: async (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) => {
          const verifyRes = await fetch("/api/razorpay/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            setActivationCode(verifyData.activationCode || "");
            setPaymentSuccess(true);
          } else {
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          contact: "",
        },
        theme: {
          color: "#FF6B00",
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", () => {
        alert("Payment failed. Please try again.");
        setLoading(false);
      });
      rzp.open();
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    const command = `/activate ${activationCode}`;
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (paymentSuccess) {
    return (
      <div className="rounded-xl border-2 border-success bg-success/5 p-6 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-success" />
        <h3 className="mt-3 text-lg font-bold text-foreground">
          Payment successful!
        </h3>

        {activationCode && (
          <div className="mt-4 rounded-lg bg-white border border-border p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
              Your Activation Code
            </p>
            <div className="mt-2 flex items-center justify-center gap-2">
              <code className="text-2xl font-bold tracking-widest text-saffron">
                {activationCode}
              </code>
              <button
                onClick={handleCopy}
                className="rounded-md p-1.5 hover:bg-muted transition-colors"
                title="Copy activation command"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-success" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>
        )}

        <div className="mt-4 text-left text-sm text-muted-foreground space-y-2">
          <p className="font-medium text-foreground">Activate kaise karein:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Neeche button se Telegram Bot kholein</li>
            <li>Bot mein yeh bhejein: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">/activate {activationCode}</code></li>
            <li>Bot activate ho jayega — 30 din ka access milega!</li>
          </ol>
        </div>

        <Button
          asChild
          size="lg"
          className="mt-4 w-full bg-telegram-blue hover:bg-telegram-blue/90 py-6 text-base text-white"
        >
          <a href={SITE.telegramBot} target="_blank" rel="noopener noreferrer">
            <Send className="mr-2 h-5 w-5" />
            Telegram Bot kholein
          </a>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <Button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-saffron hover:bg-saffron-hover py-6 text-base text-white"
      >
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <CreditCard className="mr-2 h-4 w-4" />
        )}
        {loading ? "Processing..." : PRICING.pro.ctaHindi}
      </Button>
    </>
  );
}
