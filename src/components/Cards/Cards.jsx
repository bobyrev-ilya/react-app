import React from "react";
import axios from "axios";
import styles from "./Cards.module.css"


class Cards extends React.Component {

    /**
     * Метод генерации постраничного ответа
     */
    generatePagination(currentPage, size) {
        let test = [
            {id: 1, favourited: false, number: "5656262614848", balance: 45522.62},
            {id: 2, favourited: false, number: "8996666565655", balance: 42.62},
            {id: 3, favourited: false, number: "8996666565655", balance: 42.62},
            {id: 4, favourited: true, number: "5656262614846", balance: 0.0},
            {id: 5, favourited: true, number: "5656262614846", balance: 0.0},
            {id: 6, favourited: false, number: "5656262614844", balance: 17.5},
            {id: 7, favourited: false, number: "5656262614844", balance: 17.5}
        ];

        return {
            data: test.slice(size * (currentPage - 1), Math.min(test.length, size * (currentPage - 1) + size)),
            totalCount: test.length
        }
    }


    componentDidMount() {
        axios
            .get("http://localhost:3000")
            .then(() => {
                let resp = this.generatePagination(this.props.currentPage, this.props.pageSize);
                this.props.setCards(resp.data);
                this.props.setCardsCount(resp.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);

        axios
            .get("http://localhost:3000")
            .then(() => {
                this.props.setCards(
                    this.generatePagination(pageNumber, this.props.pageSize).data
                );
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCardsCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p =>
                    <span className={this.props.currentPage === p && styles.selectedPage}
                          onClick={() => {
                              this.onPageChanged(p)
                          }}>{p}</span>)
                }
            </div>
            {
                this.props.cards.map(c => <div key={c.id}>
                    <div>
                    <span>
                        <span>
                            {c.favourited ?
                                <button onClick={() => this.props.unfavourite(c.id)}>Unfavoured</button> :
                                <button onClick={() => this.props.favourite(c.id)}>Favoured</button>
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
}

export default Cards