const HEAD = (
  <div className="w-[15%] aspect-square rounded-full border-[1.2vw] border-black absolute top-[12%] right-[-7%]" />
);

const BODY = (
  <div className="w-[2%] h-[22%] bg-black absolute top-[23%] right-0" />
);

const RIGHT_ARM = (
  <div className="w-[22%] h-[2%] bg-black absolute top-[30%] right-[-22%] rotate-[-30deg] origin-bottom-left" />
);

const LEFT_ARM = (
  <div className="w-[22%] h-[2%] bg-black absolute top-[30%] right-[2%] rotate-[30deg] origin-bottom-right" />
);

const RIGHT_LEG = (
  <div className="w-[22%] h-[2%] bg-black absolute top-[42%] right-[-20%] rotate-[55deg] origin-bottom-left" />
);

const LEFT_LEG = (
  <div className="w-[22%] h-[2%] bg-black absolute top-[42%] right-0 rotate-[-55deg] origin-bottom-right" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="relative w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[300px] aspect-[3/4] mx-auto">
      {BODY_PARTS.slice(0, numberOfGuesses)}

      <div className="absolute top-0 right-0 h-[12%] w-[2%] bg-black" />
      <div className="absolute top-0 left-[40%] h-[2%] w-[60%] bg-black" />
      <div className="absolute top-0 left-[40%] h-full w-[2%] bg-black" />
      <div className="absolute bottom-0 left-0 h-[2%] w-full bg-black" />
    </div>
  );
};

export default HangmanDrawing;
