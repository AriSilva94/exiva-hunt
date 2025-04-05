import { cnw } from "@/lib/cnw";

type RetroTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function RetroTitle({ children, className }: RetroTitleProps) {
  return (
    <h1
      className={cnw(
        "font-retro text-retro-yellow text-lg md:text-xl text-center",
        className
      )}
    >
      {children}
    </h1>
  );
}
