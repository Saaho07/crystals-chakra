import { useReducedMotion } from 'framer-motion'
import ZodiacWheel from './ZodiacWheel'
import Constellation from './Constellation'

export default function OrbitSystem({ cosmicState }) {
  const reduce = useReducedMotion()
  const aligning = !!cosmicState

  return (
    <div className="relative w-[400px] h-[400px] max-w-[88vw] max-h-[88vw]">
      <ZodiacWheel size={400} />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[78%] h-[78%] rounded-full bg-chakra-cyan/10 blur-2xl animate-align" />
      </div>

      <Constellation
        pattern={cosmicState?.activeConstellation}
        intensity={cosmicState?.intensity ?? 0}
        visible={aligning}
      />
    </div>
  )
}

