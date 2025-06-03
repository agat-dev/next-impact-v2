import { BorderBeam } from "@/components/magicui/border-beam";



export function BorderBeamEffect() {
  return (
      <BorderBeam
        size={60}
        initialOffset={60}
        className="from-yellow-300 to-orange-700 opacity-50"
      />
  );
}
