import React, {useState, useContext} from 'react'
//useContext is a hook 
import UserContext from '../context/UserContext'

//useState is used to add state to functional components 
//create state variables and update them 

function Login(){
    //ek state lagegi 
    //declare state variable named username and password and set its value to empty
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    //data bhejne ka kaam kr liya 
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'
            />
            {" "}
            <input type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login