import { SITE } from "@/lib/constants";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-muted-foreground">Last updated: February 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p className="mt-2">
            By using {SITE.name}, you agree to these Terms of Service. If you do not agree,
            please do not use the service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">2. Description of Service</h2>
          <p className="mt-2">
            {SITE.name} is a Telegram-based bill management bot that helps small business
            owners digitize paper bills, track customer credit (udhaari), and manage payment
            statuses using AI-powered OCR technology.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">3. User Accounts</h2>
          <p className="mt-2">
            Your Telegram account serves as your identity. You are responsible for all
            activity that occurs through your Telegram account on our bot.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">4. Free and Paid Plans</h2>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Free plan: Limited to 10 bills per month</li>
            <li>Pro plan: Rs.549/month for unlimited bills and premium features</li>
            <li>Pricing may change with 30 days advance notice</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">5. Payment Terms</h2>
          <p className="mt-2">
            Payments are processed securely through Razorpay. By subscribing to a paid plan,
            you authorize us to charge the applicable fees. All prices are in Indian Rupees (INR).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">6. Acceptable Use</h2>
          <p className="mt-2">You agree not to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Use the service for any illegal activity</li>
            <li>Attempt to access other users&apos; data</li>
            <li>Upload malicious content or spam the bot</li>
            <li>Reverse-engineer or attempt to extract our AI models</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">7. Limitation of Liability</h2>
          <p className="mt-2">
            {SITE.name} is provided &quot;as is&quot;. While we strive for accuracy in OCR
            and bill processing, we are not liable for any financial decisions made based on
            the data processed by our bot. Always verify important financial records independently.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">8. Contact</h2>
          <p className="mt-2">
            For questions about these terms, contact us at{" "}
            <a href={`mailto:${SITE.email}`} className="text-saffron underline">
              {SITE.email}
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
