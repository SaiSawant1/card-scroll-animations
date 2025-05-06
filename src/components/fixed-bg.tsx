import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export const FixedBg = () => {
  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".animate-card");

    gsap.set(cards, {
      x: "650%",
      y: "290%",
    });

    gsap.to(cards, {
      duration: 4,
      motionPath: {
        path: [
          { x: "650%", y: "290%", rotationZ: 0 },
          { x: "300%", y: "100%", rotationYZ: 45 },
          { x: "-200%", y: "300%", rotationZ: -35 },
        ],
        curviness: 1.5,
        autoRotate: false,
      },
      ease: "power1.inOut",
      stagger: 0.4,
      scrollTrigger: {
        trigger: "#review-section",
        start: "top 0",
        scrub: true,
        markers: true,
        pin: true
      },
    });
  }, []);




  return (
    <div className="absolute inset-0 z-[100] p-15 gradient">
      <div className="h-full z-[200] flex  relative overflow-x-hidden overflow-y-clip border-15 rounded-2xl border-white">
        <p className="text-8xl text-left py-20 uppercase z-[1] px-20">
          great work can't happen without A team.
        </p>
        <div className="flex flex-col gap-5 py-10 px-20 ">
          <p className="text-3xl">
            When working with us, you get the value of working with founders. Building strong relationships with out client is at the heart of our approach.
          </p>
          <p className="text-3xl">
            we take the time to understand your unique needs and create tailorder design solutions to help you make an impact.
          </p>
        </div>
        {[1, 2, 3, 4, 5].map((i) => <Card key={i} />)}
      </div>
    </div>
  )

}


export const Card = () => {

  return (
    <div className="animate-card bg-white/0 absolute z-[10] bg-opacity-20 p-4 rounded-md shadow-xl border-6 border-white/30 min-h-fit max-w-72"
      style={{
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)'
      }}
    >
      <div className="text-xl font-bold text-black mb-2">TechNova Solutions</div>
      <div className="text-black mb-4">
        A forward-thinking company with a strong culture of innovation. Team collaboration was smooth and leadership was transparent with goals and expectations. Great place for early-career growth.
      </div>
      <div className="text-sm text-black">Reviewed by: Aisha Patel, CTO</div>
    </div>
  )
}
