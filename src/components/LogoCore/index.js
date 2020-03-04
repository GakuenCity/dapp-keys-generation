import React from 'react'
import logoCore from './logo.svg'

export const LogoCore = ({ href = null, extraClass = '' }) => {
  return (
    <a href={href} className={`sw-LogoCore ${extraClass}`}>
      <img className="sw-LogoCore_Image" src={logoCore} alt="" />
    </a>
  )
}
