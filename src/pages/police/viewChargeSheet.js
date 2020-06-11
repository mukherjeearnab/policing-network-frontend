import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { Table, TableBody, TableContainer, TableHead, TableCell, TableRow } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { TextField, Button, CircularProgress } from "@material-ui/core";

class App extends Component {
    state = {
        chargesheet: {},
        message: "",
        ID: "",
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        if (id !== "0") {
            this.setState({
                ID: id,
                message: (
                    <p>
                        Press <b>LOAD INVESTIGATION</b> to View Investigation
                    </p>
                ),
            });
        }
    }

    onLoadInvestigation = async () => {
        console.log(this.state.chargesheet);
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json", "x-access-token": localStorage.getItem("session") },
        };

        this.setState({
            message: (
                <span>
                    <CircularProgress />
                    <br></br> Loading.....
                </span>
            ),
        });

        let response = await fetch(
            "http://192.168.1.30:3000/api/main/chargesheet/read/" + this.state.ID,
            requestOptions
        );
        let res = await response.json();
        console.log(res);

        this.setState({ chargesheet: res });

        var output = (
            <div>
                <Link to={"/addFIRIDs/" + this.state.chargesheet.ID}>Add FIR IDs</Link>
                <br />
                <Link to={"/addSectionOfLaw/" + this.state.chargesheet.ID}>Add Section of Law</Link>
                <br />
                <Link to={"/addInvestigatingOfficer/" + this.state.chargesheet.ID}>Add Investigating Officer</Link>
                <br />
                <Link to={"/addInvestigationID/" + this.state.chargesheet.ID}>Add Investigation ID</Link>
                <br />
                <Link to={"/addAccusedPerson/" + this.state.chargesheet.ID}>Add Accused Person</Link>
                <br />
                <Link to={"/addBriefReport/" + this.state.chargesheet.ID}>Add Brief Report</Link>
                <br />
                <Link to={"/addChargedPerson/" + this.state.chargesheet.ID}>Add Charged Person</Link>
                <br />
                {this.createContent()}
            </div>
        );

        this.setState({ message: output });
    };

    createContent = () => {
        let accusedPersons, briefReports, chargedPersons;

        if (this.state.chargesheet.AccusedPersons) {
            accusedPersons = (
                <div>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">
                                        <b>Citizen ID</b>
                                    </TableCell>
                                    <TableCell align="left">
                                        <b>Status</b>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.chargesheet.AccusedPersons.map((content, index) => {
                                    return (
                                        <TableRow key={content.CitizenID}>
                                            <TableCell align="left">{content.CitizenID}</TableCell>
                                            <TableCell align="left">{content.Status}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            );
        }

        if (this.state.chargesheet.BriefReports) {
            briefReports = (
                <div>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">
                                        <b>Serial</b>
                                    </TableCell>
                                    <TableCell align="left">
                                        <b>Report Content</b>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.chargesheet.BriefReports.map((content, index) => {
                                    return (
                                        <TableRow key={new Date()}>
                                            <TableCell align="left">{index + 1}</TableCell>
                                            <TableCell align="left">{content.Content}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            );
        }

        if (this.state.chargesheet.ChargedPersons) {
            chargedPersons = (
                <div>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">
                                        <b>Citizen ID</b>
                                    </TableCell>
                                    <TableCell align="left">
                                        <b>Section Of Laws</b>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.chargesheet.ChargedPersons.map((content, index) => {
                                    return (
                                        <TableRow key={content.CitizenID}>
                                            <TableCell align="left">{content.CitizenID}</TableCell>
                                            <TableCell align="left">
                                                {() => {
                                                    let str = "";
                                                    for (var a = 0; a < content.SectionOfLaws.length; a++)
                                                        str += str + "; " + content.SectionOfLaws[a];
                                                    return str;
                                                }}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            );
        }

        return (
            <div>
                <h3>Charge Sheet ID: {this.state.chargesheet.ID}</h3>
                <h3>Title: {this.state.chargesheet.Name}</h3>
                <h3>
                    FIR IDs:{" "}
                    {() => {
                        let str = "";
                        for (var a = 0; a < this.state.chargesheet.FIRIDs.length; a++)
                            str += str + "; " + this.state.chargesheet.FIRIDs[a];
                        return str;
                    }}
                </h3>
                <h3>Date: {() => new Date(this.state.chargesheet.DateTime).toString()}</h3>
                <h3>
                    Section Of Laws:{" "}
                    {() => {
                        let str = "";
                        for (var a = 0; a < this.state.chargesheet.SectionOfLaws.length; a++)
                            str += str + "; " + this.state.chargesheet.SectionOfLaws[a];
                        return str;
                    }}
                </h3>
                <h3>
                    Investigating Officers:{" "}
                    {() => {
                        let str = "";
                        for (var a = 0; a < this.state.chargesheet.InvestigatingOfficers.length; a++)
                            str += str + "; " + this.state.chargesheet.InvestigatingOfficers[a];
                        return str;
                    }}
                </h3>
                <h3>
                    Investigation IDs:{" "}
                    {() => {
                        let str = "";
                        for (var a = 0; a < this.state.chargesheet.InvestigatingOfficers.length; a++)
                            str += str + "; " + this.state.chargesheet.InvestigatingOfficers[a];
                        return str;
                    }}
                </h3>

                <h2>Accused Persons</h2>
                {accusedPersons}
                <h2>Brief Reports</h2>
                {briefReports}
                <h2>Charged Persons</h2>
                {chargedPersons}
            </div>
        );
    };

    render() {
        return (
            <div>
                <h2>New Investigation</h2>
                <TextField
                    className="inputs"
                    label="Charge Sheet ID"
                    variant="outlined"
                    value={this.state.ID}
                    onChange={(event) => {
                        this.setState({
                            ID: event.target.value,
                        });
                    }}
                />
                <br /> <br />
                <Button onClick={this.onLoadInvestigation} variant="contained" color="primary">
                    Load Charge Sheet
                </Button>
                <br /> <br />
                {this.state.message}
            </div>
        );
    }
}

export default App;
