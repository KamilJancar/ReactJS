import React from 'react';
import PropTypes from "prop-types";


export class Home extends  React.Component{

    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            weight: props.initialWeight,
            homeLink: props.initialLinkName
        };
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        });
    }

    onMakeGetMoreWeight(){
        this.setState({
            weight: this.state.weight + 10
        })
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        })
    }

    render() {
        return (
            <div className="mt-2">
                <p>Your name is:</p>
                <h1>{this.props.name}</h1>
                <p>Your age is:</p>
                <h2>{this.state.age}</h2>
                <p>Your weught is:</p>
                <h3>{this.state.weight}</h3>
                <button onClick={() => this.onMakeOlder()} className="btn btn-info">Make me older</button>
                <hr/>
                <button onClick={() => this.onMakeGetMoreWeight()} className="btn btn-info">Get Weight</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-info">Change Header Link</button>
                <input onChange={(event) => this.onHandleChange(event)} className="ml-2" type="text" value={this.state.homeLink}/>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
};