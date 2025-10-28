import { Copy, Facebook, MessageCircle, Twitter } from "lucide-react";

const shareOptions = [
  { id: "facebook", label: "Share on Facebook", Icon: Facebook },
  { id: "x", label: "Share on X", Icon: Twitter },
  { id: "whatsapp", label: "Share on WhatsApp", Icon: MessageCircle },
  { id: "copy", label: "Copy link", Icon: Copy },
];

export default function ShareRail() {
  return (
    <aside
      aria-label="Share"
      className="sticky top-28 hidden flex-col items-center gap-3 lg:flex"
    >
      {shareOptions.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-600 shadow-sm transition hover:border-stone-300 hover:text-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
        >
          <Icon aria-hidden className="h-4 w-4" />
        </button>
      ))}
    </aside>
  );
}
