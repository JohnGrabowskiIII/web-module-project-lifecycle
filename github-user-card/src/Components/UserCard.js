
/** @jsxImportSource @emotion/react */

import React from 'react'

import UserInfo from './UserInfo'

class UserCard extends React.Component {

    // FUNCTION ADDS/REMOVES CSS TO DIV IF SELECTED === ID
    glowApplier = () => {
        if (this.props.selected === this.props.id) return this.props.style.glow;
    }

    // IF SELECTED RENDER USERINFO
    userInfoRenderer = () => {
        if (this.props.selected === this.props.id) return (
            <UserInfo user={this.props.user} follower={this.props.follower} style={this.props.style} />
        )
    }

    render() {
        return (
            <div css={[this.props.style.cardContainer, this.glowApplier()]} onClick={() => this.props.click(this.props.id)} >
                <div>
                    <img src={this.props.user.avatar} alt={`Github avatar of ${this.props.user.username}`} css={this.props.style.cardImage} />
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