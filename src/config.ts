import {Pathnames} from 'next-intl/navigation';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = 'en' as const;
export const locales = ['en', 'vn'] as const;

export const pathnames = {
  '/': '/',
  '/dashboard':{
    en: '/dashboard',
    vn: '/dashboard',
  },
  '/users-management':{
    en: '/user-management',
    vn: '/user-management',
  },
  '/orders-management':{
    en: '/orders-management',
    vn: '/orders-management',
  },
  '/products-management':{
    en: '/products-management',
    vn: '/products-management',
  },
  '/category-management':{
    en: '/category-management',
    vn: '/category-management',
  },
  '/role-management':{
    en: '/role-management',
    vn: '/role-management',
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;