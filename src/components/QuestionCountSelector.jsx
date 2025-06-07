import React from 'react';

export default function QuestionCountSelector({ min, max, count, onChange }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">Numero di domande</label>
      <input
        type="number"
        min={min}
        max={max}
        value={count}
        onChange={e => onChange(+e.target.value)}
        className="border rounded p-2 w-full"
      />
      <p className="text-sm text-gray-500">Scegli un valore tra {min} e {max}.</p>
    </div>
  );
}
