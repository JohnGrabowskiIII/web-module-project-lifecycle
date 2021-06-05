
import React from 'react'

import UserInfo from './UserInfo'

class UserCard extends React.Component {

    constructor(props) {
        super(props); 
    }

    // FUNCTION ADDS/REMOVES CSS TO DIV IF SELECTED === ID

    // IF SELECTED RENDER USERINFO
    userInfoRenderer = () => {
        if (this.props.selected === this.props.id) return (
            <UserInfo user={this.props.user} follower={this.props.follower} />
        )
    }

    render() {
        return (
            <div onClick={() => this.props.click(this.props.id)} >
                <div>
                    <img src={this.props.user.avatar} alt={`Github avatar of ${this.props.user.username}`} />
                    <div>
                        <h2>
                            {this.props.user.name}
                        </h2>
                    </div>
                </div>
                {this.userInfoRenderer()}
            </div>
        )      
    }

}

export default UserCard;