import React from 'react'
import { IconGithub } from '../IconGithub'
// import { IconPOA } from '../IconPOA'
import { IconTelegram } from '../IconTelegram'
import { IconTwitter } from '../IconTwitter'

const getIconBackgroundColor = networkBranch => {
  return (
    {
      poa: '#fff',
      test: '#fff'
    }[networkBranch] || '#fff'
  )
}

const getIconColor = networkBranch => {
  return (
    {
      poa: '#5c34a2',
      test: '#6ac9b9'
    }[networkBranch] || '#5c34a2'
  )
}

export const SocialIcons = ({ extraClass = '', networkBranch = '' }) => {
  const backgroundColor = getIconBackgroundColor(networkBranch)
  const iconColor = getIconColor(networkBranch)

  return (
    <div className={`ft-SocialIcons ${extraClass}`}>
      <IconTwitter
        backgroundColor={backgroundColor}
        color={iconColor}
        text="GakuenCity Twitter"
        url="#"
      />
      <IconTelegram
        backgroundColor={backgroundColor}
        color={iconColor}
        text="GakuenCity Telegram"
        url="#"
      />
      <IconGithub
        backgroundColor={backgroundColor}
        color={iconColor}
        text="GakuenCity Github"
        url="https://github.com/GakuenCity"
      />
      {/*<IconPOA text="POA Network" url="https://poa.net" backgroundColor={backgroundColor} color={iconColor} />*/}
    </div>
  )
}
