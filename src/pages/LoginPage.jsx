import {useEffect} from "react"
import LoginUserListItem from "../components/LoginUserListItem"
import useStore from "../hooks/useStore"


export default function LoginPage(){
  let retrieveUsers = useStore(store => store.retrieveUsers)
  let users = useStore(store => store.users)
  
  useEffect(() => {
    retrieveUsers()
    }, 
    [retrieveUsers]
  )  

  if (users==null)
    return <></>

  return <>
  <div className="main-wrapper login">
    <section className="login-section">
      <h2>Choose your user!</h2>
      <ul>
        {users.map(user => <LoginUserListItem user={user}/>)}
        <li>
          <button className="user-selection"><h3>+ Add a new user</h3></button>
        </li>
      </ul>
    </section>
  </div>
  </>
}

