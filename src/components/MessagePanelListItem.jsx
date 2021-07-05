import useStore from "../hooks/useStore"

export default function MessagePanelListItem({filteredMessage}){
  let usersConversations = useStore(store => store.conversations)
  let loggedInUser = useStore(store => store.loggedInUser)   
  let outGoingText = ""
  if (filteredMessage.userId === loggedInUser.id)
    outGoingText = "outgoing"

  console.log(`Filtered Message:- ${filteredMessage}`)
  return <>
    <li className={outGoingText}>
      <p>{filteredMessage.messageText}</p>
    </li>
  </>
}

