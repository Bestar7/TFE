import { JSX, createSignal } from 'solid-js';
import { User } from '../../Models/User';
import usersService from '../../Services/usersService';

const RegisterForm = () : JSX.Element => {

  const [form, setForm] = createSignal({
    other:"",
    email:"",
    password:"",
  })
  const [other, setOther] = createSignal("")
  const [email, setEmail] = createSignal("")
  const [password, setPassword] = createSignal("")

  
  const sumbitForm = async (e: Event) => {
    e.preventDefault()

    const newUser: User = {
      email:email(), 
      password:password(), 
      name:other()
    }

    const returnedUser = await usersService.registerUser(newUser)
    console.log("sumbitForm", await returnedUser)
  }

  return ( 
    <form onSubmit={sumbitForm}>
      <label>Other field : 
        <input type='text' value={other()} onchange={(e) => setOther(e.currentTarget.value)} />
      </label><br />
      <label>email : 
        <input type='email' value={email()} onchange={(e) => setEmail(e.currentTarget.value)} />
      </label><br />
      <label>password : 
        <input type='password' value={password()} onchange={(e) => setPassword(e.currentTarget.value)} />
      </label><br />
      <input type='submit' value="Send" /><br />
    </form>
  );
};

export default RegisterForm;
