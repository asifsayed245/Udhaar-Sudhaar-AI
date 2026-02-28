# Product Requirements Document
## Udhaar Sudhaar AI — Landing Page & Payment Integration

### 1. Overview

A high-converting, mobile-first landing page for **Udhaar Sudhaar AI** — a Telegram bot that helps Indian small business owners digitize paper bills via photo (OCR), track customer credit (udhaari), and manage payment statuses.

The landing page must:
- Showcase the bot's features in relatable Hinglish copy
- Convert visitors to free-tier users (Telegram bot link)
- Upsell to the Pro plan (Rs.549/month) via Razorpay checkout
- Work flawlessly on budget Android phones over 4G

---

### 2. Target Audience

- **Who:** Small business owners in India — kirana stores, general stores, hardware shops, stationery shops, etc.
- **Device:** Budget Android phones (5-6 inch screens), 4G connection
- **Language comfort:** Hinglish (Romanized Hindi mixed with English)
- **Payment preference:** UPI (GPay, PhonePe, Paytm), cards, net banking
- **Tech comfort:** Uses Telegram and WhatsApp daily, not comfortable with complex software

### 3. Branding

| Field | Value |
|-------|-------|
| Product Name | **Udhaar Sudhaar AI** |
| Tagline | "Bill ka photo lo, baaki bot sambhal lega" |
| Primary Color | #FF6B00 (Saffron) |
| Secondary Color | #0F4C81 (Deep Blue) |
| Telegram Blue | #0088CC |
| Currency Display | "Rs." (not the rupee symbol) |
| Tone | Friendly, conversational, Hinglish |

---

### 4. Pricing Model — Freemium

| | Free (Muft) | Pro |
|---|---|---|
| **Price** | Rs.0/month | **Rs.549/month** (Rs.18/din) |
| Bills per month | 10 | Unlimited |
| OCR bill scanning | Yes | Yes |
| Hindi + English | Yes | Yes |
| Udhaari tracking | Yes | Yes |
| Partial payments | No | Yes |
| Priority support | No | Yes |

**Price anchor copy:** "Ek register Rs.50. Ek POS machine Rs.15,000+. Udhaar Sudhaar AI sirf Rs.549/month."

---

### 5. Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 15 (App Router) | SSR for SEO, API routes for Razorpay, fast on slow networks |
| CSS | Tailwind CSS v4 | Utility-first, tiny bundles, mobile-first |
| Components | shadcn/ui | Copy-paste components, zero bloat |
| Icons | Lucide React | Tree-shakeable, ships with shadcn |
| Animations | Framer Motion (minimal) | Scroll-triggered, lazy-loaded |
| Fonts | Inter + Noto Sans Devanagari | via next/font/google, variable fonts |
| Payment | Razorpay Standard Checkout | UPI/GPay/Paytm/cards, best Indian coverage |
| Deployment | Vercel | Zero-config Next.js, Mumbai edge PoP |

---

### 6. Landing Page Sections

#### 6.1 Navbar
- Sticky, transparent on hero, white background on scroll
- Links: Features | How It Works | Pricing | FAQ
- CTA button: "Start Free" (always visible)
- Mobile: hamburger menu (shadcn Sheet)

#### 6.2 Hero Section
- **Headline:** "Bill ka photo lo, baaki bot sambhal lega"
- **Subheadline:** "India's simplest Telegram bot for small business billing and udhaari tracking. No app download needed."
- **CTA Primary:** "Telegram par shuru karo" → t.me/bot_link
- **CTA Secondary:** "Watch Demo" → scroll to demo section
- **Visual:** Phone mockup with Telegram bot conversation
- **Social proof:** "500+ dukandaar already use Udhaar Sudhaar AI"

#### 6.3 Pain Points — "Kya aapko bhi yeh problem hai?"
| Icon | Pain Point | Description |
|------|-----------|-------------|
| Notebook | Udhaari ka hisaab kaagaz par? | Paper registers get lost, torn, or mixed up |
| Clock | Bill banane mein time waste? | Manual entry takes hours every day |
| Confused | Kitna baaki hai, yaad nahi? | Customer disputes over outstanding amounts |
| Phone | Mahenge software ki zaroorat nahi | POS machines cost Rs.15,000+, you just need your phone |

#### 6.4 How It Works — "Sirf 3 step mein sab set"
1. **Bill ka photo bhejo** — Send photo on Telegram
2. **Bot sab padh lega** — AI reads every item and amount automatically
3. **Paid ya Pending mark karo** — One tap, done. Check udhaari anytime.

#### 6.5 Features — "Sab kuch ek bot mein"
| Feature | Hinglish Description |
|---------|---------------------|
| Photo se bill entry | Handwritten ya printed — AI sab padh leta hai |
| Hindi mein baat karo | Bot Hindi, English, Hinglish — sab samajhta hai |
| Udhaari tracking | Har customer ka pending amount ek jagah |
| Partial payment | Aadha paisa aaya? Record karo, baaki track karo |
| Poochho kuch bhi | "Ramesh ka kitna baaki hai?" — bas type karo |
| Safe aur private | Sirf aapka data, sirf aapko dikhe |

#### 6.6 Demo — "Dekho kaise kaam karta hai"
- Swipeable carousel of 4-5 annotated phone mockup screenshots
- Flow: bill upload → OCR result → inline buttons → query response
- Placeholder screenshots initially, replace with real ones

#### 6.7 Testimonials — "Dukandaar kya keh rahe hain"
- 3 testimonial cards with name, store name, city
- Placeholder content labeled "Early Adopter" until real testimonials collected

