
import React from 'react'
import axios from 'axios'

import UserCard from './Components/UserCard'

class App extends React.Component {

  constructor() {
    super();
    // STATE USERS
    this.state = {users: [], selected: ''}
  }

  defaultUsernames = [
    'johngrabowskiiii',
    'torvalds',
    'elonmuskceo',
    'austenallred'
  ]

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
      name: name,
      pRepos: public_repos,
      url: url
    }
  }

  userStateSetter = data => {
    this.setState({...this.state, users: [...this.state.users, {...this.githubInfoGrabber(data)}]})
  }

  // DEFINE AXIOS CALL FOR SINGLE USER
  getUserSingle = userString => {
    axios.get(`https://api.github.com/users/${userString}`)
      .then(res => {
        this.userStateSetter(res)
      })
      .catch(err => console.log(err));
  }

  // DEFINE AXIOS CALL FOR MULTIPLE USERS
  getUsers = userArray => {
    userArray.map(user => {
      this.getUserSingle(user)
    })
  }

  // DEFINE INITIAL AXIOS CALLS IN FUNCTION
  setUsers = users => {
    typeof(users) === 'string' ? this.getUserSingle(users) : this.getUsers(users);
    }

    // GENERATE COPY OF STATE
  stateCopier = () => {
      return this.state.users;
    }

  // DEFINE APPENDING FOLLOWERS TO STATE
  followerFinder = uname => {
    axios.get(`https://api.github.com/users/${uname}/followers`)
    .then(res => {
      let stateCopy = this.stateCopier().map(user => {
        if (uname !== user.username) return user;
        return {...user, follower: res};
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

  mapToUserCard = () => {
    return this.state.users.map(user => {
      return (
        <UserCard selected={this.state.selected}
        user={user}
        key={user.username}
        id={user.username}
        click={this.selectSetter}
        follower={this.followerFinder} />
      )
    })
  }

  componentDidMount() {
    // AXIOS CALL GITHUB INFO
    this.setUsers(this.defaultUsernames);
  }
    
  componentDidUpdate() {
    console.log(this.state.users)
    console.log(this.state.selected);
  }

  render() {
    // MAP STATE FUNCTION
    return (
      <div>
        <h1>App loaded</h1>
        {this.mapToUserCard()}
      </div>
    )
  }

}

export default App;