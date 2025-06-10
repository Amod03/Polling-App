import { createContext, useState } from "react";

export const UserContext=createContext();

const UserProvider = ({children})=>{
    const [user,setUser]=useState(null);
    console.log(user)
    const updateUser=(userData)=>{
        setUser(userData);
    };

    const clearUser=()=>{
        setUser(null)
    }

    //Update user stats
    const updateUserStats=(key,value)=>{
        setUser((prev)=>({
            ...prev,
            [key]:value,
        }))
    }

    //update totalPollsVotes locally
    const onUserVoted=()=>{
        const totalPollsVotes=user.totalPollsVotes || 0;
        updateUserStats("totalPollsVotes",totalPollsVotes+1);
    }


    //Update totalPollsCreated count locally
    const onPollCreateOrDelete=(type="create")=>{
      const totalPollsCreated=user.totalPollsCreated || 0;
      updateUserStats(
        "totalPollsCreated",
        type == "create" ? totalPollsCreated+1 : totalPollsCreated-1
      );
    };

    //Add or Remove pollid from bookmarkedPolls
    const toggleBookmarkId=(id)=>{
        const bookmarks=user.bookmarkedPolls || [];
        const index=bookmarks.indexOf(id);
        console.log(index,"index")
        if(index === -1){
            //Add the id if its not in the array
            setUser((prev)=>({
                ...prev,
                bookmarkedPolls:[...bookmarks,id],
                totalPollsBookmarked:prev.totalPollsBookmarked+1,
            }))
        }else{
            //Remove the id if its already in the array
            setUser((prev)=>({
                ...prev,
                bookmarkedPolls:bookmarks.filter((item)=>item !== id),
                totalPollsBookmarked:prev.totalPollsBookmarked - 1,
            }))
        }
    };

    return (
        <UserContext.Provider value={{user,updateUser,clearUser,onPollCreateOrDelete,onUserVoted,toggleBookmarkId}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;