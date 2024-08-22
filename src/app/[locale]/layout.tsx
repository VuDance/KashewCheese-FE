import type { Metadata } from "next";
import "./globals.css";
import SideBar from "./components/Sidebar";
import Container from './components/Container';
import { Grid } from "@mui/material";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Header from "./components/Header";


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
      <body className="flex" >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Grid container xs={12}>
            <Grid item xs={2.5}>
              <SideBar />
            </Grid>
            <Grid item xs={9.5}>
              <Header/>
              <Container>
                {children}
              </Container>
            </Grid>
          </Grid>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
