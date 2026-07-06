import { useEffect, useRef, memo } from 'react'

/**
 * 3D Ethereal Constellations Overlay.
 * Separated from CosmicBackground as requested, allowing it to be toggled per-page.
 */
import { cursorPos } from './CosmicBackground'

const CONSTELLATIONS = [
  // Left side (x is absolute px from LEFT edge of screen, y is percentage of screen height)
  // [x_px_from_left, y_percent]
  { name: 'leo',         stars: [[150, 15], [80, 10], [30, 20], [90, 27], [180, 30], [220, 23]], links: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]] },
  { name: 'taurus',      stars: [[200, 45], [140, 50], [90, 45], [50, 40], [130, 38]], links: [[0,1],[1,2],[2,3],[1,4]] },
  { name: 'gemini',      stars: [[120, 55], [70, 49], [100, 65], [60, 58], [160, 73]], links: [[0,1],[0,2],[1,3],[2,4],[2,3]] },
  { name: 'bigdipper',   stars: [[260, 15], [180, 18], [100, 15], [50, 22], [0, 28], [20, 38], [90, 38]], links: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,3]] },
  { name: 'orion',       stars: [[150, 60], [90, 70], [120, 80], [180, 80], [130, 90], [90, 100], [160, 103], [60, 103]], links: [[0,1],[1,2],[1,3],[2,4],[3,4],[4,5],[4,6],[4,7]] },
  
  // Right side (x is absolute px from RIGHT edge of screen, y is percentage of screen height)
  { name: 'scorpius',    stars: [[40, 15], [90, 9], [140, 5], [200, 6], [240, 12], [280, 21], [250, 30], [200, 35]], links: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] },
  { name: 'sagittarius', stars: [[200, 50], [150, 45], [100, 50], [120, 55], [180, 60], [140, 65], [100, 60]], links: [[0,1],[1,2],[2,3],[3,4],[4,0],[3,5],[5,6],[6,2]] },
  { name: 'cassiopeia',  stars: [[20, 65], [80, 75], [140, 65], [190, 77], [240, 67]], links: [[0,1],[1,2],[2,3],[3,4]] },
  { name: 'lyra',        stars: [[80, 25], [140, 18], [220, 28], [160, 35]], links: [[0,1],[1,2],[2,3],[3,0]] },
  { name: 'cygnus',      stars: [[50, 55], [110, 48], [160, 55], [110, 63], [110, 38]], links: [[0,1],[1,2],[1,4],[1,3]] },
]

const Constellations = memo(function Constellations({ variant = 'home' }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const scrollYRef = useRef(0)
  const smoothCursor = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })

    let w = 0, h = 0
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    let scrollTicking = false
    const onScroll = () => {
      if (!scrollTicking) {
        scrollTicking = true
        requestAnimationFrame(() => {
          scrollYRef.current = window.scrollY
          scrollTicking = false
        })
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const render = () => {
      const cLerp = 0.08
      smoothCursor.current.x += (cursorPos.x - smoothCursor.current.x) * cLerp
      smoothCursor.current.y += (cursorPos.y - smoothCursor.current.y) * cLerp

      const cx = smoothCursor.current.x - 0.5
      const cy = smoothCursor.current.y - 0.5
      const scrollOffset = scrollYRef.current * 0.35

      ctx.clearRect(0, 0, w, h)

      // 3D Parallax base calculation
      const baseParallax = 25
      const cpx = cx * baseParallax
      // Restored scrollOffset to make constellations scroll with the page again
      const cpy = cy * baseParallax * 0.6 - scrollOffset + (h * 0.12)

      // Filter constellations based on the page variant
      const filteredConstellations = CONSTELLATIONS.filter(c => {
        if (variant === 'home') {
          // Zodiacs + Cassiopeia for Home (6 constellations)
          return ['leo', 'gemini', 'scorpius', 'cassiopeia', 'taurus', 'sagittarius'].includes(c.name)
        } else {
          // Famous non-zodiacs for Services (4 constellations)
          return ['orion', 'bigdipper', 'lyra', 'cygnus'].includes(c.name)
        }
      })

      const time = performance.now() * 0.001 // seconds for idle animation

      // Precalculate node positions for this frame to draw lines and stars correctly
      const activeNodes = filteredConstellations.map(c => {
        const isLeft = ['orion', 'leo', 'gemini', 'bigdipper', 'taurus'].includes(c.name)
        
        // Scale down X offsets on smaller screens to prevent overlap
        const scaleX = Math.min(1, w / 1400)
        
        return c.stars.map((s, idx) => {
          const xEdgePx = s[0] * scaleX
          const yPer = s[1]
          
          // Passive Idle Sway (Morphing/Breathing)
          const phase = idx * 1.5 + c.name.length
          const swayX = Math.sin(time * 0.8 + phase) * 8
          const swayY = Math.cos(time * 0.6 + phase) * 8

          // 2D flat parallax + Sway
          const nodePx = cpx + swayX
          const nodePy = cpy + swayY

          let finalX
          if (isLeft) {
            // Anchor to absolute left edge
            finalX = xEdgePx + nodePx
          } else {
            // Anchor to absolute right edge
            finalX = w - xEdgePx + nodePx
          }
          
          const finalY = (yPer / 100) * h + nodePy
          return { x: finalX, y: finalY }
        })
      })

      // Enable true emissive glow (Additive Blending)
      ctx.globalCompositeOperation = 'lighter'

      for (let ci = 0; ci < filteredConstellations.length; ci++) {
        const c = filteredConstellations[ci]
        const nodes = activeNodes[ci]

        // True Halo Glow for Lines
        ctx.shadowBlur = 18
        ctx.shadowColor = 'rgba(37, 169, 186, 0.9)'
        // Use a slightly dimmer stroke because 'lighter' mode will compound intersecting lines to pure white
        ctx.strokeStyle = 'rgba(120, 210, 255, 0.6)'
        ctx.lineWidth = 1.8
        ctx.lineCap = 'round'
        ctx.globalAlpha = 1
        
        ctx.beginPath()
        for (let li = 0; li < c.links.length; li++) {
          const [a, b] = c.links[li]
          ctx.moveTo(nodes[a].x, nodes[a].y)
          ctx.lineTo(nodes[b].x, nodes[b].y)
        }
        ctx.stroke()

        // Reset shadow for inner node rendering to prevent over-glowing the nodes themselves
        // Or keep it for the nodes to give them a 3D orb look
        for (let si = 0; si < nodes.length; si++) {
          const { x, y } = nodes[si]

          // Boba ball base with strong shadow blur and emissive additive blending
          ctx.shadowBlur = 24
          ctx.shadowColor = 'rgba(37, 169, 186, 1)'
          ctx.fillStyle = 'rgba(37, 169, 186, 0.15)'
          ctx.beginPath()
          ctx.arc(x, y, 9, 0, Math.PI * 2)
          ctx.fill()
          
          // Crisp bright core
          ctx.shadowBlur = 0
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
          ctx.beginPath()
          ctx.arc(x, y, 2.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      ctx.globalCompositeOperation = 'source-over' // Reset for other layers if any

      rafRef.current = requestAnimationFrame(render)
    }

    rafRef.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  )
})

export default Constellations
