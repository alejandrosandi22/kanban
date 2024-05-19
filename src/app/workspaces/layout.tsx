import Navbar from '@/core/workspaces/common/navbar';
import { LayoutProps } from '@/lib/types';

export default async function WorkspacesLayout({
  children,
}: Readonly<LayoutProps>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
