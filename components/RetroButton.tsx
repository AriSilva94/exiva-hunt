import { cnw } from "@/lib/cnw";

type RetroButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  formAction?: (formData: FormData) => void;
};

export default function RetroButton({
  children,
  className,
  type = "button",
  onClick,
  formAction,
}: RetroButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      formAction={formAction}
      className={cnw(
        "w-full bg-retro-yellow border-4 border-retro-brown font-retro text-retro-black py-2 active:translate-y-1 transition",
        className
      )}
    >
      {children}
    </button>
  );
}
