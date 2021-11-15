import React from "react";
import {cancelFavouriteAC, makeFavouriteAC, setCardsAC} from "../../redux/cards-reducer";
import {connect} from "react-redux";
import CardsC from "./Cards";

let mapStateToProps = (state) => {
    return {
        cards: state.cardsPage.cards
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsC)