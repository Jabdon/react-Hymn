import React from 'react' ;

const SigninForm =() =>(

    <div className="signin-Popup" >
            <Formheader />
            <Form />
        </div>

);

const Formheader = () => {
    return(
        <div >
            <h2> Sign in </h2>
            <p> Please enter your credential below</p>
        </div>
       
    );
}

const Form = () => {
    return(
        <div className="form-container">
            <form action='/action_page.php'>
                <input className="signin-textfield" type="text" name="username" placeholder="Username"/> 
                <input className="signin-textfield" type="text" name="password" placeholder="Password"/> 
                <input className="signin-button" type="submit" value="Sign in"/>
            </form>
        </div> 

    );

}
export default SigninForm;