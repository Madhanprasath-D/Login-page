import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';

function App() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  const [error,setError] = useState({
    email:false,
    password:false
  })

  const [success, setSuccess] = useState(false)

  function validation(e){
    e.preventDefault();
    setSuccess(false)
    setError({email:false,password:false})
    if(!email.includes('@') || email.length==0){
      setError({...error,['email']:true})
    }
    else if(password.length<8){
npm 
      setError({email:false,password:true})
    }
    else{
      setSuccess(true)
    }
    
  }

  return (
    <div className='w-full h-screen p-3 md:p-5'>
      <div className='w-full h-full flex flex-col md:flex-row-reverse'>
        <div className="w-full h-1/3 bg-[url('Mobile.png')] md:bg-[url('Desktop.png')] 
        bg-center bg-no-repeat bg-cover rounded-xl md:w-1/2 md:h-full"/>
        <div className=' w-full h-max  md:w-1/2 md:h-full flex items-center justify-center py-5'>
          <div className='w-10/12 md:w-8/12 h-max bg-white '>
            <h1 className='text-2xl md:text-3xl font-semibold'>Welcome Back</h1>
            <p className='text-[12px] md:text-[15px] my-2'>Today is a new day. It's your day. You shape it. <br /> Sign in to start managing your projects.</p>
            {error.email && <span className='text-red-600'>Enter the valid email</span>}
            {error.password && <span className='text-red-600'>Password contain atleast 8 Character</span>}
            {success && <span className='text-green-500'>Successfully Login</span>}
            <form onSubmit={validation}>
              <label className='text-[18px] font-normal'>Eamil</label>
              <input type="email" placeholder='Example@gamil.com' className=' my-2 w-full p-3 border-2 border-[#D4D7E3] rounded-xl md:my-2' onChange={(e)=> setEmail(e.target.value)} value={email}/>
              <label className='text-[18px] font-normal '>Password</label>
              <input type="password" placeholder='At least 8 character' className='w-full p-3 border-2 border-[#D4D7E3] rounded-xl md:my-2' onChange={(e)=> setPassword(e.target.value)} value={password} />
              <h3 className='text-right text-blue-500 m-3'>Forgot password?</h3>
              <button className='w-full bg-[#162D3A] p-3 rounded-xl text-white'>Sign in</button>
              <span className='h-[1px] w-full bg-[#CFDFE2] flex items-center justify-center mt-5'><div className='bg-white p-1 text-lg'>or</div></span>
            </form> 
            <h3 className='text-center bg-blll my-6'>Don't you have an account? <span className='text-blue-500'>Sign up</span></h3>
          </div>
        </div>
      </div>
    </div>
  )
}


function Button(props) {
  return (
    <button className='w-full p-3 my-2 rounded-xl'>{props.text}</button>
  )
}



export default App


{/* <div className=' w-11/12 md:w-8/12 my-5 flex flex-col gap-3'>
            <h1 className='text-2xl md:text-3xl font-semibold'>Welcome Back</h1>
            <p className='text-[12px] md:text-[15px]'>Today is a new day. It's your day. You shape it. <br /> Sign in to start managing your projects.</p>
            <form>
              <label className='text-[18px] font-normal '>Eamil</label>
              <input type="email" placeholder='Example@gamil.com' className='w-full p-3 border-2 border-[#D4D7E3] rounded-xl md:my-2' />
              <label className='text-[18px] font-normal '>Password</label>
              <input type="password" placeholder='At least 8 charascter' className='w-full p-3 border-2 border-[#D4D7E3] rounded-xl my-2' />
              <h3 className='text-right text-blue-500 m-3'>Forgot password?</h3>
              <button className='w-full bg-[#162D3A] p-3 rounded-xl text-white'>Sign in</button>
            </form>
            <span className='h-[1px] w-full bg-[#CFDFE2] flex items-center justify-center mt-5'><div className='bg-white p-2 text-lg'>or</div></span>
            <div className='w-full'>
              <Button text="Sign in with Google" />
              <Button text="Sign in with Facebook" />
            </div>
            <h3 className='text-center bg-blll'>Don't you have an account? <span className='text-blue-500'>Sign up</span></h3>
          </div> */}
