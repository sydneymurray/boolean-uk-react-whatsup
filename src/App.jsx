import {useEffect} from "react"
import { Switch, Route, Redirect, useHistory } from "react-router"
import FourOFour from "./pages/FourOFour"

import useStore from "./hooks/useStore"
import LoginPage from "./pages/LoginPage"
import MainAppPage from "./pages/MainAppPage"
import MessagesPanel from "./components/MessagesPanel"

export default function App() {
  let loggedInUser = useStore(store => store.loggedInUser) 
  let history = useHistory()

  useEffect(() => {
    if (loggedInUser) {
      history.push('/logged-in')
    } else {
      history.push('/login')
    }
    },
    [loggedInUser, history])

  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage/>
      </Route>           
      <Route path="/login" exact>
         <LoginPage/>
      </Route>
      <Route path="/logged-in" exact>
         <MainAppPage/>
      </Route>
      <Route path="/logged-in/:chatID">
        <MainAppPage/>
      </Route>
      <Route>
         <FourOFour/>
      </Route>
    </Switch>)
  }

