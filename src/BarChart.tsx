import React from 'react';

const BarChart = ({ data }) => {
  const maxValue = Math.max(...data.map(item => item.value));
  const svgWidth = 100;
  const svgHeight = 100;
  const barWidth = 40;
  const barMargin = 15;

  return (
    <svg width={svgWidth} height={svgHeight}>
      {data.map((item, index) => (
        <rect
          key={index}
          x={index * (barWidth + barMargin)}
          y={svgHeight - (item.value / maxValue) * svgHeight}
          width={barWidth}
          height={(item.value / maxValue) * svgHeight}
          fill={item.color}
        />
      ))}
    </svg>
  );
};

export default BarChart;

// 사용 예:
// <BarChart data={[{ value: 10, color: 'red' }, { value: 20, color: 'blue' }, ...]} />
