import React from "react";
import {
    cancelFavouriteAC,
    makeFavouriteAC,
    setCardsAC,
    setCurrentPageAC,
    setTotalCardsCountAC
} from "../../redux/cards-reducer";
import {connect} from "react-redux";
import CardsC from "./Cards";

let mapStateToProps = (state) => {
    return {
        cards: state.cardsPage.cards,
        pageSize: state.cardsPage.pageSize,
        totalCardsCount: state.cardsPage.totalCardsCount,
        currentPage: state.cardsPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        favourite: (cardId) => {
            dispatch(makeFavouriteAC(cardId));
        },
        unfavourite: (cardId) => {
            dispatch(cancelFavouriteAC(cardId));
        },
        setCards: (cards) => {
            dispatch(setCardsAC(cards));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setCardsCount: (totalCount) => {
            dispatch(setTotalCardsCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsC)