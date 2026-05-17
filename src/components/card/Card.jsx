import React from "react";
import Star_fill from "../../assets/Star_fill.svg"

import './Card.css'

export default function Card(props){
    
    return(
        <section className="card">
            <div className="imagem"><img src={props.image} alt={props.nome} /></div>
            <div className="nome__price">
                <div className="card__nome">
                    {props.nome}
                </div>
                <div className="card__price">
                    {props.price}
                </div>
            </div>
            <div className="card__footer">
                <img src={Star_fill} alt="" />
                <div className="Rate">
                    <div className="rateval">{props.rate}</div>
                    <div className="vote">({props.vote})</div>
                </div>
            </div>
        </section>
    )
}