'use server';

import { APP_URL } from '@/lib/constants';
import { MutationResponse } from '@/lib/types';
import handleError from '@/lib/utils/handleError';
import { createClient } from '@/lib/utils/supabase/server';

export async function authenticate(
  prevState: MutationResponse,
  formData: FormData,
): Promise<MutationResponse> {
  try {
    const supabase = createClient();

    const payload = {
      email: (formData.get('email') as string).trim(),
    };

    const { error } = await supabase.auth.signInWithOtp({
      email: payload.email,
      options: {
        shouldCreateUser: false,
        emailRedirectTo: `${APP_URL}/auth/callback`,
      },
    });

    if (error) {
      return handleError('default');
    }

    return {
      success: {
        message: `An email has been sent to ${payload.email}`,
      },
      error: null,
    };
  } catch (error) {
    return handleError('default');
  }
}
