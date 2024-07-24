import { useState } from "react"
import "./github.css"


export default function GithubProfile(){

    const base_URL = "https://api.github.com/users/"

    const [input,setInput]= useState("")
    const [user,setUser]= useState("")
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    async function fetchUser(){
        try{
            setLoading(true)
            
            const response = await fetch(`${base_URL}${input}`)
            const data = await response.json()

            setUser(data)
            setInput("")
            setLoading(false)

        }catch(err){
            setError(err)
            setLoading(false)
        }
    }

    if(loading){
        return <div> Loading Please wait</div>
    }

    if(error !== null){
        return <div> Error occurred: {error}</div>
    }


    return <div className="container">
        <div className="search-bar"> 
            <input type="text" placeholder="Enter github username"  value={input} name="profile" onChange={(e)=>setInput(e.target.value)}/>
            <button className="search" onClick={()=>fetchUser()}>Search</button>
        </div>

        {
           user  ? 
                <div className="profile-container">
                    <div className="profile-image">
                        <img src={user.avatar_url} alt={user.name} />
                    </div>
                    <div className="username">
                        <a href={user.html_url}>{user.name||user.login}</a>
                        <p className="joined">User joined on: {new Date(user.created_at).toDateString()}</p>
                    </div>

                    <p className="repos">Public repos:  {user.public_repos} </p>
                    <p className="followers">Followers:  {user.followers} </p>
                    <p className="following">Following:  {user.following} </p>
                </div>
            
            : null
        }
     {console.log(user)}
    </div>
}