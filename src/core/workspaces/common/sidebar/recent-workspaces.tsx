import Link from 'next/link';

const links = [
  { name: 'Project1 workspace', href: '/project1', icon: '🎲' },
  {
    name: 'Project #2',
    href: '/project2',
    icon: '⌛',
  },
  {
    name: 'Activity #3 project',
    href: '/project3',
    icon: '⌚',
  },
];

export default function RecentWorkspaces() {
  return (
    <ul className='hidden h-full w-full flex-row justify-between lg:flex lg:flex-col lg:space-y-2'>
      {links.map((link) => {
        return (
          <li key={`${link.name}/board`}>
            <Link
              href={link.href}
              className='flex w-full justify-start gap-3 rounded-xl px-3 py-2 hover:bg-accent hover:text-accent-foreground'
            >
              <span className='hidden lg:block'>{`${link.icon} ${link.name}`}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
