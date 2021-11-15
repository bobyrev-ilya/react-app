import React from "react";
import axios from "axios";


let Cards = (props) => {

    /**
     * Запрос на сервер для получения списка кард
     */
    if(props.cards.length == 0){
        axios
            .get("http://localhost:3000")
            .then(response => {
                debugger
                props.setCards(
                    [
                        {id: 1, favourited: false, number: "5656262614848", balance: 45522.62},
                        {id: 2, favourited: false, number: "8996666565655", balance: 42.62},
                        {id: 3, favourited: true, number: "5656262614846", balance: 0.0},
                        {id: 4, favourited: false, number: "5656262614844", balance: 17.5}
                    ]
                )
            });
    }

    return <div>
        {
            props.cards.map(c => <div key={c.id}>
                <div>
                    <span>
                        <span>
                            {c.favourited ?
                                <button onClick={() => props.unfavourite(c.id)}>Unfavoure</button> :
                                <button onClick={() => props.favourite(c.id)}>Favoure</button>
                            }
                        </span>
                        <span>
                            {c.number}
                        </span>
                    </span>
                </div>
                <div>
                    {`Баланс: ${c.balance}`}
                </div>
            </div>)
        }
    </div>
}

export default Cards