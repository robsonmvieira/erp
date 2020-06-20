export interface State {
  name: string
  login(data: Credentials): Promise<void>
}

export interface Credentials {
  email: string
  password: string
}
