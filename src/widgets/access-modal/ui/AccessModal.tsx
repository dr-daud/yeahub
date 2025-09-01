import { useRef } from 'react'

import { Button, EnterLink, useOnClickOutside } from '@shared/index'

import './access-modal.css'

interface Props {
  setIsModalOpen: (isModalOpen: boolean) => void
}

export const AccessModal = ({ setIsModalOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const closeModal = () => {
    setIsModalOpen(false)
  }

  useOnClickOutside(ref, closeModal)

  return (
    <div className="overlay">
      <div className="modal" ref={ref}>
        <EnterLink />
        <a href="https://yeahub.ru/auth/register">
          <Button style={{ width: '172px' }}>Регистрация </Button>
        </a>
      </div>
    </div>
  )
}
