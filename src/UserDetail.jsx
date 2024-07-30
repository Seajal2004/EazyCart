import React, {useState, useEffect} from "react";
import axios from "axios";
export const CreateUser = React.createContext();
function UserDetail({children}){
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);
      const token = localStorage.getItem("token");
      useEffect(()=> {
        if(token){
        axios.get("https://myeasykart.codeyogi.io/me",{
          headers: {
            Authorization: token,
          }
        }).then((response)=>{
          setUser(response.data);
          setLoading(false);
        }
        )
      }
        else{
          setLoading(false);
        }
    },[])
    if(loading){
        return(
          <div className="flex flex-col items-center justify-center h-screen w-screnn">
            <h1 className="text-5xl">Loading...</h1>
          </div>
        )
      }
    return (
        <CreateUser.Provider value={{user,setUser}}>
          {children}
        </CreateUser.Provider>
    )
}
export default UserDetail;