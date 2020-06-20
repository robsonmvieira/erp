import React from 'react'

import { FiAlertCircle, FiXCircle } from 'react-icons/fi'
import { Container } from './styles'
import { useToast } from '../../../state/toast/Provider'
import { ToastMessageProps } from '../../../state/toast/state'

interface ToastProps {
  message: ToastMessageProps
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast()
  return (
    <Container type={message.type} hasDescription={!!message.description}>
      <FiAlertCircle size={20} />
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={20} />
      </button>
    </Container>
  )
}

export default Toast
