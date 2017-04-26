import React from 'react';

export const Header = (props) => {
        return(
            <nav className="navbar navbar-light bg-faded">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#"></a>{props.homeLink}</li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };