/**
 * Created by kamil on 4/19/17.
 */
import React from "react";
import PropTypes from "prop-types";

export class Home extends  React.Component {

    constructor(props) {
        super();
        this.state = {
          age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        })
    }

    render(){
        return(
            <div>
                <p>New component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                {/*<p>user object is : Name: {this.props.user.name}</p>*/}
                {/*<div>*/}
                    {/*<h4>Hobbies</h4>*/}
                    {/*<ul>*/}
                        {/*{this.props.user.age.map((hobby, i) => <li key={i}>{hobby}</li>)}*/}
                    {/*</ul>*/}
                {/*</div>*/}
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older.</button>
                {this.props.children}
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        )
    }
}


Home.propTypes = {
  name: PropTypes.string,
    age: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
    // user: PropTypes.object,
    // children: PropTypes.element.isRequired
};