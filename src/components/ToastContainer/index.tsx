import React from 'react'

import { Container } from './styles'
import { ToastMessageProps } from '../../state/toast/state'
import Toast from './Toast'

interface ToastContainerProps {
  messages: ToastMessageProps[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((toast) => (
        <Toast key={toast.id} message={toast} />
      ))}
    </Container>
  )
}

export default ToastContainer
