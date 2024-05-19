import NavLinks from '@/core/workspaces/common/sidebar/nav-links';
import RecentWorkspaces from '@/core/workspaces/common/sidebar/recent-workspaces';

export default async function Sidebar() {
  return (
    <aside className='fixed bottom-0 h-[72px] w-full border-t bg-background lg:relative lg:h-full lg:w-52 lg:border-r lg:border-t-0 2xl:w-60'>
      <nav className='w-full p-4 pl-0'>
        <NavLinks />
        <hr className='my-5 w-full bg-border' />
        <p className='mb-5 text-sm font-bold'>Workspaces</p>
        <RecentWorkspaces />
      </nav>
    </aside>
  );
}