#### 6.8 Pricing — "Saste mein smart billing"
- Two pricing cards (Free vs Pro) as defined in Section 4
- Pro card highlighted with "Most Popular" badge
- Price anchor copy below the cards

#### 6.9 Trust Signals
- "Made in India" / "Bharat mein bana" badge
- "Payments secured by Razorpay" badge
- "Built on Telegram — 80 crore+ users trust it"
- "Your data is encrypted and private"
- Payment method icons: UPI, GPay, Paytm, Card, Net Banking

#### 6.10 FAQ (Accordion)
| Question (Hinglish) | Answer |
|---------------------|--------|
| Kya mujhe koi app download karni padegi? | Nahi! Sirf Telegram chahiye. |
| Kya yeh Hindi mein kaam karta hai? | Haan. Hindi, English, ya Hinglish — sab chalta hai. |
| Mera data safe hai? | 100%. Sirf aapko dikhai deta hai. Koi aur access nahi kar sakta. |
| Agar bill galat read ho jaye toh? | Bot dikhayega kya padha. Aap easily correct kar sakte ho. |
| Cancel kaise karu? | Kabhi bhi cancel karo. 7-day refund guarantee. |
| Printed aur haath se likhe dono bill chalenge? | Haan, dono. AI handwritten aur printed dono padh sakta hai. |
| Mujhe computer chahiye? | Bilkul nahi. Sab kuch phone se — Telegram pe. |

#### 6.11 Final CTA
- Bold saffron gradient background
- "Aaj hi apni dukaan ko smart banao"
- Two buttons: Start on Telegram | WhatsApp par poochho

#### 6.12 Footer
- Product links: Features, Pricing, FAQ
- Support: WhatsApp, Email
- Legal: Privacy Policy, Terms of Service, Refund Policy
- "Made with love in India"

---

### 7. Razorpay Payment Integration

#### 7.1 Server-Side
- **`/api/razorpay/create-order`** — POST endpoint, creates order (Rs.549 = 54900 paise), returns orderId
- **`/api/razorpay/verify-payment`** — POST endpoint, verifies signature (HMAC SHA256), triggers n8n webhook on success

#### 7.2 Client-Side
- `RazorpayCheckout.tsx` — Loads checkout.js dynamically, opens modal
- Checkout config: name "Udhaar Sudhaar AI", description "Pro Plan - Monthly Subscription"
- Theme color: #FF6B00
- Prefill: phone number field (critical for Indian UPI payments)

#### 7.3 Environment Variables (`.env.local`, gitignored)
```
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxx
```

#### 7.4 Legal Pages (mandatory for Razorpay KYC)
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service
- `/refund` — Refund Policy (7-day money-back guarantee)

---

### 8. Design Constraints

#### Mobile-First
- Single-column on mobile, responsive grid on desktop
- Touch targets minimum 44x44px
- Sticky bottom CTA bar on mobile
- Page weight target: <500KB, FCP <1.5s on 4G
- All images via `next/image` with WebP, lazy-loaded below fold
- Floating WhatsApp support button (bottom-right corner)

#### Copy Strategy — Romanized Hinglish
- Headlines: Romanized Hindi for emotional connection
- Subheadlines: English for clarity and professionalism
- Feature descriptions: Conversational Hinglish
- CTAs: Hinglish ("Start karo", "Subscribe karo")
- Legal pages: English only
- Currency: Always "Rs." not the rupee symbol (consistent with bot)

#### Color Theme
```
Primary (CTA):    #FF6B00 (Saffron)
Primary Hover:    #E55F00
Secondary:        #0F4C81 (Deep Blue)
Telegram Blue:    #0088CC
Success:          #16A34A
Warning:          #F59E0B
BG Primary:       #FFFFFF
BG Light Saffron: #FFF7ED
BG Light Blue:    #F0F9FF
Text Primary:     #1A1A2E
Text Secondary:   #4A5568
Text Muted:       #9CA3AF
```

---

### 9. Bot Features Reference (from main PRD)

These are the actual Telegram bot capabilities that the landing page must accurately represent:

1. **OCR Bill Scanning** — Photo of handwritten/printed bill → AI extracts items, amounts, total
2. **Total Validation** — Auto-detects if item totals don't match bill total, guides correction
3. **Duplicate Detection** — Warns if a similar finalized bill already exists
4. **Interactive Buttons** — Paid/Pending/Partial/Add Name/Add Date/Add Address (one-tap)
5. **Natural Language Queries** — "Ramesh ka kitna baaki?" works in Hindi/English/Hinglish
6. **Partial Payments** — Track how much paid, how much remaining
7. **Multilingual** — Turn-by-turn language adaptation (Hindi ↔ English)
8. **Data Privacy** — Each user only sees their own data (chat_id isolation)
9. **State Machine** — Smart context: knows if you're correcting a mismatch, entering a name, etc.
10. **Voice Support** — Voice-to-text queries work via Telegram

---

### 10. Open Items / Future Updates

- [ ] Real Telegram bot link (t.me/???) — update in Hero CTA and Final CTA
- [ ] Real WhatsApp support number — update in WhatsApp float and CTAs
- [ ] Real testimonials — replace placeholder content
- [ ] Real phone mockup screenshots — replace placeholder images
- [ ] Logo/favicon design — create SVG wordmark
- [ ] Razorpay account activation — get live API keys after KYC
- [ ] OG image for social sharing (1200x630)
- [ ] Google Analytics / Vercel Analytics setup
- [ ] Post-payment flow — n8n webhook to provision premium access
