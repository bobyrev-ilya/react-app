const FAVOURITE = 'FAVOURITE';
const UNFAVOURITE = 'UNFAVOURITE';
const SET_CARDS = 'SET_CARDS';


let initialState = {
    cards: []
}


export const cardsReducer = (state = initialState, action) => {

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

        default:
            return state;
    }
};


export const makeFavouriteAC = (cardId) => ({type: FAVOURITE, cardId})

export const cancelFavouriteAC = (cardId) => ({type: UNFAVOURITE, cardId})

export const setCardsAC = (cards) => ({type: SET_CARDS, cards})
