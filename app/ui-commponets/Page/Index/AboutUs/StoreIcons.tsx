type StoreIconProps = {
  variant: "home" | "medium" | "warehouse";
  className?: string;
};

export default function StoreIcon({ variant, className = "h-10 w-10" }: StoreIconProps) {
  const stroke = "currentColor";

  if (variant === "home") {
    return (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden className={className}>
        <path
          d="M10 28L32 12L54 28V50C54 51.1 53.1 52 52 52H12C10.9 52 10 51.1 10 50V28Z"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M24 52V36H40V52" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M18 24L32 14L46 24" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "medium") {
    return (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden className={className}>
        <rect x="12" y="18" width="40" height="34" rx="3" stroke={stroke} strokeWidth="2.5" />
        <path d="M12 28H52" stroke={stroke} strokeWidth="2.5" />
        <rect x="18" y="34" width="10" height="10" rx="1.5" stroke={stroke} strokeWidth="2.2" />
        <rect x="36" y="34" width="10" height="10" rx="1.5" stroke={stroke} strokeWidth="2.2" />
        <path d="M20 18V12H44V18" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden className={className}>
      <path
        d="M10 24L32 10L54 24V50C54 51.1 53.1 52 52 52H12C10.9 52 10 51.1 10 50V24Z"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M22 52V34H42V52" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M22 34H42" stroke={stroke} strokeWidth="2.5" />
      <path d="M28 34V24H36V34" stroke={stroke} strokeWidth="2.5" />
      <rect x="16" y="40" width="8" height="8" rx="1" stroke={stroke} strokeWidth="2" />
      <rect x="40" y="40" width="8" height="8" rx="1" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}
