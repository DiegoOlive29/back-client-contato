export interface IuserRequest{
    name: string
    email: string
    phone: number
    password?: string
    date:  Date
}

export interface IuserResponse extends IuserRequest{
    id:string

}