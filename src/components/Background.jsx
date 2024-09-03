import { Parallax } from "react-scroll-parallax";

const Background = () => {
  return (
    <section className="flex flex-col h-full absolute w-full  -z-50 opacity-70">
      <Parallax
        rotate={[0, 360]}
        translateX={["5%", "10%"]}
        translateY={["0%", "5%"]}
        scale={[1, 1.8, "easeInQuad"]}
        perspective={500}
      >
        <img src="/background/2.png" alt="Layer 1" />
      </Parallax>

      <Parallax
        rotate={[-360, 360]}
        translateX={["-10%", "20%"]}
        translateY={["10%", "30%"]}
        scale={[1, 1.6, "easeOutQuad"]}
        perspective={700}
      >
        <img src="/background/4.png" alt="Layer 2" />
      </Parallax>
      <Parallax
        rotate={[0, 360]}
        translateX={["20%", "-20%"]}
        translateY={["-10%", "20%"]}
        scale={[1, 2, "easeInOutCubic"]}
        perspective={900}
      >
        <img src="/background/5.png" alt="Layer 3" />
      </Parallax>
      <Parallax
        rotate={[360, -360]}
        translateX={["15%", "35%"]}
        translateY={["20%", "40%"]}
        scale={[1, 1.7, "easeInQuad"]}
        perspective={600}
      >
        <img src="/background/2.png" alt="Layer 4" />
      </Parallax>
      <Parallax
        rotate={[0, 360]}
        translateX={["-20%", "30%"]}
        translateY={["30%", "50%"]}
        scale={[1, 1.5, "easeOutQuad"]}
        perspective={800}
      >
        <img src="/background/4.png" alt="Layer 5" />
      </Parallax>
      <Parallax
        rotate={[-360, 360]}
        translateX={["25%", "-25%"]}
        translateY={["-20%", "20%"]}
        scale={[1, 2.2, "easeInOutCubic"]}
        perspective={1000}
      >
        <img src="/background/5.png" alt="Layer 6" />
      </Parallax>
    </section>
  );
};

export default Background;
