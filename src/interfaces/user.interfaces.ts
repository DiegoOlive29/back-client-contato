export interface IuserRequest{
    name: string
    email: string
    phone: string
    password?: string
    date:  string
}

export interface IuserResponse extends IuserRequest{
    id:string

}