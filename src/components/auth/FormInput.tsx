import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: LucideIcon;
  errorMsg?: string;
  showPasswordButton?: ReactNode;
}

export default function FormInput({
  label,
  icon: Icon,
  className,
  id,
  errorMsg,
  showPasswordButton,
  ...props
}: FormInputProps) {
  return (
    <div className="space-y-2 w-full">
      <div className="relative flex items-center">
        {Icon && (
          <Icon
            className={`absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground`}
          />
        )}

        <Input
          id={id}
          placeholder={label}
          className={cn(
            `${Icon ? "pl-10" : "pr-10"} text-sm! transition-none! bg-white/6 text-white py-5.5! rounded-xl border-0!`,
            className,
          )}
          {...props}
        />

        {showPasswordButton}
      </div>

      {errorMsg && <span className="text-red-400 text-xs">{errorMsg}</span>}
    </div>
  );
}
