const particles = [
  { x: '8%', y: '18%', size: '2px', delay: '0s', duration: '8s' },
  { x: '15%', y: '35%', size: '3px', delay: '1s', duration: '10s' },
  { x: '24%', y: '22%', size: '2px', delay: '2s', duration: '9s' },
  { x: '36%', y: '40%', size: '3px', delay: '0.5s', duration: '11s' },
  { x: '48%', y: '16%', size: '2px', delay: '1.5s', duration: '10s' },
  { x: '62%', y: '30%', size: '3px', delay: '2.5s', duration: '9s' },
  { x: '74%', y: '20%', size: '2px', delay: '1s', duration: '12s' },
  { x: '88%', y: '34%', size: '3px', delay: '0s', duration: '10s' },

  { x: '10%', y: '70%', size: '3px', delay: '2s', duration: '11s' },
  { x: '22%', y: '82%', size: '2px', delay: '1s', duration: '9s' },
  { x: '34%', y: '68%', size: '3px', delay: '0.7s', duration: '10s' },
  { x: '46%', y: '78%', size: '2px', delay: '2.2s', duration: '12s' },
  { x: '58%', y: '66%', size: '3px', delay: '1.4s', duration: '10s' },
  { x: '70%', y: '84%', size: '2px', delay: '0.2s', duration: '9s' },
  { x: '84%', y: '72%', size: '3px', delay: '2.6s', duration: '11s' },
  { x: '94%', y: '80%', size: '2px', delay: '1.8s', duration: '10s' },
]

function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020617]"
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(34, 211, 238, 0.16), transparent 24%),
            radial-gradient(circle at 80% 18%, rgba(59, 130, 246, 0.14), transparent 24%),
            radial-gradient(circle at 75% 78%, rgba(14, 165, 233, 0.12), transparent 26%),
            radial-gradient(circle at 20% 82%, rgba(37, 99, 235, 0.10), transparent 24%)
          `,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px] opacity-25" />

      <svg
        viewBox="0 0 1440 900"
        className="network-lines absolute inset-0 h-full w-full opacity-40"
        preserveAspectRatio="none"
      >
        <g stroke="rgba(34,211,238,0.18)" strokeWidth="0.9">
          <polyline
            points="40,210 180,165 260,235 380,180 520,260"
            fill="none"
          />
          <polyline
            points="1090,155 1240,125 1355,220 1220,270 1090,155"
            fill="none"
          />
          <polyline
            points="70,710 170,660 285,720 360,640"
            fill="none"
          />
          <polyline
            points="1090,690 1245,635 1370,720 1210,790"
            fill="none"
          />
        </g>

        <g fill="rgba(34,211,238,0.75)">
          <circle cx="40" cy="210" r="2" />
          <circle cx="180" cy="165" r="2" />
          <circle cx="260" cy="235" r="2" />
          <circle cx="380" cy="180" r="2" />
          <circle cx="520" cy="260" r="2" />

          <circle cx="1090" cy="155" r="2" />
          <circle cx="1240" cy="125" r="2" />
          <circle cx="1355" cy="220" r="2" />
          <circle cx="1220" cy="270" r="2" />

          <circle cx="70" cy="710" r="2" />
          <circle cx="170" cy="660" r="2" />
          <circle cx="285" cy="720" r="2" />
          <circle cx="360" cy="640" r="2" />

          <circle cx="1090" cy="690" r="2" />
          <circle cx="1245" cy="635" r="2" />
          <circle cx="1370" cy="720" r="2" />
          <circle cx="1210" cy="790" r="2" />
        </g>
      </svg>

      {particles.map((particle, index) => (
        <span
          key={index}
          className="particle absolute rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}

      <div className="floating-glow absolute left-[-100px] top-[120px] h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="floating-glow absolute right-[-80px] top-[220px] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="floating-glow absolute bottom-[-120px] left-[28%] h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
    </div>
  )
}

export default BackgroundFX