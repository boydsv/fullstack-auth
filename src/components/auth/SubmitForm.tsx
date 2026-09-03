import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

const SubmitForm = ({
  text,
  isSubmitting,
}: {
  text: string;
  isSubmitting: boolean;
}) => {
  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className={`h-12 mt-4 w-full text-lg font-medium text-black cursor-pointer ${isSubmitting ? "bg-neutral-400" : "bg-white hover:bg-white/90"} transition-none!`}
    >
      {isSubmitting ? <Loader2Icon className="animate-spin size-6" /> : text}
    </Button>
  );
};

export default SubmitForm;
