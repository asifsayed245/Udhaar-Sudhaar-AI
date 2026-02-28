import { SITE } from "@/lib/constants";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-muted-foreground">Last updated: February 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-lg font-semibold text-foreground">1. Information We Collect</h2>
          <p className="mt-2">
            {SITE.name} collects the following information when you use our Telegram bot:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Telegram chat ID and user ID (for account identification)</li>
            <li>Bill images you upload (for OCR processing)</li>
            <li>Customer names, amounts, and payment statuses you enter</li>
            <li>Messages you send to the bot</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">2. How We Use Your Data</h2>
          <p className="mt-2">Your data is used exclusively to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Process bill images and extract text via OCR</li>
            <li>Store and manage your sales records</li>
            <li>Respond to your natural language queries</li>
            <li>Process payments via Razorpay</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">3. Data Isolation</h2>
          <p className="mt-2">
            Each user&apos;s data is strictly isolated. Your bill records, customer names, and
            financial data are only accessible to your Telegram account. No other user can
            see or access your data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">4. Data Storage</h2>
          <p className="mt-2">
            Your data is stored securely on Supabase (PostgreSQL) servers with encryption
            at rest. Bill images are processed in real-time and not permanently stored on
            our servers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">5. Third-Party Services</h2>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Telegram Bot API (messaging platform)</li>
            <li>OpenAI (OCR and natural language processing)</li>
            <li>Supabase (database hosting)</li>
            <li>Razorpay (payment processing)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">6. Data Deletion</h2>
          <p className="mt-2">
            You may request deletion of all your data at any time by contacting us at{" "}
            <a href={`mailto:${SITE.email}`} className="text-saffron underline">
              {SITE.email}
            </a>. We will process your request within 7 business days.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">7. Contact</h2>
          <p className="mt-2">
            For privacy-related questions, contact us at{" "}
            <a href={`mailto:${SITE.email}`} className="text-saffron underline">
              {SITE.email}
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
