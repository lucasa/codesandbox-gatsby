import React, { useEffect, useContext } from 'react'
import classNames from 'classnames'

import { default as BoxContext } from '../Context'

function BaseBox({ name, className, onClick, ...rest }) {
  const { clickedBox } = useContext(BoxContext)

  useEffect(() => {
    // Unclick other boxes
    if (clickedBox !== name) {
      classNames(className, { clicked: false })
    }
  }, [clickedBox])

  return (
    <div className={classNames('box', className)} onClick={onClick} {...rest} />
  )
}

function Body({ ...rest }) {
  return <section className="body" {...rest} />
}

function Box({ name, title, faTitle, body }) {
  const { clickedBoxes, setClickedBox } = useContext(BoxContext)

  function getBoxClass(boxName) {
    return clickedBoxes[boxName]
      ? classNames(boxName, 'clicked', 'shadow')
      : classNames(boxName)
  }

  return (
    <BaseBox
      name={name}
      className={getBoxClass(name)}
      onClick={e => {
        e.stopPropagation()
        setClickedBox(name)
      }}
    >
      <h2>
        <i className={`fas ${faTitle}`} />
        {title}
      </h2>
      {clickedBoxes[name] && (
        <Body>
          {body}
          <button className="close-button button-clear" type="button">
            Close
          </button>
        </Body>
      )}
    </BaseBox>
  )
}

export default Box
