import React  from 'react';
class Greeting extends React.Component{
    constructor(){
        super();
        this.state={
            isLoggedIn:true,
        }
    }
    render(){
        if(this.state.isLoggedIn){
            return <h1> Welcome back, user</h1>
        }
        else{
            return <h1> Please login</h1>
        }
    }
}
export default Greeting;