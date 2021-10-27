import TextBox from './TextBox'
import React, { useState, useEffect } from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import axios from 'axios';

function Route() {

    const [startLat, setStartLat] = useState(0);
    const [startLng, setStartLng] = useState(0);
    const [endLat, setEndLat] = useState(0);
    const [endLng, setEndLng] = useState(0);

    const onSubmit = () => {
        alert("The coordinates you submitted are: (" + startLat + ", " + startLng + "), (" + endLat + ", " + endLng + ")");
        requestRoute();
    }

    //TODO: Fill in the ? with appropriate names/values for a route.
    //Hint: The defaults for latitudes and longitudes were 0s. What might the default useState value for a route be?
    const [route, setRoute] = useState([0,0,0,0]);

    /**
     * Makes an axios request.
     */
    const requestRoute = () => {
        const toSend = {
            //TODO: Pass in the values for the data. Follow the format the route expects!
            srclat: startLat,
            srclong: startLng,
            destlat: endLat,
            destlong: endLng
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import this!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post('https://localhost:4567/route', toSend, config)
            .then(response => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what variable you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setRoute(response.data["route"]);
            })

            .catch(function (error) {
                console.log(error);

            });
    }



    return (
        <div className="Route">
            <header className="App-header">
                <h1>
                    This is just some frront end stuff for react lab
                </h1>
                <TextBox label={"Some stuff1"} change={setStartLat} />
                <TextBox label={"Some stuff2"} change={setStartLng} />
                <TextBox label={"Some stuff3"} change={setEndLat} />
                <TextBox label={"Some stuff4"} change={setEndLng} />
                <AwesomeButton type="primary" onPress={requestRoute}>Submit</AwesomeButton>
                <p>The route is: {route}</p>            
            </header>

        </div>
    );
}

export default Route;