import React from "react";
import {favourite, getCards, setCurrentPage, unfavourite} from "../../redux/cards-reducer";
import {connect} from "react-redux";
import Cards from "./Cards";
import Preloader from "../common/Preloader/Preloader";


/**
 * Классовая компонета
 */
class CardsContainer extends React.Component {

    componentDidMount() {
        this.props.getCards(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getCards(pageNumber, this.props.pageSize)
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
    getCards,
    setCurrentPage
}


export default connect(mapStateToProps, dispatch)(CardsContainer)