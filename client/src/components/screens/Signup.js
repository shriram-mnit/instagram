import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'


const  Signup =()=>{
	const history=useHistory()
	const [name ,setName]=useState("")
	const [password,setPassword]=useState("")
	const [email,setEmail]=useState("")
	
	const PostData=()=>{
		if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
             M.toast({html:"please enter valid email",classes:"#e53935 red darken-1"})
             return
		}
		fetch("/signup",{
			method:"post",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
             name,
			 email,
				password
				
			})
			
		}).then(res=>res.json())
		.then(data=>{
			if(data.error){
				  M.toast({html: data.error,classes:"#e53935 red darken-1"})
				}
			else
			{
				M.toast({html:data.message,classes:"#43a047 green darken-1"})
				history.push("/signin")

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
				placeholder="name"
				value ={name}
				onChange={(e)=>setName(e.target.value)}
				/>
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
		<button className="btn waves-effect waves-light #64b5f6 blue lighten-2"
			onClick={()=>PostData()}>SignUp
  </button>
			<h5>
 <Link to="/signin">already have an account?</Link>
			</h5>
        </div>
      </div>
	)
}
export default Signup