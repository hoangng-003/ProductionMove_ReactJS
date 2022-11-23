import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import FactoryLayout from "layouts/factory";
import DealerLayout from "layouts/dealer";
import InsuranceLayout from "layouts/insurance";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <HashRouter>
          <Switch>
            <Route path={`/auth`} component={AuthLayout} />
            <Route path={`/admin`} component={AdminLayout} />
            <Route path={`/factory`} component={FactoryLayout} />
            <Route path={`/dealer`} component={DealerLayout} />
            <Route path={`/insurance`} component={InsuranceLayout} />
            <Redirect from='/' to='/auth' />
          </Switch>
        </HashRouter>
      </ThemeEditorProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
