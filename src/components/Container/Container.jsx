import React from "react";
import Button from "../Button/Button";
import Card from "../card/Card";

import './Container.css'

export default function Container(){
    fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")

    return(
        <div className="container">
            <section className="section__1">
                <h1 className="Title">
                    Our Collection
                </h1>
                <p className="subtext">
                    Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                </p>
                <div className="buttons">
                    <Button text='All Products'/>
                    <Button text='Available Now'/>
                </div>
            </section>
            <section className="cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </div>
    )
}