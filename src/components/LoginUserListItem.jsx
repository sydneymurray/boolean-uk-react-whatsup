import useStore from "../hooks/useStore"

export default function LoginUserListItem({user}){
  let LoginUser = useStore(store => store.LogInUser)
  
  return <>
    <li key={user.id}>
      <button onClick={()=> LoginUser(user)} className="user-selection">
        <img
          className="avatar"
          width="50"
          height="50"
          src={user.avatar}
          alt={user.firstName+" "+user.lastName}
        />
        <h3>{user.firstName+" "+user.lastName}</h3>
      </button>
    </li>
  </>
} 

