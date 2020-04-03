import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthplace: "",
            phone: "",
            favFood: "",
            about: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitState = this.submitState.bind(this);
    }
    handleChange(event){
        const{name, value} = event.target;
        this.setState({[name]: value});
        console.log(name);
    }
    submitState(){
        this.props.submitState(this.state)
    }

    render(){
        return(
            <div>
                <form>
                    <input onChange={this.handleChange} name="firstName" value={this.state.firstName} id="first-name" className="info-forms" placeholder="First Name"/>
                    <br/>

                    <input onChange={this.handleChange} name="lastName" value={this.state.lastName} id="last-name" className="info-forms" placeholder="Last Name"/>
                    <br/>

                    <input onChange={this.handleChange} name="email" value={this.state.email} id="email" className="info-forms" placeholder="E-Mail"/>
                    <br/>

                    <input onChange={this.handleChange} name="birthplace" value={this.state.birthplace} id="birthplace" className="info-forms" placeholder="MM/DD/YYYY"/>
                    <br/>

                    <input onChange={this.handleChange} name="phone" value={this.state.phone} id="phone" className="info-forms" placeholder="Phone #"/>
                    <br/>

                    <input onChange={this.handleChange} name="favFood" value={this.state.favFood} id="favFood" className="info-forms" placeholder="Favorite Food"/>
                    <br/>

                    <input onChange={this.handleChange} name="about" value={this.state.about} id="about" className="about" placeholder="Tell us a bit about yourself"/>
                    <br/>

                    <input onClick={this.submitState} type="button" id="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Form;