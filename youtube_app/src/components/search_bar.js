/**
 * Created by kamil on 4/5/17.
 */
import React, {Component} from 'react'   // const Components = React.Component - syntax sugar

// const SearchBar = () => {
//   return <input />;  //React.createElement
// };
// this is functional component , under this will be class based component based on this functional component

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                   value ={this.state.term}
                   onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}


export default SearchBar;