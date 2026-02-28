"use client";

import { useState } from "react";
import Script from "next/script";
import { CreditCard, Loader2 } from "lucide-react";
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
            alert(
              "Payment successful! 🎉 Aapka Pro plan activate ho gaya hai. Telegram pe bot use karna shuru karo!"
            );
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
