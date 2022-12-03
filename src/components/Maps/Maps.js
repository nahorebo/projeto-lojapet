import React from "react";
import "./styles.css";
import Iframe from "react-iframe";

function Maps() {
    return (
        <div className="GoogleMaps">
            GOOGLE MAPS API
            <Iframe url=
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4354627447483!2d-46.796709385171944!3d-23.62457118465152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce548d0f3db457%3A0x72c1e5b9a50a1494!2sR.%20Caroba%2C%20779%20-%20Jardim%20Record%2C%20Tabo%C3%A3o%20da%20Serra%20-%20SP%2C%2006784-540!5e0!3m2!1ses-419!2sbr!4v1670030032788!5m2!1ses-419!2sbr"
                width="640px"
                height="320px"
                id=""
                className=""
                display="block"
                position="relative" />

        </div>
    )
}
export default Maps;