import './loginScreen.css'
import React, {useState} from "react";
import axios from 'axios'
import {useMutation} from 'react-query'
import Chatscreen from './chat-screen/Chatscreen.js';


const API_URL = 'http://localhost:4200/api'

/* function App(){
    const[email,setEmail] = useState ('')
    const[password,setPassword] = useState ('')

    const [user,setUser] = useState (null)
    const {mutate, isLoading} = useMutation(
        'login',
        ()=>
            axios.post(
                `${API_URL}/auth/login`,
                {email, password},
                {
                    headers: {'Content-Type':
                            'application/json'}
                }
            ),
        {
            onSuccess: ({data}) => {
                setUser(data.user)
            },
        }

    )
 */
   function App(){     
    return(

        <div className='App'>
            <Chatscreen/>
        </div>
     /*    <div className = 'login'>
            <div className='form'>
                <div className = 'text'> BremaChat</div>
                <div className='line'></div>


                <form className= 'login-form'>
                    <div className = "log"> Login</div>
                    <input
                        type='text'
                        required
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        value={email}
                        onChange = {e => setEmail(e.target.value)}
                    />
                    <div className = "pass">Password</div>
                    <input
                        type = 'password'
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button onClick = {() => mutate()}
                            disabled={isLoading}>Login</button>

                </form>

            </div>
        </div>
 */         

        
    );
}

export default App;
