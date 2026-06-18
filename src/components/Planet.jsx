export default function Planet({ color = '#5EEAD4', size = 8 }) {
  return (
    <div
      className="rounded-full"
      style={{
        width: size,
        height: size,
        background: color,
        boxShadow: `0 0 ${size * 1.5}px ${color}80, 0 0 ${size * 3}px ${color}30`,
      }}
    />
  )
}
