import { Navigation } from "components/Navigation/Navigation";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header } from "./AppBar.styled";

export const AppBar = (params) => {
  return (
      <Container>
        <Header>
                  <Navigation />
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
      </Container>
  )
}
