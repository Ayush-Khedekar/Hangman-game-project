type HangmanWordProps = {
  guessedLetter: string[];
  wordToGuess: string;
  reveal?: boolean;
  winner?: boolean;

};

const HangmanWord = ({
  guessedLetter,
  wordToGuess,
  reveal = false,
  winner= true
}: HangmanWordProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          className="border-b border-black border-solid sm:border-b-[0.15em] md:border-b-[0.2em]"
        >
          <span
            className={`${
              guessedLetter.includes(letter) || reveal ? "visible" : "invisible"
            } ${
              !guessedLetter.includes(letter) && reveal
                ? "text-red-600"
                : "text-black"
            }
            ${
              guessedLetter.includes(letter) && winner
                ? "text-green-500"
                : "text-black"
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
