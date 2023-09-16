import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ListRoutes } from "./Routes";
const App: FC = () => {
  return (
    <BrowserRouter>
      <ListRoutes />
    </BrowserRouter>
  );
};

export { App };
