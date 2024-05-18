'use client';

import { Button } from '@/common/ui/button';
import { cn } from '@/lib/utils';
import { type ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';

type SubmitButtonProps = ComponentProps<'button'> & {};

export default function SubmitButton({
  children,
  className,
  ...props
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      {...props}
      type='submit'
      className={cn('w-full', className)}
      aria-disabled={pending}
    >
      {pending ? (
        <div className='ldrs-ring-container ldrs-ring-sm' />
      ) : (
        children
      )}
    </Button>
  );
}
