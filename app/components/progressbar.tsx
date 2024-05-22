import React from 'react';

interface CircularProgressBarProps {
  value: number;
  size: number;
  strokeWidth: number;
  text: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ value, size, strokeWidth, text }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (value / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          stroke="#dedede"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke="#84725C"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset: progress }}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', margin: 0, color: 'gray-700', fontWeight: '600', fontSize: '14px' }}>{text}</p>
    </div>
  );
};

export default CircularProgressBar;