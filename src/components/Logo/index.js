import React from 'react'
import { LogoCore } from '../LogoCore'
import { LogoTest } from '../LogoTest'

export const Logo = ({ href = null, extraClass = '', networkBranch = '' }) => {
  switch (networkBranch) {
    case 'core':
      return <LogoCore href={href} extraClass={extraClass} />
    case 'test':
    default:
      return <LogoTest href={href} extraClass={extraClass} />
  }
}
