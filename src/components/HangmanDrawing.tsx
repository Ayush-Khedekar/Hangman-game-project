const HEAD = (
  <div className="w-[15%] aspect-square rounded-full border-[1vw] border-black absolute top-[11%] right-[-6.5%]" />
);

const BODY = (
  <div className="w-[1.8%] h-[20%] bg-black absolute top-[22%] right-0" />
);

const RIGHT_ARM = (
  <div className="w-[20%] h-[1.8%] bg-black absolute top-[28%] right-[-20%] rotate-[-30deg] origin-bottom-left" />
);

const LEFT_ARM = (
  <div className="w-[20%] h-[1.8%] bg-black absolute top-[28%] right-[2%] rotate-[30deg] origin-bottom-right" />
);

const RIGHT_LEG = (
  <div className="w-[20%] h-[1.8%] bg-black absolute top-[40%] right-[-18%] rotate-[55deg] origin-bottom-left" />
);

const LEFT_LEG = (
  <div className="w-[20%] h-[1.8%] bg-black absolute top-[40%] right-0 rotate-[-55deg] origin-bottom-right" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="relative w-[50vw] sm:w-[35vw] md:w-[28vw] lg:w-[260px] aspect-[3/4] mx-auto">
      {BODY_PARTS.slice(0, numberOfGuesses)}

      {/* Top rope */}
      <div className="absolute top-0 right-0 h-[12%] w-[2%] bg-black" />

      {/* Top beam */}
      <div className="absolute top-0 left-[40%] h-[2%] w-[60%] bg-black" />

      {/* Vertical pole */}
      <div className="absolute top-0 left-[40%] h-full w-[2%] bg-black" />

      {/* Base */}
      <div className="absolute bottom-0 left-0 h-[2%] w-full bg-black" />
    </div>
  );
};

export default HangmanDrawing;
