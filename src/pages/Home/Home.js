import React from "react";
import Body from "../../components/body/Body";
import Card from "../../components/body/Card/Card";
import Catalogo from "../../components/body/Catalogo/Catalogo";
import Adote from "../../components/body/Adote/Adote";
import Maps from "../../components/Maps/Maps";
import Footer from "../../components/footer/Footer";

export default function Home() {
    return (
        <div>
            <Body />
            <Card />
            <Catalogo />
            <Adote />
            <Maps />
            <Footer />
        </div>
        );
}