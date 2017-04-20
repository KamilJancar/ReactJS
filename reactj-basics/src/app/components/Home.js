/**
 * Created by kamil on 4/19/17.
 */
import React from "react";
import PropTypes from "prop-types";

export class Home extends  React.Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <p>New component</p>
                <p>Your name is {this.props.name}, your age is {this.props.age}</p>
                <p>user object is : Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.age.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}


Home.propTypes = {
  name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};