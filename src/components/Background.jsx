import { Parallax } from "react-scroll-parallax";

const Background = () => {
  return (
    <section className="absolute inset-0 w-full h-full -z-50 opacity-70">
      {/* Top Layers */}
      <Parallax
        rotate={[0, 360]}
        translateX={["2%", "10%"]}
        translateY={["0%", "5%"]}
        scale={[1, 1.5]}
        perspective={600}
        easing="easeInOutQuad"
      >
        <img
          src="/background/2.png"
          alt="Layer 1"
          className="w-1/2 h-auto mx-auto my-8"
        />
      </Parallax>

      <Parallax
        rotate={[-360, 360]}
        translateX={["-10%", "20%"]}
        translateY={["5%", "15%"]}
        scale={[1, 1.4]}
        perspective={800}
        easing="easeOutQuad"
      >
        <img
          src="/background/4.png"
          alt="Layer 2"
          className="w-1/2 h-auto mx-auto my-8"
        />
      </Parallax>

      {/* Middle Layers */}
      <Parallax
        rotate={[0, 360]}
        translateX={["15%", "-15%"]}
        translateY={["-5%", "10%"]}
        scale={[1, 1.6]}
        perspective={1000}
        easing="easeInOutCubic"
      >
        <img
          src="/background/5.png"
          alt="Layer 3"
          className="w-1/2 h-auto mx-auto my-8"
        />
      </Parallax>

      <Parallax
        rotate={[-360, 360]}
        translateX={["10%", "25%"]}
        translateY={["10%", "20%"]}
        scale={[1, 1.3]}
        perspective={700}
        easing="easeInQuad"
      >
        <img
          src="/background/2.png"
          alt="Layer 4"
          className="w-1/2 h-auto mx-auto my-8"
        />
      </Parallax>

      {/* Bottom Layers */}
      <Parallax
        rotate={[0, 360]}
        translateX={["-15%", "30%"]}
        translateY={["15%", "25%"]}
        scale={[1, 1.5]}
        perspective={900}
        easing="easeOutQuad"
      >
        <img
          src="/background/4.png"
          alt="Layer 5"
          className="w-1/2 h-auto mx-auto my-8"
        />
      </Parallax>

      <Parallax
        rotate={[-360, 360]}
        translateX={["20%", "-20%"]}
        translateY={["-10%", "15%"]}
        scale={[1, 1.7]}
        perspective={1200}
        easing="easeInOutCubic"
      >
        <img
          src="/background/5.png"
          alt="Layer 6"
          className="w-1/2 h-auto mx-auto my-8"
        />
      </Parallax>

      {/* Additional Filler Layers */}
      <Parallax
        rotate={[180, -180]}
        translateX={["5%", "-5%"]}
        translateY={["7%", "-7%"]}
        scale={[1.1, 1.3]}
        perspective={1300}
        easing="easeInOutCubic"
      >
        <img
          src="/background/2.png"
          alt="Layer 7"
          className="w-1/2 h-auto mx-auto my-8"
        />
      </Parallax>

      <Parallax
        rotate={[0, 180]}
        translateX={["-7%", "7%"]}
        translateY={["-10%", "10%"]}
        scale={[1.2, 1.4]}
        perspective={1400}
        easing="easeInQuad"
      >
        <img
          src="/background/4.png"
          alt="Layer 8"
          className="w-1/2 h-auto mx-auto my-8"
        />
      </Parallax>
    </section>
  );
};

export default Background;
