export interface Observer {
  name: string
  update: (temp: number, humidity: number, pressure: number) => void
}

export interface DisplayElement {
  display: () => void
}
