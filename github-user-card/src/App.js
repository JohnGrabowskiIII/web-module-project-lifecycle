
/** @jsxImportSource @emotion/react */

import React from 'react'
import axios from 'axios'
import {jsx, css} from '@emotion/react'

import SearchBar from './Components/SearchBar'
import UserCard from './Components/UserCard'
import style from './style'

class App extends React.Component {

  constructor() {
    super();
    this.state = {users: [], selected: '', getError: []}
  }

  defaultUsernames = [
    'johngrabowskiiii',
    'torvalds',
    'elonmuskceo',
    'austenallred'
  ]

  // DESTRUCTURE DATA AND RETURN OBJECT
  githubInfoGrabber = data => {
    const {avatar_url, bio, company, followers, location, login, name, public_repos, url} = data.data;
    return {
      avatar: avatar_url,
      bio: bio,
      company: company,
      follower: [],
      followerNumber: followers,
      location: location,
      username: login,
      name: !name ? 'Anonymous' : name,
      pRepos: public_repos,
      url: url
    }
  }

  // SET USER STATE TO THE RESULT OF FUNCTION CALL
  userStateSetter = data => {
    this.setState({...this.state, users: [...this.state.users, {...this.githubInfoGrabber(data)}]})
  }

  // DEFINE AXIOS CALL FOR SINGLE USER
  getUserSingle = userString => {
    axios.get(`https://api.github.com/users/${userString}`)
      .then(res => {
        this.userStateSetter(res)
      })
      .catch(err => {
        this.setState({...this.state, getError: err})
        console.log(err);
        console.log(this.state.getError);
      });
  }

  // DEFINE AXIOS CALL FOR MULTIPLE USERS
  getUsers = userArray => {
    userArray.forEach(user => {
      this.getUserSingle(user)
    })
  }

  // DEFINE INITIAL AXIOS CALLS IN FUNCTION
  setUsers = users => {
    typeof(users) === 'string' ? this.getUserSingle(users) : this.getUsers(users);
    }

  // DEFINE APPENDING FOLLOWERS TO STATE
  followerFinder = uname => {
    axios.get(`https://api.github.com/users/${uname}/followers`)
    .then(res => {
      let stateCopy = this.state.users.map(user => {
        if (uname !== user.username) return user;
        return {...user, follower: res.data.map(follower => follower.login)};
      })
      this.setState({...this.state.users, users: stateCopy})
    })
  }

  // ONCLICK SET SELECTED TO E.TARGET.ID
  selectSetter = id => {
    this.state.selected === id ?
      this.setState({...this.state, selected: ''}) :
      this.setState({...this.state, selected: id})
  }

  // MAP OVER STATE AND GENERATE USERCARDS
  mapToUserCard = () => {
    return this.state.users.map(user => {
      return (
        <UserCard selected={this.state.selected}
        user={user}
        key={user.username}
        id={user.username}
        click={this.selectSetter}
        follower={this.followerFinder}
        style={style} />
      )
    })
  }

  // BEGIN LIFECYLCE METHODS
  componentDidMount() {
    this.setUsers(this.defaultUsernames);
  }
    
  componentDidUpdate() {
    console.log(this.state.users)
  }

  render() {
    return (
      <div css={[style.pageContainer]} >
        <SearchBar getUser={this.getUserSingle} />
        <div css={[ style.flexRow]} >
          {this.mapToUserCard()}
        </div>
      </div>
    )
  }

}

export default App;