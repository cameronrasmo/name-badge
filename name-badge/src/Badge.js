import React from 'react';

class Badge extends React.Component{
    render(){
        return(
            <div id="badge-inner-container">
                <h3>hi, i'm</h3>
                <h1 id="badge-name">{this.props.firstName} {this.props.lastName}</h1>
                <h1 id="badge-email"><strong>email: </strong>{this.props.email}</h1>
                <h1 id="badge-birthplace"><strong>birthplace: </strong>{this.props.birthplace}</h1>
                <h1 id="badge-phone"><strong>phone #: </strong>{this.props.phone}</h1>
                <h1 id="badge-favfood"><strong>favorite food: </strong>{this.props.favFood}</h1>
                <h1 id="badge-about"><strong>about: </strong>{this.props.about}</h1>
            </div>
        )
    }
}

export default Badge;