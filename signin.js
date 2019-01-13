/* main screen component */
const Main = () =>{
    return (
        /* enter search bar component down here */
        <div>
            <Song /> 
            <Song /> 
        </div>
           
      




        /* enter songs results components down there */
    );
}


const Song = () => {
    return (
        <div className ="song-Result">

            <div className="song-section">
                <div>song name</div>
                <div className="song-number-div"> #200</div>
            </div>

            <div>
                <button className="song-Edit"> </button>
            </div>
        </div>

    );
}

{/* sign in page down here */}

const Signin = () => {
    return(
        <div className="signin-Popup" >
            <Formheader />
            <Form />
        </div>
        

    );
}

const Formheader = () => {
    return(
        <div >
            <h2> Sign in </h2>
            <h4> Please enter your credential below</h4>
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

ReactDOM.render(
    <Signin />,
    document.getElementById('root')
);