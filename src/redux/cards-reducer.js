const FAVOURITE = 'FAVOURITE';
const UNFAVOURITE = 'UNFAVOURITE';
const SET_CARDS = 'SET_CARDS';
const SET_CUR_PAGE = 'SET_CUR_PAGE';
const SET_TOTAL_CARDS = 'SET_TOTAL_CARDS';


let initialState = {
    cards: [],
    pageSize: 3,
    totalCardsCount: 0,
    currentPage: 1
}


export const cardsReducer = (state = initialState, action) => {
    debugger

    switch (action.type) {

        case FAVOURITE:
            return {
                ...state,
                cards: state.cards.map(c => {
                    if (c.id === action.cardId) {
                        return {...c, favourited: true};
                    }
                    return c;
                })
            }

        case UNFAVOURITE:
            return {
                ...state,
                cards: state.cards.map(c => {
                    if (c.id === action.cardId) {
                        return {...c, favourited: false};
                    }
                    return c;
                })
            }
        case SET_CARDS:
            return {
                ...state,
                cards: action.cards
            }
        case SET_CUR_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_CARDS:
            return {
                ...state,
                totalCardsCount: action.totalCardsCount
            }

        default:
            return state;
    }

};


export const makeFavouriteAC = (cardId) => ({type: FAVOURITE, cardId})

export const cancelFavouriteAC = (cardId) => ({type: UNFAVOURITE, cardId})

export const setCardsAC = (cards) => ({type: SET_CARDS, cards})

export const setCurrentPageAC = (currentPage) => ({type: SET_CUR_PAGE, currentPage})

export const setTotalCardsCountAC = (totalCardsCount) => ({type: SET_TOTAL_CARDS, totalCardsCount})
