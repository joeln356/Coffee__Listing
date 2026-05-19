import React from "react";
import { useState } from "react";
import Star_fill from "../../assets/Star_fill.svg"
import Popular from "./Popular";
import Souldout from "./soldout";

import './Card.css'

export default function Card(props){

    const [popular, setpopular] = useState();

    return(
        <section className="card">
            <div className="imagem"><img src={props.image} alt={props.nome} />
            {
            props.popular && (<Popular className='popular'/>)
            }
            </div>
            <div className="nome__price">
                <div className="card__nome">
                    {props.nome}
                </div>
                <div className="card__price">
                    {props.price}
                </div>
            </div>
            <div className="footer">
                <div className="card__footer">
                    <img src={Star_fill} alt="" />
                    <div className="Rate">
                        <div className="rateval">{props.rate}</div>
                        {props.vote?<div className="vote">({props.vote})</div>: <div className="vote">No ratings</div>}
                    </div>
                </div>
                {
                    !props.available && (<Souldout/>)
                }
                
            </div>
        </section>
    )
}