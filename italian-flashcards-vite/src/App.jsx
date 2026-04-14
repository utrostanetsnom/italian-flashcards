import { useState } from "react";

const cards = [
  { term: "ciao", meaning: "привет / пока" },
  { term: "buongiorno", meaning: "доброе утро" },
  { term: "buonasera", meaning: "добрый вечер" },
  { term: "gatto", meaning: "кот" },
  { term: "cane", meaning: "собака" },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const card = cards[index];

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Italian Flashcards</h1>

      <div style={{ marginTop: 40, fontSize: 32 }}>
        {card.term}
      </div>

      {show && (
        <div style={{ marginTop: 20, fontSize: 24 }}>
          {card.meaning}
        </div>
      )}

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setShow(!show)}>Показать ответ</button>
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setIndex((index + 1) % cards.length)}>
          Следующая
        </button>
      </div>
    </div>
  );
}
