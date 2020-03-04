import React from 'react'
import logoTest from './logo.svg'

export const LogoTest = ({ href = null, extraClass = '' }) => {
  return (
    <a href={href} className={`sw-LogoTest ${extraClass}`}>
      <img className="sw-LogoTest_Image" src={logoTest} alt="" />
    </a>
  )
}
