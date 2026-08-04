import { ReactiveLight } from "@/components/experience/ReactiveLight";
import type { ArtifactIntent } from "@/components/hero/HeroContent";

interface HeroAtmosphereProps {
  intent: ArtifactIntent;
}

export function HeroAtmosphere({ intent }: HeroAtmosphereProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#030608]" />

      <ReactiveLight
        energized={intent === "primary"}
        className="-left-[4%] top-[-18%] h-[132%] w-[108%] bg-[radial-gradient(ellipse_46%_48%_at_68%_48%,rgba(103,232,249,.18)_0%,rgba(75,116,151,.075)_31%,rgba(3,6,8,0)_72%)]"
      />

      <div className="absolute -right-[15%] top-[5%] h-[90%] w-[79%] -rotate-[3deg] bg-[linear-gradient(116deg,rgba(3,6,8,0)_5%,rgba(125,211,252,.035)_36%,rgba(167,139,250,.045)_57%,rgba(3,6,8,0)_83%)] [clip-path:polygon(20%_0,100%_9%,88%_100%,0_79%)]" />
      <div className="absolute left-[34%] top-[17%] h-[73%] w-[76%] rotate-[1deg] bg-[linear-gradient(138deg,rgba(0,0,0,.72),rgba(4,12,16,.18)_48%,transparent_72%)] [clip-path:polygon(0_19%,79%_0,100%_78%,22%_100%)]" />
      <div className="absolute inset-0 opacity-[0.17] [background-image:repeating-linear-gradient(119deg,transparent_0,transparent_22px,rgba(220,252,255,.025)_23px,transparent_24px)] [mask-image:linear-gradient(95deg,transparent_22%,black_61%,transparent_96%)]" />
      <div className="absolute bottom-[5%] left-[36%] h-[24%] w-[68%] -rotate-2 bg-[radial-gradient(ellipse_at_center,rgba(103,232,249,.055),transparent_68%)] blur-xl" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/46 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#030609]/72 to-neutral-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,.56)_100%)]" />
    </div>
  );
}
