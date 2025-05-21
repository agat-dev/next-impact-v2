import { BorderBeam } from "@/components/magicui/border-beam";



export function BorderBeamButton() {
  return (
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
  );
}
