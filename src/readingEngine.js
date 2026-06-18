// --- Constellation pattern definitions (SVG point sets, 0-100 viewBox) ---
export const CONSTELLATIONS = {
  triangle: { points: [[50, 22], [28, 70], [72, 70]], links: [[0, 1], [1, 2], [2, 0]] },
  line: { points: [[16, 60], [38, 50], [60, 40], [84, 30]], links: [[0, 1], [1, 2], [2, 3]] },
  cross: { points: [[50, 16], [50, 84], [16, 50], [84, 50], [50, 50]], links: [[0, 4], [4, 1], [2, 4], [4, 3]] },
  arc: { points: [[14, 62], [32, 40], [50, 30], [68, 40], [86, 62]], links: [[0, 1], [1, 2], [2, 3], [3, 4]] },
}

// --- Pattern -> core meaning ---
export const PATTERN_THEMES = {
  triangle: 'conflict loop',
  line: 'unfinished thought',
  cross: 'mixed signals',
  arc: 'emotional drift',
}

// --- Line 1: based on pattern meaning (fixed per theme) ---
const LINE1 = {
  'conflict loop': "You're caught in the same loop again.",
  'unfinished thought': "You're replaying something unfinished.",
  'mixed signals': "What was said and what was meant don't quite match.",
  'emotional drift': 'Something has been quietly shifting underneath you.',
}

// --- Line 2: based on emotional interpretation, varies by perspective ---
const LINE2 = {
  'conflict loop': {
    neutral: 'The friction keeps returning because the real issue was never named.',
    them: "Their reaction probably isn't really about you.",
    you: 'Your reaction is carrying more weight than this moment asked for.',
  },
  'unfinished thought': {
    neutral: "It's not about what was said — it's what didn't land.",
    them: 'They may feel the same unfinished pull, even if unspoken.',
    you: "You're the one still holding the open end of this.",
  },
  'mixed signals': {
    neutral: 'The gap is between what was said and what was meant.',
    them: "They might be sending signals they haven't sorted out themselves.",
    you: "You're reading between lines that may not even be there.",
  },
  'emotional drift': {
    neutral: 'The shift has been gradual, without one clear moment to point to.',
    them: 'Their distance is more about their own season than about you.',
    you: "You've been drifting toward a feeling you haven't named yet.",
  },
}

// --- Line 3: based on intensity, subject swapped by perspective ---
const SUBJECTS = {
  neutral: { subject: 'your mind', verb: 'is' },
  you: { subject: 'you', verb: 'are' },
  them: { subject: 'they', verb: 'are' },
}

const LINE3 = {
  'conflict loop': {
    low: (s) => `Right now, ${s.subject} ${s.verb} only lightly pulled into this — it'll ease on its own.`,
    mid: (s) => `Right now, ${s.subject} ${s.verb} circling the part that still feels unresolved.`,
    high: (s) => `Right now, ${s.subject} ${s.verb} deep in the loop — naming the real issue is the way out.`,
  },
  'unfinished thought': {
    low: (s) => `Right now, ${s.subject} ${s.verb} only loosely holding onto this — give it time.`,
    mid: (s) => `Right now, ${s.subject} ${s.verb} trying to close that gap.`,
    high: (s) => `Right now, ${s.subject} ${s.verb} circling this hard, looking for an ending that may not come the way you expect.`,
  },
  'mixed signals': {
    low: (s) => `Right now, ${s.subject} ${s.verb} only mildly unsettled — it's smaller than it feels.`,
    mid: (s) => `Right now, ${s.subject} ${s.verb} trying to decode something never fully spelled out.`,
    high: (s) => `Right now, ${s.subject} ${s.verb} caught between two readings of the same moment, and both feel true.`,
  },
  'emotional drift': {
    low: (s) => `Right now, ${s.subject} ${s.verb} barely noticing the shift — it's still early.`,
    mid: (s) => `Right now, ${s.subject} ${s.verb} sensing the change before having words for it.`,
    high: (s) => `Right now, ${s.subject} ${s.verb} aware that something has already moved, even if nothing's been said.`,
  },
}

const clamp = (v, min, max) => Math.min(Math.max(v, min), max)

const angleDiff = (a, b) => {
  const d = Math.abs(a - b) % 360
  return d > 180 ? 360 - d : d
}

// --- Step 1+: interpret planet angles -> pattern + intensity ---
export function interpretAlignment(angles) {
  const sorted = [...angles].sort((a, b) => a - b)
  const gaps = [
    sorted[1] - sorted[0],
    sorted[2] - sorted[1],
    360 - (sorted[2] - sorted[0]),
  ]
  const minD = Math.min(
    angleDiff(angles[0], angles[1]),
    angleDiff(angles[1], angles[2]),
    angleDiff(angles[0], angles[2])
  )
  const maxGap = Math.max(...gaps)
  const evenness = gaps.reduce((s, g) => s + Math.abs(g - 120), 0)

  // two planets nearly conjunct -> everything narrows to one point
  if (minD < 20) return { pattern: 'line', intensity: clamp(1 - minD / 20, 0, 1) }
  // evenly spread, 120deg apart -> three-way tension
  if (evenness < 60) return { pattern: 'triangle', intensity: clamp(1 - evenness / 60, 0, 1) }
  // near-opposition -> crossed signals
  if (maxGap > 150 && maxGap < 210) return { pattern: 'cross', intensity: clamp(1 - Math.abs(maxGap - 180) / 30, 0, 1) }
  // irregular spread -> drift
  return { pattern: 'arc', intensity: clamp((maxGap - 120) / 90, 0, 1) }
}

// --- Generate the cosmic state for this moment ---
export function generateCosmicState() {
  const planetAngles = [0, 1, 2].map(() => Math.random() * 360)
  const { pattern, intensity } = interpretAlignment(planetAngles)
  return { planetAngles, activeConstellation: pattern, intensity }
}

// --- Step 3: compose the reading from pattern + intensity + perspective ---
export function generateReading(cosmicState, perspective = 'neutral') {
  const theme = PATTERN_THEMES[cosmicState.activeConstellation]
  const level = cosmicState.intensity < 0.34 ? 'low' : cosmicState.intensity < 0.67 ? 'mid' : 'high'
  return [
    LINE1[theme],
    LINE2[theme][perspective],
    LINE3[theme][level](SUBJECTS[perspective]),
  ]
}
