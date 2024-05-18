'use client';

import SubmitButton from '@/common/components/submit-button';
import { Badge } from '@/common/ui/badge';
import { Input } from '@/common/ui/input';
import { Label } from '@/common/ui/label';
import { authenticate } from '@/core/auth/services/authenticate';
import { MUTATION_INITIAL_STATE } from '@/lib/constants';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const [state, dispatch] = useFormState(authenticate, MUTATION_INITIAL_STATE);

  const { success, error } = state;

  useEffect(() => {
    if (!error) return;
    toast.error(error.message);
  }, [error]);

  return (
    <form action={dispatch} className='space-y-5'>
      <div className='space-y-2.5'>
        <Label htmlFor='email'>Email:</Label>
        <Input
          id='email'
          name='email'
          placeholder='Enter your email'
          required
        />
      </div>
      {success && <Badge variant={'success'}>{success.message}</Badge>}
      <SubmitButton>Continue</SubmitButton>
    </form>
  );
}
