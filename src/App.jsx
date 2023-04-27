import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppHeader from "./components/app-header";

const App = memo(() => {
  return (
    <div className="app">
      {/* <AppHeader /> */}
      <Suspense fallback="loading.............">
        <div className="page">{useRoutes(routes)}</div>
      </Suspense>
      <div className="footer">尾部</div>
    </div>
  );
});

export default App;
