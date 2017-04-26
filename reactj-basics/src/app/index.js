/**
 * Created by kamil on 4/19/17.
 */
import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        };
    }

    onGreet() {
        alert("Hello");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render(){
        var user = {
            name: 45,
            age: [27,34,85,54,7464,164]
        };

        return(
          <div className="container">
              <div className="row">
                  <div className="col-sm-10 offset-sm-1 pt-3">
                      <Header homelink={this.state.homeLink}/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-sm-10 offset-sm-1 pt-3">
                      <Home
                          name={"Kamilko"}
                          initialAge={27}
                          user={user}
                          greet={this.onGreet}
                          changeLink={this.onChangeLinkName.bind(this)}
                          initialLinkName ={this.state.homeLink}
                      />
                  </div>
              </div>
          </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));

