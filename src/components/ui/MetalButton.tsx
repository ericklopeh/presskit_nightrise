import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-metal-chrome/95 to-metal-silver/85 text-metal-black shadow-glow hover:brightness-105 active:brightness-95 border border-white/25",
  ghost:
    "bg-metal-steel/40 text-metal-chrome hover:bg-metal-steel/60",
  outline:
    "bg-transparent text-metal-chrome hover:bg-white/[0.06]",
  light:
    "!shadow-none bg-white text-black border border-white hover:bg-metal-chrome hover:text-black active:brightness-95",
};

export function MetalButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold uppercase tracking-wider transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-metal-chrome/70 disabled:cursor-not-allowed disabled:opacity-45 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function MetalLink({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
  download,
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      download={download}
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold uppercase tracking-wider transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-metal-chrome/70 ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
