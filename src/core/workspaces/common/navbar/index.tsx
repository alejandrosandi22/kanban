import favicon from '@/common/assets/icon.svg';
import { Button, buttonVariants } from '@/common/ui/button';
import { Input } from '@/common/ui/input';
import { Label } from '@/common/ui/label';
import { Sheet, SheetContent, SheetTrigger } from '@/common/ui/sheet';
import { getSession } from '@/core/auth/services/getSession';
import UserDropdown from '@/core/workspaces/common/navbar/user-dropdown';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default async function Navbar() {
  const { user } = await getSession();

  return (
    <header className='absolute z-40 flex h-[70px] w-full items-center justify-between border-b px-5 text-sm md:px-10'>
      <Link
        href='/workspaces'
        className='mr-6 flex items-center gap-2 text-lg font-bold lg:hidden'
      >
        <Image
          src={favicon}
          alt='Icon for the website'
          width={50}
          height={50}
          className='h-5 w-5'
        />
        <span>Kanban</span>
      </Link>
      <Sheet>
        <SheetTrigger asChild className='class'>
          <Button className='lg:hidden' size='icon' variant='secondary'>
            <Bars3Icon className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='right'>
          <ul className='flex flex-col gap-6 py-6'>
            <li>
              <Link
                href='/workspaces'
                className={buttonVariants({ variant: 'ghost' })}
              >
                Workspaces
              </Link>
            </li>
            <li>
              <Link
                href='/workspaces/tasks'
                className={buttonVariants({ variant: 'ghost' })}
              >
                Tasks
              </Link>
            </li>
            <li>
              <Link
                href='/workspaces/support'
                className={buttonVariants({ variant: 'ghost' })}
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                href='/workspaces/create'
                className={buttonVariants({ variant: 'default' })}
              >
                Create
              </Link>
            </li>
            <li>
              <form className='relative flex items-center'>
                <Label htmlFor='search' className='sr-only'>
                  Search
                </Label>
                <Input
                  id='search-workspace'
                  name='search-workspace'
                  placeholder='Search'
                  className='pl-9'
                />
                <div className='absolute left-3'>
                  <MagnifyingGlassIcon width={18} height={18} />
                </div>
              </form>
            </li>
            <li className='flex items-center gap-5'>
              <UserDropdown user={user} />
            </li>
          </ul>
        </SheetContent>
      </Sheet>

      <nav className='ml-auto hidden w-full justify-between gap-6 lg:flex'>
        <div className='flex gap-8'>
          <Link href='/' className='flex items-center gap-2 text-lg font-bold'>
            <Image
              src={favicon}
              alt='Icon for the kanban app'
              width={50}
              height={50}
              className='h-5 w-5'
            />
            <span>Kanban</span>
          </Link>
          <ul className='flex gap-2 py-6'>
            <li>
              <Link
                href='/workspaces'
                className={buttonVariants({ variant: 'ghost' })}
              >
                Workspaces
              </Link>
            </li>
            <li>
              <Link
                href='/workspaces/tasks'
                className={buttonVariants({ variant: 'ghost' })}
              >
                Tasks
              </Link>
            </li>
            <li>
              <Link
                href='/workspaces/support'
                className={buttonVariants({ variant: 'ghost' })}
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                href='/workspaces/create'
                className={buttonVariants({ variant: 'default' })}
              >
                Create
              </Link>
            </li>
          </ul>
        </div>
        <ul className='flex items-center gap-8'>
          <li>
            <form className='relative flex items-center'>
              <Label htmlFor='search' className='sr-only'>
                Search
              </Label>
              <Input
                id='search-workspace'
                name='search-workspace'
                placeholder='Search'
                className='pl-9'
              />
              <div className='absolute left-3'>
                <MagnifyingGlassIcon width={18} height={18} />
              </div>
            </form>
          </li>
          <li className='flex items-center gap-5'>
            <UserDropdown user={user} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
