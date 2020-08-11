import React from "react";

import MainLayout from "layouts/main";
import HomeUI from "components/home";
import { ContextProvider } from "contexts/home";

function HomeScreen(props) {
  return (
    <ContextProvider>
      <MainLayout>
        <HomeUI />
      </MainLayout>
    </ContextProvider>
  );
}

export default HomeScreen;
