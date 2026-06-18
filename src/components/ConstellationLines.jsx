// Hardcode multiple zoomed-out constellation clusters
const CONSTELLATIONS = [
  {
    nodes: [[100, 150], [220, 280], [180, 400], [300, 220], [350, 100]],
    links: [[0, 1], [1, 2], [1, 3], [3, 4]]
  },
  {
    nodes: [[780, 700], [880, 600], [700, 820], [850, 850], [920, 750], [950, 900]],
    links: [[0, 1], [0, 2], [2, 3], [1, 4], [3, 5], [4, 5]]
  },
  {
    nodes: [[150, 800], [250, 750], [200, 900], [350, 850], [300, 950]],
    links: [[0, 1], [0, 2], [1, 3], [2, 4], [3, 4]]
  },
  {
    nodes: [[800, 200], [700, 300], [900, 350], [850, 150], [600, 250]],
    links: [[0, 1], [0, 2], [0, 3], [1, 4]]
  },
  {
    nodes: [[450, 450], [550, 400], [600, 500], [500, 600], [400, 550]],
    links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]]
  },
  {
    nodes: [[50, 500], [150, 450], [100, 600]],
    links: [[0, 1], [0, 2], [1, 2]]
  },
  {
    nodes: [[500, 100], [600, 150], [550, 250]],
    links: [[0, 1], [1, 2]]
  },
  {
    nodes: [[900, 500], [850, 600], [950, 550]],
    links: [[0, 1], [1, 2]]
  }
];

export default function ConstellationLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1000 1000"
      aria-hidden="true"
    >
      {CONSTELLATIONS.map((cluster, clusterIdx) => (
        <g key={`cluster-${clusterIdx}`}>
          {cluster.links.map(([a, b], i) => (
            <line
              key={`link-${i}`}
              x1={cluster.nodes[a][0]}
              y1={cluster.nodes[a][1]}
              x2={cluster.nodes[b][0]}
              y2={cluster.nodes[b][1]}
              stroke="#25A9BA" // Bright Cyan
              strokeWidth="2.5"
              opacity="0.6"
              className="drop-shadow-[0_0_8px_rgba(37,169,186,0.8)]"
            />
          ))}
          {cluster.nodes.map(([x, y], i) => (
            <circle 
              key={`node-${i}`} 
              cx={x} 
              cy={y} 
              r="6" 
              fill="#E6EDF3" 
              opacity="0.9" 
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            />
          ))}
        </g>
      ))}
    </svg>
  )
}
