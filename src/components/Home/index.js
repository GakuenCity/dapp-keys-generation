import React from 'react'
import { ButtonGenerate } from '../ButtonGenerate'
import { MainImage } from '../MainImage'
import { messages } from '../../utils/messages'
export const Home = ({ extraClassName = '', networkBranch = false, onClick = null, disabled = false }) => {
  const createMarkup = htmlString => ({ __html: htmlString })
  return (
    <div className={`hm-Home ${extraClassName}`}>
      <div className="hm-Home_TextContainer">
        <h1 className="hm-Home_Title">{messages.HOMETITLE}</h1>
        <p className="hm-Home_Text" dangerouslySetInnerHTML={createMarkup(messages.HOMETEXT)} />
        <ButtonGenerate onClick={onClick} disabled={disabled} networkBranch={networkBranch} />
      </div>
      <MainImage networkBranch={networkBranch} />
    </div>
  )
}
