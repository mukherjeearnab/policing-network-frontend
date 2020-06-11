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
import addArrest from "./pages/police/addArrest";
import addiReport from "./pages/police/addiReport";
import viewEvidence from "./pages/common/evidenceViewer";
import newCitizen from "./pages/identityprovider/createCitizenProfile";
import updateCitizen from "./pages/identityprovider/updateCitizenProfile";

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
                <Route exact path="/viewInvestigation/:id" component={viewInvestigation}></Route>
                <Route exact path="/updateInvestigation/:id" component={updateInvestigation}></Route>
                <Route exact path="/addArrest/:id" component={addArrest}></Route>
                <Route exact path="/addiReport/:id" component={addiReport}></Route>
                <Route exact path="/evidenceViewer" component={viewEvidence}></Route>
                <Route exact path="/newCitizen" component={newCitizen}></Route>
                <Route exact path="/updateCitizen" component={updateCitizen}></Route>
            </ThemeProvider>
        </div>
    );
}

export default App;
