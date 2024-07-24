import React from "react";
function UserDetail(){
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);
    function logout(){
        localStorage.setItem("token","");
        setUser();
      }
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
    return (
        <attribute>
          
        </attribute>
    )
}
export default UserDetail;