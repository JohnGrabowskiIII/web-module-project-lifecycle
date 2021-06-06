
/** @jsxImportSource @emotion/react */

import React from 'react'

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

    errorDisplay = () => {
        if (this.props.err) return <span>Not a valid user</span>
    }

    render() {
        return (
            <div css={[this.props.style.searchContainer]} >
                <form onSubmit={this.searchSubmit} css={[this.props.style.flexRow, this.props.style.searchFlex]} >
                    <input type='text' value={this.state.input} onChange={this.change} placeholder={this.placeholder} />
                    {this.errorDisplay()}
                    <button >Search</button>
                </form>
            </div>

        )
    }

}

export default SearchBar;