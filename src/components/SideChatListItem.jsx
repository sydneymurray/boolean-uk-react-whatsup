import {useEffect} from "react"
import useStore from "../hooks/useStore"
import { useHistory } from "react-router-dom"


export default function SideChatListItem({conversation}){
  let users = useStore(store => store.users)
  let messages = useStore(store => store.messages)
  let retrieveMessages = useStore(store => store.retrieveMessages)
  let history = useHistory()

  useEffect(() => {
    retrieveMessages()
    }, 
    [retrieveMessages]
  )  
  
  let loggedInUser = useStore(store => store.loggedInUser) 
  
  if (loggedInUser===null || users===null || messages===null)
    return <></>

  let otherPartyId = conversation.userId  
  if (loggedInUser.id === conversation.userId)
    otherPartyId = conversation.participantId
  let otherParty = users.find(user => user.id === otherPartyId)

  let lastMessage = ""
  for (let i = messages.length-1; i >= 0; i--)
    if (messages[i].userId === loggedInUser.id || messages[i].userId === otherParty.id   ){
      lastMessage = messages[i].messageText.slice(0,40)
      break
    }

  return <> 
    <li key={conversation.id}>
      <button className="chat-button" onClick={() => history.push(`/logged-in/${conversation.id}`)}>
        <img className="avatar" height="50" width="50" alt="" src={otherParty.avatar}/>
        <div>
          <h3>{otherParty.firstName+" "+otherParty.lastName}</h3>
          <p>{lastMessage}</p>
        </div>
      </button>
      </li>
    </>
}  

