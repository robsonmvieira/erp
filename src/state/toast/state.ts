export interface State {
  addToast(message: Omit<ToastMessageProps, 'id'>): void
  removeToast(id: string): void
}
export interface ToastMessageProps {
  id: string
  type?: 'success' | 'info' | 'error'
  title: string
  description?: string
}
