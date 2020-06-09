import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Theme from "./Theme";
import "./App.css";

import { Route, Link } from "react-router-dom";
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
import newInvestigation from "./pages/police/addInvestigation";
import viewInvestigation from "./pages/police/viewInvestigation";
import updateInvestigation from "./pages/police/updateInvestigation";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={Theme}>
                <CssBaseline />
                <Link to="/">
                    <h1>Policing Platform</h1>
                </Link>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/HomeCi" component={HomeCi}></Route>
                <Route exact path="/HomePo" component={HomePo}></Route>
                <Route exact path="/HomeFo" component={HomeFo}></Route>
                <Route exact path="/HomeCo" component={HomeCo}></Route>
                <Route exact path="/HomeId" component={HomeId}></Route>
                <Route exact path="/viewFIRs" component={viewFIRsCi}></Route>
                <Route exact path="/newFIR" component={newFIR}></Route>
                <Route exact path="/firViewer/:id" component={firViewer}></Route>
                <Route exact path="/submitEvidence" component={submitEvidence}></Route>
                <Route exact path="/newInvestigation" component={newInvestigation}></Route>
                <Route exact path="/viewInvestigation" component={viewInvestigation}></Route>
                <Route exact path="/updateInvestigation/:id" component={updateInvestigation}></Route>
            </ThemeProvider>
        </div>
    );
}

export default App;
