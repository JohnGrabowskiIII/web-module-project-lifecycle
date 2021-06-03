
import React from 'react'
import axios from 'axios'

import UserCard from './Components/UserCard'

class App extends React.Component {

  constructor() {
    super();
    // STATE USERS
    this.state = {users: []}
    // STATE SELECTED
    // FILTER FUNCTION FOR AXIOS DATA
    // FUNCTION TO APPEND FOLLOWERS TO STATE
    // FUNCTION TO MAP STATE AND RETURN CARD JSX
      // USERCARD NEEDS
      // CB STATE
      // KEY
      // ID
      // ONCLICK
    // DEFAULT USERS ARRAY
    this.defaultUsernames = [
      'johngrabowskiiii',
      'torvalds',
      'elonmuskceo',
      'austenallred'
    ]

  }

  githubInfoGrabber = data => {
    const {avatar_url, bio, company, location, login, name, public_repos, url} = data.data;
    return {
      avatar: avatar_url,
      bio: bio,
      company: company,
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

  componentDidMount() {
    // AXIOS CALL GITHUB INFO
    this.setUsers(this.defaultUsernames);
      // THEN SET STATE
      // THEN AXIOS CALL FOLLOWERS
        // FUNCTION TO APPEND TO STATE
  }

  // ONCLICK SET SELECTED TO E.TARGET.ID
    // IF SELECTED === E.TARGET.ID ?
      // SETSTATE SELECTED('') :
      // SETSTATE SELECTED(E.TARGET.ID)
    
  componentDidUpdate() {
    console.log(this.state.users)
  }

  render() {
    // MAP STATE FUNCTION
    return (
      <div>
        <h1>App loaded</h1>
      </div>
    )
  }

}

export default App;
