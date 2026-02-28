import { Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-saffron">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">{SITE.name}</span>
            </div>
            <p className="mt-3 text-sm text-white/60">
              Smart billing for smart dukandaar. Photo bhejo, bill ban jaye.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Product
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-white/60 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-white/60 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Support
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-sm text-white/60 hover:text-white transition-colors">
                  Email Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Legal
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/privacy" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="/refund" className="text-sm text-white/60 hover:text-white transition-colors">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/40">
            Made with love in India
          </p>
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
