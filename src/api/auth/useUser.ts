import { useEffect } from "react";
import { getUser, removeUser, saveUser } from "../../storage/userLocalStorage";
import { User } from "../../contracts";
import { useQuery } from '@tanstack/react-query'

async function fetchUser(user: User | null | undefined){
    console.log(user)
    if (!user) return null;
    console.log(user)
    const response = await fetch(`http://127.0.0.1:8000/users/me`, {
      headers: {
        Authorization: `Bearer ${user.access_token}`
      }
    })
    if (!response.ok)
      throw new Error('Failed on get user request');
    const newUser = await response.json()
    return {accessToken: user.access_token, user: newUser};
  }
  
  export function useUser() {
    const localUser = getUser();
    const result = useQuery({
      queryKey: ['user'],
      queryFN: async () => fetchUser(localUser),
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      initialData: getUser,
      });
      
      // if (result.isPending) {
      //   return <span>Loading...</span>
      // }
    
      if (result.isError) {
        removeUser();
      }

    useEffect(() => {
      if (!result.data) removeUser();
      else saveUser(result.data);
    }, [result.data]);
  
    return result
  }