import create from "zustand"
import {usersURL} from "../components/data"
import {messagesURL} from "../components/data"
import {conversationsURL} from "../components/data"

const useStore = create((set, get)=>({
  loggedInUser: null,
  LogInUser: user => set({loggedInUser: user}),   
  users: null, 
  retrieveUsers() {
      fetch(usersURL)
        .then(resp => resp.json())
        .then(users => set({users}))
    },  
  messages: null,
  retrieveMessages() {
      fetch(messagesURL)
        .then(resp => resp.json())
        .then(messages => set({messages}))
    },
  addNewMessage: newMessage => set(store => ({messages: [...store.messages, newMessage]})),  
  conversations: null,
  retrieveUserConversations(userId) {
      fetch(conversationsURL+"?userId="+userId)
        .then(resp => resp.json())
        .then(conversations => set({conversations}))
    },
  addNewConversation: newConversation => set(store => ({conversations: [...store.conversations, newConversation]})), 
  }))

export default useStore
