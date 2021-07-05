import {useParams} from "react-router-dom"
import useStore from "../hooks/useStore"
import MessagePanelListItem from "./MessagePanelListItem"

export default function MessagesPanel(){
  let messages = useStore(store => store.messages)
  let loggedInUser = useStore(store => store.loggedInUser) 

  let {chatID} = useParams()
  if (chatID === undefined) 
    return <></>

  if (loggedInUser===null || messages===null)
    return <></>
  
  let filteredMessages = messages.filter(message => message.conversationId.toString() === chatID.toString())
  //console.log(`filtered messages: `,messages)
  return <>
    <ul className="conversation__messages">
      {filteredMessages.map(filteredMessage => <MessagePanelListItem filteredMessage={filteredMessage}/>)}
    </ul>
  </>    
}


