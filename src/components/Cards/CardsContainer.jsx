import React from "react";
import Cards from "./Cards";
import {cancelFavouriteAC, makeFavouriteAC, setCardsAC} from "../../redux/cards-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        cards:state.cardsPage.cards
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
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

export default connect(mapStateToProps, mapDispatchToProps)(Cards)