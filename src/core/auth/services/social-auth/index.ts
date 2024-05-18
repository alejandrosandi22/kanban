'use server';

import { APP_URL } from '@/lib/constants';
import { createClient } from '@/lib/utils/supabase/server';
import { redirect } from 'next/navigation';

enum AllowedProviders {
  GITHUB = 'github',
  GOOGLE = 'google',
}

export async function githubAuth(): Promise<void> {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: AllowedProviders.GITHUB,
    options: {
      redirectTo: `${APP_URL}/auth/callback`,
    },
  });

  if (error) return;

  redirect(data.url);
}

export async function googleAuth(): Promise<void> {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: AllowedProviders.GOOGLE,
    options: {
      redirectTo: `${APP_URL}/auth/callback`,
    },
  });

  if (error) return;

  redirect(data.url);
}
