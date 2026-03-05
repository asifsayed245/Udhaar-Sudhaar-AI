import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  }

  return createClient(url, key);
}

export function generateActivationCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I to avoid confusion
  let code = "PRO-";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export async function storePayment(params: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  amount: number;
  activation_code: string;
}) {
  const supabase = getSupabase();

  const { error } = await supabase.from("payments").insert({
    razorpay_order_id: params.razorpay_order_id,
    razorpay_payment_id: params.razorpay_payment_id,
    amount: params.amount,
    activation_code: params.activation_code,
  });

  if (error) {
    console.error("Failed to store payment:", error);
    throw error;
  }
}
