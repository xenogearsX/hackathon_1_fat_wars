import React from 'react'
import darkabdou from "../darkabdou.jpg"
import stars  from "../stars.jpg"
import './Credits.css'


const Credits =() =>{


    return (
    <div className="main">
        <div className="wrapper">
            <div className="scrolltext">
                <h1> FAT WARS</h1>
                <h2> CREDITS</h2>
                <p>RACHEL : Stealth Manager "t'es toujours là?... OuAI!""  </p>
                <p>Co-Responsable des forêts de IF, Chef de projet CSS </p>

                <p>CHRISTELLE: Pizza Manager " Scrontch Miam...Burp!"</p>
                <p>Axios assistant  et  responsable du culte de la modification d'API post get</p>

                <p>JEROME: Suppositoire Manager "Il veut absolument nous le mettre!"</p>
                <p>.Includes General in chief et .Filter inception assistant</p>

                <p>YANN: Moral des troupes Manager "Mais il faut pas que tu le prennes comme ça!"</p>
                <p> Responsable des Route et des Link .Filter Assistant</p>

                <p>ALAIN: Blagues Manager " Attendez, vous la connaissez celle du ....."</p>
                <p>Responsable de la forêt d'IF et de la reproduction en captivité des Arrays d'objets</p>

                <p><strong> SPECIAL THANKS </strong></p>
                <p> Wild ABDOUSSSSSS  "On est plusieurs dans ma tête!" </p>
                <p>Commander suprême  des fonctions d' arrays de filter conditionnel asyncrone 
                    et grand gardien de l'indentation</p>

                    <img src={darkabdou}></img>

            </div>
        </div>
    </div>
    )
}
export default Credits