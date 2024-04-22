import { useState } from 'react';
import './style.css';

function FormComponent(){
    
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [rePassword,setRePassword] = useState('')

    const [statusUser,setStatusUsername] = useState('')
    const [statusEmail,setStatusEmail] = useState('')
    const [statusPassword,setStatusPassword] = useState('')
    const [statusRePassword,setStatusRePassword] = useState('')

    const [statusUsernameColor,setStatusUsernameColor] = useState('')
    const [statusEmailColor,setStatusEmailColor] = useState('')
    const [statusPasswordColor,setStatusPasswordColor] = useState('')
    const [statusRePasswordColor,setStatusRePasswordColor] = useState('')

    const sendData = (e)=>{
        e.preventDefault()
        //1
        if(username.length >= 8){
            setStatusUsername('Correct')
            setStatusUsernameColor('green')
        }
        else{
            setStatusUsername('* You must type correct username')
            setStatusUsernameColor('red')
        }

        //2
        if(email.includes('@')){
            setStatusEmail('Correct')
            setStatusEmailColor('green')
        }
        else{
            setStatusEmail('* You must type correct Email')
            setStatusEmailColor('red')
        }

        //3
        if(password.length>=8){
            setStatusPassword('Correct')
            setStatusPasswordColor('green')
        }
        else{
            setStatusPassword('* You must type correct password')
            setStatusPasswordColor('red')
        }

        //4
        if((rePassword.length>=8) && (rePassword === password) && (rePassword !== "")){
            setStatusRePassword('Correct')
            setStatusRePasswordColor('green')
        }
        else{
            setStatusRePassword('* You must confirm password correctly')
            setStatusRePasswordColor('red')
        }
    }

    return (
        <div className="container">
            <form className="form">
                <div className="title-container">
                    <h2>Registeration</h2>
                </div>
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} style={{borderBottomColor:statusUsernameColor}}/>
                    <small style={{color:statusUsernameColor}}>{statusUser}</small>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderBottomColor:statusEmailColor}}/>
                    <small style={{color:statusEmailColor}}>{statusEmail}</small>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderBottomColor:statusPasswordColor}}/>
                    <small style={{color:statusPasswordColor}}>{statusPassword}</small>
                </div>
                <div className="form-control">
                    <label>Confirm password</label>
                    <input type="text" value={rePassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderBottomColor:statusRePasswordColor}}/>
                    <small style={{color:statusRePasswordColor}}>{statusRePassword}</small>
                </div>
                <button type="submit" onClick={sendData}>Submit</button>
            </form>
        </div>
    );
}

export default FormComponent;