type LogoProps = {
  size?: number;
};

export default function Logo({ size = 46 }: LogoProps) {
  const isCustom = size !== 46;
  const svgSize = Math.round(size * (28 / 46));
  const shellRadius = Math.round(size * (14 / 46));
  const innerRadius = Math.round(size * (13 / 46));

  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-400/30 blur-xl" />
      <div
        className="logo-shell relative"
        style={isCustom ? { borderRadius: shellRadius } : undefined}
      >
        <div
          className="logo-inner"
          style={isCustom ? { width: size, height: size, borderRadius: innerRadius } : undefined}
        >
          <svg
            width={svgSize}
            height={svgSize}
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <defs>
              <linearGradient id="startup" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#22D3EE" />  
              </linearGradient>
            </defs>

            <path
              d="M12 48 L36 16 L18 16 L42 16 L18 48 L42 48"
              stroke="url(#startup)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
