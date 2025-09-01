import { useState } from 'react'

import { BurgerMenu, Button, EnterLink } from '@shared/index'

import { AccessModal } from '@widgets/index'

import HeaderNav from '../header-nav/HeaderNav'
import './header.css'

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__flex">
        <HeaderNav />
        <div className="header__access">
          <EnterLink />
          <a href="https://yeahub.ru/auth/register">
            <Button className="header__button">Регистрация</Button>
          </a>
        </div>
        <BurgerMenu isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        {isModalOpen && <AccessModal setIsModalOpen={setIsModalOpen} />}
      </div>
    </header>
  )
}
