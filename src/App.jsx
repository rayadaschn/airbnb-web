import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import AppFeedback from "./components/app-feedback";

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader />
      <Suspense fallback={<AppFeedback />}>
        <div className="page">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  );
});

export default App;
