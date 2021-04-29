import React from 'react';
import Password from './Password';
import User from './User';

const App = () => {
    return(
        <div>
            <h1 className="ui center aligned header" style={{margin: "calc(2rem - 0.14285714em ) 0em 1rem"}}>Sign In</h1>
            <div className="ui text container"><User/></div>
            <br></br>
            <div className="ui text container"><Password /></div>
        </div>
    );
}

export default App;