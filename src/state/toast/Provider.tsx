import React, { createContext, useContext, useCallback, useState } from 'react'
import { uuid } from 'uuidv4'
import { State, ToastMessageProps } from './state'
import ToastContainer from '../../components/ToastContainer'

const ToastContext = createContext<State>({} as State)

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessageProps[]>([])
  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessageProps, 'id'>) => {
      const id = uuid()
      const toast = {
        id,
        type,
        title,
        description
      }
      setMessages((state: ToastMessageProps[]) => [...state, toast])
    },
    []
  )
  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id))
  }, [])
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  )
}
function useToast(): State {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('Must be use within Toast Provider')
  }
  return context
}

export { ToastProvider, useToast }
