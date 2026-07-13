export default function FaqWaveBackground() {
  const topWaves = Array.from({ length: 20 }, (_, index) => {
    const offset = index * 7;
    const y = 228 + offset;
    const peak = 72 + offset;
    const opacity = 0.08 + (1 - Math.abs(index - 9.5) / 10) * 0.1;

    return {
      d: `M-160 ${y} C 240 ${y - 58}, 500 ${peak + 12}, 720 ${peak} C 940 ${peak + 12}, 1200 ${y - 58}, 1560 ${y}`,
      opacity,
    };
  });

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(820px,100vw)] overflow-visible"
    >
      <svg
        viewBox="0 0 1440 760"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMin slice"
      >
        <g stroke="#8a9490" strokeWidth="1.1" strokeLinecap="round">
          {topWaves.map((wave) => (
            <path key={wave.d} d={wave.d} strokeOpacity={wave.opacity} />
          ))}
        </g>
      </svg>
    </div>
  );
}
