// "use client"
import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Roboto } from 'next/font/google'
import Provider from "./provider";


export const roboto = Roboto({
    weight: ['400', '700', '500', '100', '300'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto'
})

export const metadata: Metadata = {
    title: "Kashew Cheese",
    description: "Best for eating",
};

export default function RootLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = useMessages();
    return (
        <html lang={locale}>
            <body className={`${roboto.className} text-primary`}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Provider>
                        {children}
                    </Provider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
