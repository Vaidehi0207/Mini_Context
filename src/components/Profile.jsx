import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile(){
    //jo data lena h wo kr dete h 
    const {user} = useContext(UserContext)

    if(!user){return <div>please login</div>}
    return <div>Welcome {user.username}</div>
}

export default Profile