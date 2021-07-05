import {useEffect} from "react"
import SideChatListItem from "../components/SideChatListItem"
import useStore from "../hooks/useStore"

export default function SideChatList(){
let retrieveUserConversations = useStore(store => store.retrieveUserConversations)
let usersConversations = useStore(store => store.conversations)
let loggedInUser = useStore(store => store.loggedInUser) 

  useEffect(() => {
    retrieveUserConversations(loggedInUser.id)
    }, 
    [retrieveUserConversations,loggedInUser.id]
  )  

if (usersConversations===null)
  return <></>
  
  return <>
    <ul>
      <li>
        <button className="chat-button">
          <div><h3>+ Start a new Chat</h3></div>
        </button>
      </li>
      {usersConversations.map(conversation => <SideChatListItem conversation={conversation}/>)}
    </ul>
  </>
}