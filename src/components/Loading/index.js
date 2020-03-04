import React from 'react'
import coreLogo from './core.svg'
import testLogo from './test.svg'

const getLogoSrc = networkBranch => {
  return (
    {
      core: coreLogo,
      test: testLogo
    }[networkBranch] || coreLogo
  )
}

export const Loading = ({ networkBranch }) => {
  return (
    <div className={`ld-Loading ld-Loading-${networkBranch}`}>
      <img className={`ld-Loading_Image ld-Loading_Image-${networkBranch}`} src={getLogoSrc(networkBranch)} alt="" />
      <div className="ld-Loading_Animation">
        <div className="ld-Loading_AnimationItem" />
        <div className="ld-Loading_AnimationItem" />
        <div className="ld-Loading_AnimationItem" />
        <div className="ld-Loading_AnimationItem" />
        <div className="ld-Loading_AnimationItem" />
        <div className="ld-Loading_AnimationItem" />
      </div>
    </div>
  )
}
