'use client';

import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import type { AppPathnames } from '@/config';
import { Link } from '@/navigation';

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <div className='flex h-[60px]'>
      <div className={clsx('w-[6px] rounded-r-lg mr-9 transition-all duration-300 bg-blue-600', isActive ? 'translate-x-0' : "-translate-x-2")}></div>
      <Link
        aria-current={isActive ? 'page' : undefined}
        className={clsx(
          'flex items-center justify-center text-lg gap-2 transition-all duration-300',
          isActive ? 'text-sidebar' : 'text-gray-400 hover:text-sidebar'
        )}
        href={href}
        {...rest}
      />
    </div>
  );
}