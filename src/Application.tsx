import Main from "./pages/Main";
import NotFound from "./pages/NotFound/NotFound";
import { type FC } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

export const Application: FC = () => {
    return (
        <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
            <Switch>
                <Route path="/" Component={Main}></Route>
                <Route path="*" Component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    );
};
