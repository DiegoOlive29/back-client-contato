import { IuserRequest, IuserResponse } from '../interfaces/user.interfaces';

const createUserService = ({name,date, phone,email,password} :IuserRequest): IuserResponse =>{
    return {
        id:'1',
        name,
        email,
        date,
        phone
        
    }

}

export default createUserService