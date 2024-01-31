import Input from '../Input'
// import Btn from '../Btn'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className=' h-screen bg-slate-400 flex justify-center items-center'>
        
    <div className='flex flex-col gap-3 bg-gray-300 h-[400px] px-4 pt-5 rounded-md'>
    <p className='text-3xl font-bold capitalize text-center'>login</p>
  <Input 
      label="Email"
      placeHolder="Email"
      type="email"
      
  />
  <Input 
      label="password"
      placeHolder="Password"
      type="password"
  />
  <p className=' text-slate-700 flex gap-1'>If you are New? 
  <Link 
      to='/signup'
      className='text-black underline cursor-pointer'
      >SignUp</Link></p>
  {/* <Btn title={"Login"}/> */}
  </div>
</div>
  )
}

export default Login
