import React, { useEffect } from 'react'

import { FiAlertCircle, FiXCircle, FiInfo, FiCheckCircle } from 'react-icons/fi'
import { Container } from './styles'
import { useToast } from '../../../state/toast/Provider'
import { ToastMessageProps } from '../../../state/toast/state'

interface ToastProps {
  message: ToastMessageProps
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object
}
const icons = {
  info: <FiInfo size={20} />,
  error: <FiAlertCircle size={20} />,
  success: <FiCheckCircle size={20} />
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [message.id, removeToast])
  return (
    <Container
      style={style}
      type={message.type}
      hasDescription={!!message.description}
    >
      {icons[message.type || 'info']}
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
