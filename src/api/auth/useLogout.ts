import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    queryClient.setQueryData(['user'], null);
    navigate('/');
  }, [navigate, queryClient])

  return onLogout
}