import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Theme from "./Theme";
import "./App.css";

import { Route } from "react-router-dom";
import Login from "./pages/login";
import HomeCi from "./pages/HomeCi";
import HomePo from "./pages/HomePo";
import HomeFo from "./pages/HomeFo";
import HomeCo from "./pages/HomeCo";
import HomeId from "./pages/HomeId";

import viewFIRsCi from "./pages/citizen/viewFIRs";
import newFIR from "./pages/citizen/newFIR";
import firViewer from "./pages/common/FIRviewer";
import submitEvidence from "./pages/common/submitEvidence";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={Theme}>
                <CssBaseline />
                <h1>Policing Platform</h1>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/HomeCi" component={HomeCi}></Route>
                <Route exact path="/viewFIRs" component={viewFIRsCi}></Route>
                <Route exact path="/newFIR" component={newFIR}></Route>
                <Route exact path="/firViewer/:id" component={firViewer}></Route>
                <Route exact path="/submitEvidence" component={submitEvidence}></Route>
            </ThemeProvider>
        </div>
    );
}

export default App;
