import {generatePagination} from "../components/api/cards/card_api";
import {api} from "../components/api/api";

const FAVOURITE = 'FAVOURITE';
const UNFAVOURITE = 'UNFAVOURITE';
const SET_CARDS = 'SET_CARDS';
const SET_CUR_PAGE = 'SET_CUR_PAGE';
const SET_TOTAL_CARDS = 'SET_TOTAL_CARDS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    cards: [],
    pageSize: 3,
    totalCardsCount: 0,
    currentPage: 1,
    isFetching: false
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }

};


export const favourite = (cardId) => ({type: FAVOURITE, cardId})

export const unfavourite = (cardId) => ({type: UNFAVOURITE, cardId})

export const setCards = (cards) => ({type: SET_CARDS, cards})

export const setCurrentPage = (currentPage) => ({type: SET_CUR_PAGE, currentPage})

export const setCardsCount = (totalCardsCount) => ({type: SET_TOTAL_CARDS, totalCardsCount})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

/**
 * getCardsThunkCreator используется для замыкания внутреннего thunk и передачи входных параметров
 */
export const getCards = (currentPage, pageSize) =>{

    /**
     *
     * @return thunk
     * используется для диспатча action и доступа к DAL (data access layer) = API
     * ассинхронная работа + dispatch
     */
    return (dispatch) => {

        dispatch(toggleIsFetching(true));

        /**
         * Таймаут для эмуляции медленной работы
         */
        setTimeout(() => {
            api.getCardsList().then(() => {
                let resp = generatePagination(currentPage, pageSize);
                dispatch(toggleIsFetching(false));
                dispatch(setCards(resp.data));
                dispatch(setCardsCount(resp.totalCount));
            });
        }, 2000);
    }
}
