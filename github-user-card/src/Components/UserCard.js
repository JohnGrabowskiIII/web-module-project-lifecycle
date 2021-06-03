
import React from 'react'

import UserInfo from './UserInfo'

class UserCard extends React.Component {

    constructor(props) {
        super(props);
        
    }

    // FUNCTION ADDS/REMOVES CSS TO DIV IF SELECTED === ID

    // FUNCTION DETERMINES IF SELECTED === ID
        // IF THIS.STATE.SELECTED === ID
            // RETURN <USERINFO INFO={THIS.PROPS} />

    render() {
        // JSX FOR CARD
            // {USERINFO FUNCTION}
        return (
            <div>
                <h1>usercard loaded</h1>
            </div>
        )      
    }

}

export default UserCard;