import { cnw } from "@/lib/cnw";

type RetroCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function RetroCard({ children, className }: RetroCardProps) {
  return (
    <div
      className={cnw(
        "bg-retro-bg border-4 border-retro-yellow shadow-retro-strong p-6 w-full max-w-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
