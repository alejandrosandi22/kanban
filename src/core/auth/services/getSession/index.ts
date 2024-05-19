'use server';

import type { UserModel } from '@/lib/models/user';
import { createClient } from '@/lib/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function getSession() {
  const supabase = createClient();

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) redirect('/login');

  if (!session) redirect('/login');

  return { session, user: session.user.user_metadata as UserModel };
}
