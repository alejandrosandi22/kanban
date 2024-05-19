'use client';

import {
  Cog8ToothIcon,
  PresentationChartLineIcon,
  UsersIcon,
  ViewColumnsIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const links = [
  { name: 'Board', href: '/workspaces/board', icon: ViewColumnsIcon },
  {
    name: 'Team',
    href: '/workspaces/team',
    icon: UsersIcon,
  },
  {
    name: 'Activity',
    href: '/workspaces/activity',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Project Settings',
    href: '/workspaces/project-settings',
    icon: Cog8ToothIcon,
  },
];

function addParam(param: string | string[], path: string): string {
  if (!param) return path;

  const splitPath = path.split('/');
  return `/${splitPath[1]}/${param}/${splitPath[2]}`;
}

export default function NavLinks() {
  const params = useParams();

  return (
    <ul className='flex h-full w-full flex-row justify-between lg:flex-col lg:space-y-2'>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <li key={link.name}>
            <Link
              href={addParam(params.workspace, link.href)}
              className='flex w-full justify-start gap-3 rounded-xl px-3 py-2 hover:bg-accent hover:text-accent-foreground'
            >
              <LinkIcon width={24} height={24} />
              <span className='hidden lg:block'>{link.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
