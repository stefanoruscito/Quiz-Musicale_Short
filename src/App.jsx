import React, { useState } from 'react';
import ScaleSelector from './components/ScaleSelector';
import QuestionCountSelector from './components/QuestionCountSelector';

export default function App() {
  const scales = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'];
  const [selectedScale, setSelectedScale] = useState(scales[0]);
  const [questionCount, setQuestionCount] = useState(5);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Quiz Scale Musicali</h1>
      <ScaleSelector
        scales={scales}
        selectedScale={selectedScale}
        onChange={setSelectedScale}
      />
      <QuestionCountSelector
        min={1}
        max={12}
        count={questionCount}
        onChange={setQuestionCount}
      />
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Inizia Quiz
      </button>
    </div>
  );
}
