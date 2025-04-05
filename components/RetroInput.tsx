import { cnw } from "@/lib/cnw";

type RetroInputProps = {
  label: string;
  id: string;
  name: string;
  type?: string;
  className?: string;
};

export default function RetroInput({
  label,
  id,
  name,
  type = "text",
  className,
}: RetroInputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-retro text-retro-yellow block mb-2 text-sm"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className={cnw(
          "w-full font-retro text-retro-yellow bg-[#2e2e2e] border-4 border-retro-yellow px-2 py-1 text-sm focus:outline-none",
          className
        )}
      />
    </div>
  );
}
