import React from 'react' ;

class Main extends React.Component {
    constructor(){
        super()
        this.state ={
            json : [
                {
                    "title": "Jesus",
                    "number": "10",
                    "song_ID": "3"
                },
                {
                    "title": "test",
                    "number": "23",
                    "song_ID": "6"
                }
            ]
        };
    }

    search = (text) => {

    }

    render(){
        return(
            <div className="search-Container">
                <Searchform onSearch ={this.search }/>
                <div>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                
                </div>
                
            </div>

        );

    }

}

const Song = props => {
    return (
        <div className ="row-Result">

            <div className="song-Info">
                <div className="song-Info-Container">
                    <div className="song-Title">The title is here</div>
                    <div className="song-number-div"> <span>#200</span></div>
                </div>
                
            </div>

            <div className="song-Edit">
                <button className="button-Edit" href=""> </button>
            </div>
        </div>

    );
}

class Searchform extends React.Component {

    constructor(){
        super()
        this.state = {
            textSong : 20 /*e.target.value */ 
        };
    }


    /*
    handleSubmit = () =>{
        
        e.preventDefault();
        this.props.search(this.state.textSong)
        e.currentTarget.reset
        
    } */

    render(){
        return(

            <form className="search-Form" /*onSubmit={this.handleSubmit}*/ >
                <input className="search-Field" name="textSong"/>
                <button className="search-Button" type="submit" />
            </form>
    
        );
    }
}

export default Main ;