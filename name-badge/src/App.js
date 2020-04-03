import React from 'react';
import Badge from './Badge.js'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            id: 0,
            firstName: "",
            lastName: "",
            email: "",
            birthplace: "",
            phone: "",
            favFood: "",
            about: "",
            badges: []
        }
        this.count = 0
    }

    handleChange = (event) => {
        const{name, value} = event.target;
        this.setState({[name]: value});
        const enabled = this.state.firstName.length > 3 && this.state.lastName.length > 3 && this.state.email.length > 3 && this.state.birthplace.length > 3 && this.state.phone.length > 3 && this.state.favFood.length > 3 && this.state.about.length > 3;
        if(enabled){
            document.getElementById('submitBtn').disabled = false;
            this.btnRef.current.style.backgroundColor = 'salmon';
        } else{
            document.getElementById('submitBtn').disabled = true;
            this.btnRef.current.style.backgroundColor = 'gray';
        }
    }

    submit = () => {
        const phone = document.getElementById('phone').value;
        let validated = true;
        for(let i = 0; i < phone.length; i++){
            if(isNaN(parseInt(phone[i]))){
                validated = false;
            }
        }
        validated === false ? alert("Please re-enter phone # with no dashes or special characters") : validated = true;
        if(validated){
            this.setState(prev => {
                this.count++
                const newBadge = {
                    id: this.count,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    birthplace: this.state.birthplace,
                    phone: this.state.phone,
                    favFood: this.state.favFood,
                    about: this.state.about
                }
    
                let newBadgeArr = prev.badges.map(item => 
                    {return item}
                )
    
                newBadgeArr.push(newBadge)
                return{
                    firstName: "",
                    lastName: "",
                    email: "",
                    birthplace: "",
                    phone: "",
                    favFood: "",
                    about: "",
                    badges: newBadgeArr
                }
            })
            this.transition() 
        }
    }

    transition = () => {
        this.badgeRef.current.style.top = "0vh";
        this.formRef.current.style.bottom = "100vh";
        this.formRef.current.style.visibility = "hidden";
    }

    transitionPanel = () => {
        this.formRef.current.style.bottom = "0vh";
        this.formRef.current.style.visibility = "visible";
    }

    onload = () => {
        this.h1ref.current.style.opacity = "1";
        this.h1ref.current.style.top = "450px";
    }

    render(){
        const displayed = this.state.badges.map(item => 
            <Badge firstName={item.firstName} lastName={item.lastName} email={item.email} birthplace={item.birthplace} phone={item.phone} favFood={item.favFood} about={item.about}/>,
            )
        return(
            <div onLoad={this.onload} id="container">
                <img id="emoji" src="Untitled.png" alt="emoji"></img>
                <h3 id="add" onClick={this.transitionPanel}>+  add another</h3>
                <div id="form-container" ref={this.formRef = React.createRef()}>
                    <form id="form">
                        <input onChange={this.handleChange} name="firstName" value={this.state.firstName} id="first-name" className="info-forms" placeholder="First Name"/>
                        <br/>

                        <input onChange={this.handleChange} name="lastName" value={this.state.lastName} id="last-name" className="info-forms" placeholder="Last Name"/>
                        <br/>

                        <input onChange={this.handleChange} name="email" value={this.state.email} id="email" className="info-forms" placeholder="E-Mail"/>
                        <br/>

                        <input onChange={this.handleChange} name="birthplace" value={this.state.birthplace} id="birthplace" className="info-forms" placeholder="Birthplace"/>
                        <br/>

                        <input onChange={this.handleChange} name="phone" value={this.state.phone} id="phone" className="info-forms" placeholder="Phone #"/>
                        <br/>

                        <input onChange={this.handleChange} name="favFood" value={this.state.favFood} id="favFood" className="info-forms" placeholder="Favorite Food"/>
                        <br/>

                        <input onChange={this.handleChange} name="about" value={this.state.about} id="about" className="info-forms" placeholder="Tell us a bit about yourself"/>
                        <br/>

                        <button onClick={this.submit} ref={this.btnRef = React.createRef()} type="button" id="submitBtn" disabled={false}>submit</button>
                    </form>
                </div>
                <div id="badge-container">
                    <h1 ref={this.h1ref = React.createRef()}>Name Badge</h1>
                    <div id="badge" ref={this.badgeRef = React.createRef()}>
                        {displayed} 
                    </div>
                </div>
            </div>
        )
        
    }
}

export default App;