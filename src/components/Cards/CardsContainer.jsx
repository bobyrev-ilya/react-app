import React from "react";
import {
    favourite,
    unfavourite,
    setCards,
    setCurrentPage,
    setCardsCount,
    toggleIsFetching
} from "../../redux/cards-reducer";
import {connect} from "react-redux";
import axios from "axios";
import Cards from "./Cards";
import Preloader from "../common/Preloader/Preloader";

/**
 * Классовая компонета для вызова API
 */
class CardsContainer extends React.Component {

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
        this.props.toggleIsFetching(true);

        /**
         * Таймаут для эмуляции медленной работы
         */
        setTimeout(() => {
            axios
                .get("http://localhost:3000")
                .then(() => {
                    let resp = this.generatePagination(this.props.currentPage, this.props.pageSize);
                    this.props.toggleIsFetching(false);
                    this.props.setCards(resp.data);
                    this.props.setCardsCount(resp.totalCount);
                });
        }, 2000);
    }

    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        setTimeout(() => {
            axios
                .get("http://localhost:3000")
                .then(() => {
                    this.props.setCards(this.generatePagination(pageNumber, this.props.pageSize).data);
                    this.props.toggleIsFetching(false);
                });
        }, 2000);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Cards totalCardsCount={this.props.totalCardsCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   cards={this.props.cards}
                   onPageChanged={this.onPageChanged}
                   favourite={this.props.favourite}
                   unfavourite={this.props.unfavourite}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        cards: state.cardsPage.cards,
        pageSize: state.cardsPage.pageSize,
        totalCardsCount: state.cardsPage.totalCardsCount,
        currentPage: state.cardsPage.currentPage,
        isFetching: state.cardsPage.isFetching
    }
}

/**
 * В dispatch кладем action-creator'ы
 * let name = 5
 * {                       {
 *     name: name ===>        name
 * }                        }
 */

let dispatch = {
    favourite,
    unfavourite,
    setCards,
    setCurrentPage,
    setCardsCount,
    toggleIsFetching
}

export default connect(mapStateToProps, dispatch)(CardsContainer)