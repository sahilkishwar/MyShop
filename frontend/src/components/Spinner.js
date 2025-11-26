import { useState } from "react";

const prizes = [
  "10% OFF",
  "Free Shipping",
  "₹200 Cashback",
  "Buy 1 Get 1",
  "5% OFF",
  "Better luck next time 😅"
];

export default function Spinner() {
  const [result, setResult] = useState("");

  const spin = () => {
    const random = Math.floor(Math.random() * prizes.length);
    setResult(prizes[random]);
  };

  return (
    <div className="text-center my-6">
      <button
        onClick={spin}
        className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition"
      >
        🎡 Spin & Win
      </button>
      {result && (
        <p className="mt-4 text-xl font-bold text-green-600">{result}</p>
      )}
    </div>
  );
}
