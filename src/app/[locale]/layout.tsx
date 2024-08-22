import SideBar from "./components/Sidebar";
import Container from './components/Container';
import { Grid } from "@mui/material";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Grid container xs={12}>
      <Grid item xs={2.5}>
        <SideBar />
      </Grid>
      <Grid item xs={9.5}>
        <Header />
        <Container>
          {children}
        </Container>
      </Grid>
    </Grid>
  );
}
