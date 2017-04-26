/**
 * Created by kamil on 4/19/17.
 */
import React from "react";
import { render } from "react-dom";

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            homeLink: "Home"
        }
    }

    onGreet() {
        alert("Hello");
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        });
    }


        render(){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-2">
                            <Header homeLink={this.state.homeLink}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-2">
                            <Home
                                name={"Max"}
                                initialAge={24}
                                initialWeight={65}
                                greet={this.onGreet}
                                changeLink={this.onChangeLinkName.bind(this)}
                                initialLinkName={this.state.homeLink}
                            />
                        </div>
                    </div>
                </div>

            );
        }
    }


render(<App/>, window.document.getElementById("app"));

