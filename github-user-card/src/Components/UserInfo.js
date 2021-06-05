
import React from 'react'

import FollowerList from './FollowerList'

class UserInfo extends React.Component {

    constructor(props) {
        super(props)
        // STATE TO LOAD FOLLOWERS
        this.state = {open: false}
    }

    // render bio, company, location, pRepos, url, username

    returnPTag = (desc, value, key) => {
        if (value) {
            return (
                <div key={key} >
                    <p>{desc}: {value}</p>
                </div>
            )
        }

    }

    followerRenderer = () => {
        if (this.state.open) return (
            <FollowerList info={this.props.user.follower}
            number={this.props.user.followerNumber}
            tagCreator={this.returnPTag}
            follower={this.props.follower}
            username={this.props.user.username} />
        ) 
    }

    toggleButton = e => {
        e.stopPropagation();
        this.setState({open: !this.state.open})
    }

    componentDidMount() {
        // ANIME.JS TRANSITION
            // Z LEVEL -1
            // SLIDE DOWN FROM BEHIND CARD
        console.log(this.props.user)
    }

    render() {
        // JSX
        return (
            <div>
                <h1>userinfo loaded</h1>
                {this.returnPTag('User Bio', this.props.user.bio)}
                {this.returnPTag('Associated Company', this.props.user.company)}
                {this.returnPTag('User Location', this.props.user.location)}
                {this.returnPTag('Github Username', this.props.user.username)}
                {this.returnPTag('Link to Profile', this.props.user.url)}
                {this.returnPTag('Number of Public Repos', this.props.user.pRepos)}
                {this.followerRenderer()}
                <button onClick={this.toggleButton} >+</button>
            </div>
        )
    }

}

export default UserInfo;