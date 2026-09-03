import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";
import ShinyText from "../ShinyText";

export default function AuthLayout({
  children,
  headerText,
}: {
  children: ReactNode;
  headerText: string;
}) {
  return (
    <Card className="px-4 py-6 rounded-2xl overflow-hidden bg-white/3 w-full max-w-sm mx-auto shadow-[inset_0_0_16px_2px_rgba(255,255,255,0.10)]">
      <CardHeader className="w-full flex items-center justify-center">
        <ShinyText
          text={headerText}
          speed={2}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
          className="font-bold text-2xl"
        />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
