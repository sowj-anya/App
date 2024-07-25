// import React from 'react';
// import {useState} from 'react'
// import './log.css';
// const Log=()=>{
//     const [email,setEmail]=useState(""); 
//     const [passw, setPassw]=useState(""); 
//     const[dataInput, setDataInput]=useState(""); 
// 	const submitThis=()=>{
// 		const info={email:email,passw:passw}; 
// 		setDataInput([info]);
// 	}

// 	return(
// 	<div id="whole">
// 		<form action="" onSubmit={submitThis}> 
//             <h2>Login</h2>
//             <div>
//                 <label htmlFor='email' >Email</label>
//                 <input type="text" placeholder='Email*' name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
//             </div>
//             <div>
//                 <label htmlfor="passw">Password</label>
//                 <input type="password" placeholder='Password*' name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}></input>
//             </div>
//             <button type="submit">Login</button>
//             {/* <br></br> */}
//             <button type="submit">SignUp</button>
//         </form> 
// 	</div>
// 	)
// }
// export default Log
