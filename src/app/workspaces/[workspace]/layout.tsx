import Sidebar from '@/core/workspaces/common/sidebar';
import { LayoutProps } from '@/lib/types';

export default function WorkspaceLayout({ children }: Readonly<LayoutProps>) {
  return (
    <div className='flex h-screen w-full flex-col gap-1 px-1 pt-[70px] lg:flex-row lg:overflow-hidden lg:px-6'>
      <div className='hidden w-full flex-none lg:block lg:w-52 2xl:w-60'>
        <Sidebar />
      </div>
      <div className='h-full w-full overflow-y-auto p-4'>{children}</div>
      <div className='block h-[72px] w-full flex-none lg:hidden lg:w-52 2xl:w-60'>
        <Sidebar />
      </div>
    </div>
  );
}
