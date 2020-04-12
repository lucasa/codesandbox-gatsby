import React from 'react'

export default () => (
  <svg className="boxCenter" width="140" height="140">
    <defs>
      <pattern id="wovk" patternUnits="userSpaceOnUse" width="20" height="20">
        <circle
          cx="10"
          cy="10"
          r="4"
          fill="transparent"
          stroke="#00000033"
          strokeWidth="2"
        />
      </pattern>
    </defs>
    <path d="M 0 0 L 0 1540 L 1540 1540 L 1540 0 Z" fill="url(#wovk)" />
  </svg>
)
