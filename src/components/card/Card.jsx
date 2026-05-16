import React from "react";
import Star_fill from "../../assets/Star_fill.svg"

import './Card.css'

export default function Card(){
    return(
        <section className="card">
            <div className="imagem"><img src="" alt="" /></div>
            <div className="nome__price">
                <div className="card__nome">
                    Nome
                </div>
                <div className="card__price">
                    $5.20
                </div>
            </div>
            <div className="card__footer">
                <img src={Star_fill} alt="" />
                <div className="Rate">
                    <div className="rateval">4.7</div>
                    <div className="vote">(65 vote)</div>
                </div>
            </div>
        </section>
    )
}