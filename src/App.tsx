import { useCallback, useEffect, useState } from "react";
import words from "./words.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}
const App = () => {
  const [wordGuess, setWordGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const inCorrectGuesses = guessedLetters.filter(
    (letter) => !wordGuess.includes(letter)
  );
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return;

      setGuessedLetters((prevGuess) => [...prevGuess, letter]);
      console.log(guessedLetters);
    },
    [guessedLetters]
  );

  const isLoser = inCorrectGuesses.length >= 6;
  const isWinner = wordGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div className="max-w-[800px] flex flex-col gap-[2rem] m-auto items-center">
      <div className="text-[2rem] text-center">
        {isWinner && "Winner! - Refresh the page to play again."}
        {isLoser && "NIce try! - Refresh the page to play again."}
      </div>
      <HangmanDrawing numberOfGuesses={inCorrectGuesses.length} />
      <HangmanWord
        guessedLetter={guessedLetters}
        wordToGuess={wordGuess}
        reveal={isLoser}
        winner={isWinner}
      />
      <div className="w-full self-stretch">
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetter={guessedLetters.filter((letter) =>
            wordGuess.includes(letter)
          )}
          inActiveLetters={inCorrectGuesses}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
};

export default App;
