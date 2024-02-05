import { JSX, createSignal } from 'solid-js';
import usersService from '../../Services/usersService';

const ConnectionForm = () : JSX.Element => {

  const [email, setEmail] = createSignal("")
  const [password, setPassword] = createSignal("")
  
  const sumbitForm = async (e: Event) => {
    e.preventDefault()
    const returnedUser = await usersService.connectUser(email(), password())
    console.log("sumbitForm", await returnedUser)
  }

  return ( 
    <form onSubmit={sumbitForm}>
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

export default ConnectionForm;
