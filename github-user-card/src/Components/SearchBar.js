
/** @jsxImportSource @emotion/react */

import React from 'react'
import {jsx, css} from '@emotion/react'

class SearchBar extends React.Component {

    placeholder = 'Search for User Here'

    render() {
        return (
            <div>
                <h1>SearchBar loaded</h1>
                <form>
                    <input type='text' placeholder={this.placeholder} />
                <button>Search</button>
                </form>
            </div>

        )
    }

}

export default SearchBar;