import React, { useState } from 'react'

import { default as BoxContext } from './Context'
import names from './names'

function Container({ children }) {
  const resetClicked = () =>
    Object.keys(names).reduce((map, name) => {
      map[name] = false
      return map
    }, {})

  const [clickedBoxes, setClickedBoxes] = useState(resetClicked())

  // Turn only one box on
  const setClickedBox = boxName => {
    const previous = clickedBoxes[boxName]
    setClickedBoxes({ ...resetClicked(), [boxName]: !previous })
  }

  const closeAllBoxes = () => {
    setClickedBoxes({ ...resetClicked() })
  }

  const contextValue = { clickedBoxes, setClickedBox, closeAllBoxes }

  return (
    <BoxContext.Provider value={contextValue}>{children}</BoxContext.Provider>
  )
}

export default Container
