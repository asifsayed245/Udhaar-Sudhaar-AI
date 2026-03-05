export const SITE = {
  name: "Udhaar Sudhaar AI",
  tagline: "Bill ka photo lo, baaki bot sambhal lega",
  description:
    "India's simplest Telegram bot for small business billing and udhaari tracking. No app download needed.",
  telegramBot: "https://t.me/Khaata_bot",
  whatsapp: "", // TODO: add WhatsApp number when ready
  email: "support@udhaarsudhaar.ai",
} as const;

export const PRICING = {
  pro: {
    name: "Pro",
    nameHindi: "Pro",
    price: 549,
    priceInPaise: 54900,
    priceDisplay: "Rs.549",
    pricePerDay: "Rs.18/din",
    period: "/month",
    features: [
      "Unlimited bills",
      "OCR bill scanning",
      "Hindi + English support",
      "Udhaari tracking",
      "Partial payment tracking",
      "Priority support",
    ],
    cta: "Subscribe Now",
    ctaHindi: "Subscribe karo",
    highlighted: true,
  },
} as const;

export const FEATURES = [
  {
    icon: "Camera",
    title: "Photo se bill entry",
    description: "Handwritten ya printed — AI sab padh leta hai",
  },
  {
    icon: "Languages",
    title: "Hindi mein baat karo",
    description: "Bot Hindi, English, Hinglish — sab samajhta hai",
  },
  {
    icon: "BookOpen",
    title: "Udhaari tracking",
    description: "Har customer ka pending amount ek jagah",
  },
  {
    icon: "IndianRupee",
    title: "Partial payment",
    description: "Aadha paisa aaya? Record karo, baaki track karo",
  },
  {
    icon: "MessageCircle",
    title: "Poochho kuch bhi",
    description: '"Ramesh ka kitna baaki hai?" — bas type karo',
  },
  {
    icon: "Shield",
    title: "Safe aur private",
    description: "Sirf aapka data, sirf aapko dikhe",
  },
] as const;

export const PAIN_POINTS = [
  {
    icon: "BookOpen",
    title: "Udhaari ka hisaab kaagaz par?",
    description:
      "Paper registers get lost, torn, or mixed up. Aap bhool jaate ho ki kiska kitna baaki hai.",
  },
  {
    icon: "Clock",
    title: "Bill banane mein time waste?",
    description:
      "Haath se har item likhna takes 10-15 minutes per bill. Din ka ghanton ka kaam.",
  },
  {
    icon: "HelpCircle",
    title: "Kitna baaki hai, yaad nahi?",
    description:
      'Customer bole Rs.500 baaki, register mein likha Rs.800. Jhagda shuru.',
  },
  {
    icon: "Smartphone",
    title: "Mahenge software ki zaroorat nahi",
    description:
      "POS machines Rs.15,000+ ki aati hain. Aapko bas phone chahiye.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Kya mujhe koi app download karni padegi?",
    answer:
      "Nahi! Sirf Telegram chahiye. Agar Telegram hai, toh aap ready ho. Koi extra app download nahi karni.",
  },
  {
    question: "Kya yeh Hindi mein kaam karta hai?",
    answer:
      "Haan, bilkul. Aap Hindi, English, ya Hinglish mein baat kar sakte ho. Bot automatically samajh leta hai.",
  },
  {
    question: "Mera data safe hai?",
    answer:
      "100% safe. Aapka data sirf aapko dikhai deta hai. Koi aur user access nahi kar sakta. Sab encrypted hai.",
  },
  {
    question: "Agar bill galat read ho jaye toh?",
    answer:
      'Bot aapko dikhayega ki kya padha. Aap easily correct kar sakte ho — bas type karo "chini 50" ya "total 500".',
  },
  {
    question: "Cancel kaise karu?",
    answer:
      "Kabhi bhi cancel karo, koi sawaal nahi. 7-day refund guarantee. No questions asked.",
  },
  {
    question: "Printed aur haath se likhe dono bill chalenge?",
    answer:
      "Haan, dono. AI handwritten aur printed dono bills padh sakta hai. Bas clear photo bhejo.",
  },
  {
    question: "Mujhe computer chahiye?",
    answer:
      "Bilkul nahi. Sab kuch phone se hota hai — Telegram pe. Computer ki koi zaroorat nahi.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Ramesh Gupta",
    store: "Gupta General Store",
    city: "Delhi",
    text: "Pehle 2 ghante register mein likhta tha. Ab photo bhejta hoon, 2 minute mein sab ho jaata hai.",
    rating: 5,
  },
  {
    name: "Suresh Patel",
    store: "Patel Kirana",
    city: "Ahmedabad",
    text: "Udhaari ka jhagda khatam. Customer bhi khush, main bhi tension free.",
    rating: 5,
  },
  {
    name: "Mohan Singh",
    store: "Singh Provision Store",
    city: "Lucknow",
    text: "Mujhe computer nahi aata, par Telegram toh chalata hoon. Isne mera kaam bahut aasan kar diya.",
    rating: 5,
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    icon: "Camera",
    title: "Bill ka photo bhejo",
    description: "Telegram pe bill ki photo send karo — bas itna karo",
  },
  {
    step: 2,
    icon: "Bot",
    title: "Bot sab padh lega",
    description: "AI har item, amount aur total automatically read kar leta hai",
  },
  {
    step: 3,
    icon: "CheckCircle",
    title: "Paid ya Pending mark karo",
    description: "Ek button dabao — done. Udhaari check karo kabhi bhi",
  },
] as const;
