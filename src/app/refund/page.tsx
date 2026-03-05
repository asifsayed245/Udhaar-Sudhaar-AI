import { SITE } from "@/lib/constants";

export default function RefundPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Refund Policy</h1>
      <p className="mt-2 text-muted-foreground">Last updated: February 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-lg font-semibold text-foreground">1. 7-Day Money-Back Guarantee</h2>
          <p className="mt-2">
            If you are not satisfied with the {SITE.name} Pro plan, you can request a full
            refund within 7 days of your payment. No questions asked.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">2. How to Request a Refund</h2>
          <p className="mt-2">
            To request a refund, contact us through any of these channels:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              Email:{" "}
              <a href={`mailto:${SITE.email}`} className="text-saffron underline">
                {SITE.email}
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a href={SITE.whatsapp} className="text-saffron underline">
                Click here to chat
              </a>
            </li>
          </ul>
          <p className="mt-2">
            Please include your Telegram username and payment ID in your refund request.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">3. Refund Processing</h2>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Refunds are processed within 5-7 business days</li>
            <li>The refund will be credited to the original payment method (UPI, card, etc.)</li>
            <li>You will receive a confirmation once the refund is processed</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">4. After the 7-Day Period</h2>
          <p className="mt-2">
            Refund requests made after 7 days will be reviewed on a case-by-case basis.
            We may offer a prorated refund or credit for unused time at our discretion.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">5. Cancellation</h2>
          <p className="mt-2">
            You can cancel your Pro subscription at any time. After cancellation, you will
            retain access to Pro features until the end of your current billing period,
            after which your access will be deactivated until you renew.
          </p>
        </section>
      </div>
    </main>
  );
}
