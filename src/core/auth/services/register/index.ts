'use server';

import { getUsername, isValidEmail } from '@/core/auth/utils';
import { APP_URL } from '@/lib/constants';
import { MutationResponse } from '@/lib/types';
import handleError from '@/lib/utils/handleError';
import { createClient } from '@/lib/utils/supabase/server';

export async function register(
  prevState: MutationResponse,
  formData: FormData,
): Promise<MutationResponse> {
  try {
    const payload = {
      email: (formData.get('email') as string).trim(),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
    };

    if (!isValidEmail(payload.email)) return handleError('Invalid email');

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email: payload.email,
      options: {
        data: {
          full_name: `${payload.firstName} ${payload.lastName}`,
          user_name: getUsername(payload.email),
        },
        shouldCreateUser: true,
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
