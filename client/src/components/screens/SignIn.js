import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const  SignIn =()=>{
	const history=useHistory()
	const [password,setPassword]=useState("")
	const [email,setEmail]=useState("")
	
	const PostData=()=>{
		if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
             M.toast({html:"please enter valid email",classes:"#e53935 red darken-1"})
             return
		}
		fetch("/signin",{
			method:"post",
			headers:{
				"Content-Type":"application/json"
				
			},
			body:JSON.stringify({
			 email,
				password
				
			})
			
		}).then(res=>res.json())
		.then(data=>{
			console.log(data)
			if(data.error){
				  M.toast({html: data.error,classes:"#e53935 red darken-1"})
				}
			else
			{ localStorage.setItem("jwt",data.token)
		      localStorage.setItem("user",JSON.stringify(data.user))
				M.toast({html:"signin success",classes:"#43a047 green darken-1"})
				history.push("/")

			}
		}).catch(err=>{
			console.log(err)
		})
	}
	return (
		<div className="mycard">
		<div className="card auth-card input-field ">
          <h2>Instagram</h2>
		<input
			type="text"
			placeholder="email"
			value={email}
			onChange={(e)=>setEmail(e.target.value)}
			/>
		<input
			type="text"
			placeholder="password"
			value={password}
			onChange={(e)=>setPassword(e.target.value)}
			/>
		<button className="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action"
		onClick={()=>PostData()}>Login
  </button>
			<h5>
			<Link to="/signup"> Don't have an account</Link>
			</h5>
        </div>
      </div>
	)
}


export default SignIn