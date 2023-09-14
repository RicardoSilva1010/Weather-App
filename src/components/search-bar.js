import React from "react";
import "./search-bar.css"
import SearchIcon from '@mui/icons-material/Search';

//searchBar componente
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    onInputChange(e){
        this.props.inputChange(e);
    }

    onFormSubmit(e){
        e.preventDefault();
        this.props.formSubmitted();
    }

    render() {
        const location =this.props.location;

        return (
            <div className="search-bar">
                <form className="search-bar_form" onSubmit={(e) => this.onFormSubmit(e) }>
                    <button className="search-bar_button" type="submit"><SearchIcon /></button> 
                    <input className="search-bar_input" id="search" 
                    name="search" 
                    value={location} 
                    onChange={(e) => this.onInputChange(e)}
                    ></input>
                </form>
            </div>
        )
    }
}

export default SearchBar;