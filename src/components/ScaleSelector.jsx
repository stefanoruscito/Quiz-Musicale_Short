import React from 'react';

export default function ScaleSelector({ scales, selectedScale, onChange }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">Seleziona scala</label>
      <select
        className="border rounded p-2 w-full"
        value={selectedScale}
        onChange={e => onChange(e.target.value)}
      >
        {scales.map(scale => (
          <option key={scale} value={scale}>
            {scale}
          </option>
        ))}
      </select>
    </div>
  );
}
