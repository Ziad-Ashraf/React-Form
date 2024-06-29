export interface IUserData {
    username: string,
    email: string,
    address: string,
    password: string,
    fullname: string,
}

export interface IFormInput {
    label: string,
    type: string,
    id: string,
    name: keyof IUserData
}