
/** @jsxImportSource @emotion/react */

import React from 'react'
import {jsx, css} from '@emotion/react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ''}

    }

    placeholder = 'Search for User Here'

    searchSubmit = e => {
        e.preventDefault();
        this.props.getUser(this.state.input)
        console.log(this.state.input);
        this.setState({...this.state, input: ''})
      }

    change = e => {
        this.setState({...this.state, input: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>SearchBar loaded</h1>
                <form onSubmit={this.searchSubmit} >
                    <input type='text' value={this.state.input} onChange={this.change} placeholder={this.placeholder} />
                <button>Search</button>
                </form>
            </div>

        )
    }

}

export default SearchBar;