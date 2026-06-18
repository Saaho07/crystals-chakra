export default function OrbitRing({ size, color = '#1C2733' }) {
  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <circle
        cx="50"
        cy="50"
        r="49"
        fill="none"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.5"
      />
    </svg>
  )
}
