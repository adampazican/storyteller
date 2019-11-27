export type User = {
    id: number
    username: string
    password: string
    token: string
}

export type Article = {
    id: Number
    user: User
    date: Date
    title: string
    body: string
    active: boolean
}
