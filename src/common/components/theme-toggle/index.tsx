'use client';

import { Switch } from '@/common/ui/switch';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <Switch />;

  return (
    <Switch
      checked={resolvedTheme === 'dark'}
      onCheckedChange={() => {
        if (resolvedTheme === 'dark') return setTheme('light');
        else return setTheme('dark');
      }}
    />
  );
}
