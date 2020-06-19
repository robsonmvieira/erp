export interface State {
  name: string;
  login(data: Credentials): void
}

export interface Credentials {
  email: string;
  password: string;
}
