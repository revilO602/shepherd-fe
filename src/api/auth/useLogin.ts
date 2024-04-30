import { useMutation , useQueryClient } from '@tanstack/react-query'
import { useLocation, useNavigate } from 'react-router-dom';
import { User } from '../../contracts';
import useSnackbar from '../../hooks/useSnackbar';


async function login(username: string, password: string): Promise<User> {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    const response = await fetch('http://127.0.0.1:8000/token', {
      method: 'POST',
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   },
      body: formData
    })
    if (!response.ok)
      throw new Error('Failed on sign in request');
  
    return await response.json();
  }
  
  export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const location = useLocation();
    const {setOpen, setMessage, setType} = useSnackbar()
  
    const loginMutation = useMutation({
      mutationFn: ({username, password}) => login(username, password),
      onSuccess: (data) => {
        queryClient.setQueryData(['user'], data);
        const origin = location.state?.from?.pathname || '/trips';
        navigate(origin);
      },
      onError: (error) => {
        setMessage('Ops.. Error on sign in. Try again!');
        setOpen(true);
      }});
  
    return loginMutation
  }