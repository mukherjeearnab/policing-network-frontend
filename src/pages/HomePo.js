import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";

class App extends Component {
    state = { redirect: "" };

    logout = () => {
        localStorage.removeItem("session");
        localStorage.removeItem("user");
        this.setState({ redirect: <Redirect to="/" /> });
    };

    render() {
        return (
            <div>
                <h2>Police Dashboard</h2>
                <h2>
                    {this.state.redirect}Welcome, {localStorage.getItem("user")}!
                </h2>
                <Link to="/viewProfile/0">Check Citizen Profile</Link> <br />
                <Link to="/viewFIRs">View FIR's</Link> <br />
                <Link to="/newInvestigation">Start Investigation</Link> <br />
                <Link to="/viewInvestigation/0">View / Add Content to Investigation</Link> <br />
                <Link to="/submitEvidence">Add Evidence</Link> <br />
                <Link to="/newChargesheet">File New ChargeSheet</Link> <br />
                <Link to="/viewChargeSheet/0">View / Add Content to Chargesheet</Link> <br />
                <Button m={1} onClick={this.logout} variant="contained" color="primary">
                    Log Out
                </Button>
            </div>
        );
    }
}

export default App;
