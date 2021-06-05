
import React from 'react'

import UserInfo from './UserInfo'

class UserCard extends React.Component {

    constructor(props) {
        super(props);
        // STATE TO LOAD FOLLOWERS
        
    }

    // {user, id, click, follower} = this.props;

    // FUNCTION ADDS/REMOVES CSS TO DIV IF SELECTED === ID

    // FUNCTION DETERMINES IF SELECTED === ID

    render() {
        // JSX FOR CARD
            // {USERINFO FUNCTION}
        return (
            <div>
                <h1>usercard loaded</h1>
                <div>
                    <img src={this.props.user.avatar} alt={`Github avatar of ${this.props.user.username}`} />
                    <div>
                        <h2>
                            {this.props.user.name}
                        </h2>
                    </div>
                </div>
            </div>
        )      
    }

}

export default UserCard;