import { useRef, useState } from 'react'

import { useOnClickOutside } from '@shared/index'

import arrow from '../../assets/icons/Alt Arrow Down.svg'
import './header-dropdown.css'

const HeaderDropdown = () => {
  const [isDropdownOpen, setIsDropdowOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const closeDropdown = () => {
    setIsDropdowOpen(false)
  }

  useOnClickOutside(ref, closeDropdown)
  return (
    <li className="dropdown">
      <div
        className="dropdown__btn-wrap"
        onClick={() => setIsDropdowOpen(!isDropdownOpen)}
      >
        <button className="dropdown__btn">Подготовка</button>
        <img src={arrow} alt="arrow" />
      </div>
      {isDropdownOpen && (
        <div className="dropdown__inner" ref={ref}>
          <a href="" className="dropdown__link">
            База вопросов
          </a>
          <a href="" className="dropdown__link">
            Тренажер
          </a>
        </div>
      )}
    </li>
  )
}

export default HeaderDropdown
