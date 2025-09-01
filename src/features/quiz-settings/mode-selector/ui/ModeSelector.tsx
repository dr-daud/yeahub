import { useState } from 'react'

import { TransparentFrame } from '@shared/index'

import { MODE } from '../model/constants'
import './mode-selector.css'

export const ModeSelector = () => {
  const [regime, setRegime] = useState(1)

  return (
    <div className="mode-selector">
      <p className="black700-title body2">Выберите режим</p>
      {MODE.map((mode, index) => (
        <TransparentFrame
          key={index}
          onClick={() => setRegime(index + 1)}
          className={regime === index + 1 ? 'active' : ''}
        >
          {mode}
        </TransparentFrame>
      ))}
    </div>
  )
}
