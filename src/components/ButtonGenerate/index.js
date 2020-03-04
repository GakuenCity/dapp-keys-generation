import React from 'react'
import icon from './icon.svg'
import { messages } from '../../utils/messages'
export const ButtonGenerate = ({ extraClassName = '', networkBranch = '', onClick = null, disabled = false }) => {
  return (
    <button
      className={`sw-ButtonGenerate ${extraClassName} ${'sw-ButtonGenerate-' + networkBranch}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <span className="sw-ButtonGenerate_Text">{messages.KEYGENERATE}</span>
      <img src={icon} alt="" className="sw-ButtonGenerate_Icon" />
    </button>
  )
}
