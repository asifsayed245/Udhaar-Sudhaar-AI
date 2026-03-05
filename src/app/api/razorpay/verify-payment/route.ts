import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { generateActivationCode, storePayment } from "@/lib/supabase";
import { PRICING } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    } = await request.json();

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, error: "Missing payment details" },
        { status: 400 }
      );
    }

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest("hex");

    const isValid = expectedSignature === razorpay_signature;

    if (isValid) {
      const activationCode = generateActivationCode();

      await storePayment({
        razorpay_order_id,
        razorpay_payment_id,
        amount: PRICING.pro.priceInPaise,
        activation_code: activationCode,
      });

      return NextResponse.json({
        success: true,
        paymentId: razorpay_payment_id,
        activationCode,
      });
    }

    return NextResponse.json(
      { success: false, error: "Invalid signature" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Payment verification failed:", error);
    return NextResponse.json(
      { success: false, error: "Verification failed" },
      { status: 500 }
    );
  }
}
