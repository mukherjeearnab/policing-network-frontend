import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";

class App extends Component {
    state = {
        redirect: "",
        profile: {
            Name: "",
        },
    };

    async componentDidMount() {
        if (!localStorage.getItem("session")) this.setState({ redirect: <Redirect to="/" /> });
        console.log(localStorage.getItem("session"));
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json", "x-access-token": localStorage.getItem("session") },
        };
        let response = await fetch(
            "http://192.168.1.30:3000/api/main/citizen/get/" + localStorage.getItem("user"),
            requestOptions
        );
        let res = await response.json();
        console.log(res);
        this.setState({ profile: res });
    }

    logout = () => {
        localStorage.removeItem("session");
        localStorage.removeItem("user");
        this.setState({ redirect: <Redirect to="/" /> });
    };

    render() {
        return (
            <div>
                <h2>Citizen Dashboard</h2>
                <h2>
                    {this.state.redirect}Welcome, {this.state.profile.Name}!
                </h2>
                <Link to="/">Home</Link> <br />
                <Link to={"/viewProfile/" + this.state.profile.ID}>View Profile</Link> <br />
                <Link to="/viewFIRs">View FIR's</Link> <br />
                <Link to="/newFIR">Add FIR</Link> <br />
                <Link to="/submitEvidence">Add Evidence</Link> <br /> <br />
                <Button m={1} onClick={this.logout} variant="contained" color="primary">
                    Log Out
                </Button>
                <hr />
                <img
                    alt="profile-pic"
                    width="200"
                    src={"https://ipfs.infura.io/ipfs/" + this.state.profile.Photo}
                ></img>
                <h3>{this.state.profile.Name}</h3>
                <h3>Blood Group: {this.state.profile.BloodGroup}</h3>
                <h3>Address: {this.state.profile.Address}</h3>
                <h3>Email: {this.state.profile.Email}</h3>
                <h3>Eye Color: {this.state.profile.EyeColor}</h3>
                <h3>Occupation: {this.state.profile.Occupation}</h3>
            </div>
        );
    }
}

export default App;
