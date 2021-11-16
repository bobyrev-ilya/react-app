import React from "react";
import styles from "./Cards.module.css";

let Cards = (props) =>{

    let pagesCount = Math.ceil(props.totalCardsCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p =>
                <span className={props.currentPage === p && styles.selectedPage}
                      onClick={() => {props.onPageChanged(p)}}>{p}</span>)
            }
        </div>
        {
            props.cards.map(c => <div key={c.id}>
                <div>
                    <span>
                        <span>
                            {c.favourited ?
                                <button onClick={() => props.unfavourite(c.id)}>Unfavoured</button> :
                                <button onClick={() => props.favourite(c.id)}>Favoured</button>
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

export default Cards;