'use client';

import defaultAvatar from '@/common/assets/default-avatar.svg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/common/ui/dropdown';
import type { UserModel } from '@/lib/models/user';
import {
  ArrowLeftStartOnRectangleIcon,
  Cog8ToothIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function UserDropdown({ user }: { user: UserModel }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='flex items-center gap-4'>
          <Image
            src={user.picture ?? defaultAvatar}
            alt={`Profile picture of the user ${user.name}`}
            width={100}
            height={100}
            className='h-9 w-9 rounded-full'
          />
          <div className='text-start'>
            <h6 className='text-sm font-medium leading-none'>{user.name}</h6>
            <p className='text-xs font-light leading-none'>{user.user_name}</p>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='mt-2.5'>
        <DropdownMenuItem>
          <Link
            href='/dashboard'
            className='flex w-full items-center gap-3 rounded-md text-sm'
          >
            <HomeIcon width={20} height={20} />
            Overview
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href='/dashboard/settings'
            className='flex w-full items-center gap-3 rounded-md text-sm'
          >
            <Cog8ToothIcon width={20} height={20} />
            Settings
          </Link>
        </DropdownMenuItem>
        <div className='relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-muted focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
          <form action=''>
            <button
              type='submit'
              className='flex w-full cursor-pointer items-center gap-3 rounded-md text-sm'
            >
              <ArrowLeftStartOnRectangleIcon width={20} height={20} />
              Log out
            </button>
          </form>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
