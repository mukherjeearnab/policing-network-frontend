import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { TextField, Button, CircularProgress } from "@material-ui/core";

class App extends Component {
    state = {
        chargesheet: {
            Name: "",
            DespatchDate: "",
        },
        message: "",
    };

    onAddFIR = async () => {
        let chargesheet = this.state.chargesheet;
        chargesheet.DespatchDate = new Date(this.state.chargesheet.DespatchDate).getTime().toString();
        this.setState({ chargesheet });
        console.log(this.state.chargesheet);
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-access-token": localStorage.getItem("session") },
            body: JSON.stringify({
                payload: JSON.stringify(this.state.chargesheet),
            }),
        };

        this.setState({
            message: (
                <span>
                    <CircularProgress />
                    <br></br> Loading.....
                </span>
            ),
        });

        let response = await fetch("http://192.168.1.30:3000/api/main/chargesheet/add", requestOptions);
        let res = await response.json();
        console.log(res);
        this.setState({ message: <Redirect to={"/viewChargeSheet/" + res.id} /> });
    };

    render() {
        return (
            <div>
                <h2>New Charge Sheet</h2>
                {this.state.message}
                <TextField
                    className="inputs"
                    label="FIR ID"
                    variant="outlined"
                    value={this.state.chargesheet.Name}
                    onChange={(event) => {
                        let chargesheet = this.state.chargesheet;
                        chargesheet.Name = event.target.value;
                        this.setState({
                            chargesheet,
                        });
                    }}
                />
                <TextField
                    type="date"
                    className="inputs"
                    label="Investigating DespatchDate"
                    variant="outlined"
                    value={this.state.chargesheet.DespatchDate}
                    onChange={(event) => {
                        let chargesheet = this.state.chargesheet;
                        chargesheet.DespatchDate = event.target.value;
                        this.setState({
                            chargesheet,
                        });
                    }}
                />

                <Button onClick={this.onAddInvestigation} variant="contained" color="primary">
                    Init. Charge Sheet
                </Button>
            </div>
        );
    }
}

export default App;