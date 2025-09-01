import { useRef } from 'react'

import { useOnClickOutside } from '@shared/hooks/useOnClickOutside'
import Button from '@shared/ui/button/Button'
import EnterLink from '@shared/ui/enter-link/ui/EnterLink'

import './access-modal.css'

interface Props {
  setIsModalOpen: (isModalOpen: boolean) => void
}

const AccessModal = ({ setIsModalOpen }: Props) => {
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

export default AccessModal
