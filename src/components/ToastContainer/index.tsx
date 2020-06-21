import React from 'react'
import { useTransition } from 'react-spring'
import { Container } from './styles'
import { ToastMessageProps } from '../../state/toast/state'
import Toast from './Toast'

interface ToastContainerProps {
  messages: ToastMessageProps[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransictions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' }
    }
  )
  return (
    <Container>
      {messagesWithTransictions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  )
}

export default ToastContainer
