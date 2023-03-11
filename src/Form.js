import './Form.css';
import { useContext } from "react";
import { ThemeContext } from "./App";


function Form() {

  function handleSubmit(e) {
      e.preventDefault();
  }
    return (
        <div className="container"> 
            <div className={`form ${useContext(ThemeContext) === "light" ? "light" : "dark"}`}> 
            <form onSubmit={handleSubmit}>
               <div className='title'> 
                 <h4> Sign in </h4> 
              </div>
              <div className='input'> 
              <label> 
              <input type="text" name="username" placeholder='username'/> 
              </label>
              <label> 
              <input type="password" name="password" placeholder='password'/>
              </label>
              <button className='btn'> Sign in</button>
              <p> Forgot password?</p>
              </div>
              </form>
        </div>
        </div>
      
  );

};
  

  export default Form;
  