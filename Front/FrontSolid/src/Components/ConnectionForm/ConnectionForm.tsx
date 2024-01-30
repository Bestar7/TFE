import type { JSX, createSignal } from 'solid-js';

const LinkSolid = (onSubmit : any) : JSX.Element => {

  const [email, setEmail] = createSignal("")
  const [password, setPassword] = createSignal("")
  
  const sumbitForm = (e: Event) => {
    e.preventDefault()
    console.log("sumbitForm")
  }

  return ( 
    <form onSubmit={sumbitForm}>
      <input type='email'/>
      <input type='password'/>
      <input type='submit' value="Send" />
    </form>
  );
};

export default LinkSolid;
