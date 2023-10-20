import React from 'react'
import { useTranslation } from 'react-i18next';
const Hooki18next = () => {
    const { t, i18n } = useTranslation();
    const changeEN = () => {
        i18n.changeLanguage('en')
    }

    const changeFR = () => {
        i18n.changeLanguage('ar')
    }

  return (
    <div>
        <button onClick={changeEN}>EN</button>
        <button onClick={changeFR}>FR</button>
        <div>
        <h1>{t('Welcome to React')}</h1>
        </div>
    </div>
  )
}

export default Hooki18next