import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled?: boolean;
  activeLetter: string[];
  inActiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};
const Keyboard = ({
  disabled,
  activeLetter,
  addGuessedLetter,
  inActiveLetters,
}: KeyboardProps) => {
  return (
    <div className="grid [grid-template-columns:repeat(auto-fit,minmax(50px,1fr))] gap-2 sm:gap-3 lg:gap-5 sm:max-w-[90vw] mx-auto">
      {KEYS.map((letter, index) => {
        const isActive = activeLetter.includes(letter);
        const isInactive = inActiveLetters.includes(letter);
        return (
          <button
            onClick={() => addGuessedLetter(letter)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isActive || isInactive || disabled}
            key={index}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
