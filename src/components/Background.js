import React from 'react'

// https://svg2jsx.herokuapp.com/
export default () => (
  <svg id="background" width="3000" height="3000">
    <defs>
      <pattern id="xeoyf" patternUnits="userSpaceOnUse" width="10" height="10">
        <path
          d="M 2.5,2.5l5,5M7.5,2.5l5,-5 M2.5,7.5l-5,5M7.5,12.5l5,-5 M-2.5,2.5l5,-5"
          fill="transparent"
          stroke="#11ab7e47"
          strokeLinecap="square"
        />
      </pattern>
    </defs>
    <path d="M 0 0 L 0 3000 L 3000 3000 L 3000 0 Z" fill="url(#xeoyf)" />
  </svg>
)
