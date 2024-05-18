import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/common/ui/card';
import RegisterForm from '@/core/auth/components/register-form';
import SocialLogin from '@/core/auth/components/social-login';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className='h-screen'>
      <Card className='absolute left-[50%] top-[50%] mx-auto max-w-sm translate-x-[-50%] translate-y-[-50%]'>
        <CardHeader>
          <CardTitle className='text-xl'>Welcome back!</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
          <div className='mt-5'>
            <p className='text-center text-sm font-medium leading-none opacity-70'>
              or
            </p>
          </div>
          <SocialLogin />
          <div className='mt-4 text-center text-sm'>
            Already have an account?{' '}
            <Link href='/login' className='underline'>
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
