import { useNavigate } from "react-router-dom";
import { useMutation , useQueryClient } from '@tanstack/react-query'
import useSnackbar from "../../hooks/useSnackbar";

async function register(username: string, email: string, password: string) {
    const response = await fetch('http://127.0.0.1:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    })
    if (!response.ok)
      throw new Error('Failed on sign up request');
  
    return await response.json();
  }
  
  export function useRegister() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {setOpen, setMessage, setType} = useSnackbar()
  
    const registerMutation  = useMutation({
      mutationFn: ({ username, email, password }) => register(username, email, password),
      onSuccess: (data) => {
        queryClient.setQueryData(['user'], data);
        navigate('/');
      },
      onError: (error) => {
        setMessage('Ops.. Error on sign in. Try again!');
        setOpen(true);
      }
    });
  
    return registerMutation
  }