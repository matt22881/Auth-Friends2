import React, { useState, createContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import PrivateRoute from './components/PrivateRoute'

export const friendsContext = createContext()

function App() {

  const [friends, setFriends] = useState([])

  return (
    <friendsContext.Provider value={[friends, setFriends]}>  
      <div className="App">
        <Nav />
        <Switch>
          <PrivateRoute exact path="/protected" component={Welcome} />
          <Route path="/login" component={Login} />
          {/* <Route component={Login} /> */}
        </Switch>
      </div>
    </friendsContext.Provider>
  )
}
export default App;
