// GutWise lightweight AI recipe flow (no account needed)
// File: src/app/page.tsx

'use client';

import { useState } from 'react';

export default function HomePage() {
  const [input, setInput] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [stage, setStage] = useState<'input' | 'review'>('input');

  const extractIngredients = async () => {
    // Replace this with real AI call
    const mock = ['tomato', 'onion', 'beef', 'cheese'];
    setIngredients(mock);
    setStage('review');
  };

  const replaceItem = (item: string) => {
    // Replace with AI-driven replacement logic based on condition
    return `low-FODMAP alternative for ${item}`;
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">GutWise</h1>

      {stage === 'input' ? (
        <div className="w-full max-w-md text-center">
          <p className="mb-2">So what are we cooking today?</p>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste recipe link or ingredients"
            className="w-full border rounded p-3 h-28"
          />
          <button
            onClick={extractIngredients}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Analyse Recipe
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Suggested Adjustments</h2>
          <ul className="space-y-2">
            {ingredients.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center border p-3 rounded"
              >
                <span>{item}</span>
                <button
                  onClick={() => alert(replaceItem(item))}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Swipe for Alternative
                </button>
              </li>
            ))}
          </ul>

          <button
            className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            onClick={() => alert('Exported to Notion / Notes')}
          >
            Export to Notes or Notion
          </button>

          <p className="mt-6 text-center text-sm text-gray-500">
            Like this service? <a href="#" className="underline text-blue-600">Buy me a coffee</a>
          </p>
        </div>
      )}
    </main>
  );
}
