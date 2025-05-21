import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";

interface BorderBeamButtonProps {
  text: string;
}

export function BorderBeamButton({ text }: BorderBeamButtonProps) {
  return (
    <Button className="relative overflow-hidden rounded-full" size="lg" variant="outline">
      {text}
      <BorderBeam
        size={60}
        initialOffset={30}
        className="from-pink-300 to-blue-200 opacity-50"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 180,
        }}
      />
    </Button>
  );
}
