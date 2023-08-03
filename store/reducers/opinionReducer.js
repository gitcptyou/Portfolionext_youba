import apiRequest from "../axios/api";

//1- Les actions (qui modifient le store)

const ADD_Opinion = 'ADD_opinion'
const LIST_Opinion = 'LIST_Opinion'
const CURRENT_Opinion = 'CURRENT_Opinion'

//2-1 Createurs d'actions classiques (retournent un objet)


export const addOpinion = (opinion) => ({ type: ADD_Opinion, payload: opinion })
export const getAllOpinion = (opinions) => ({ type: LIST_Opinion, payload: opinions })
export const getOpinion = id => ({ type: CURRENT_Opinion, payload: {id} })

// Le reducteur pour les etudiants

// --Definir l'etat initial pour l'objet global pour les etudiants

const initialState = {
    opinions: [],
    opinion: {}
}

export const opinionReducer=(state = initialState, action)=>{
    const { type, payload } = action

    switch (type) {
        case LIST_Opinion:
            return { ...state, opinions:action.payload }
        case CURRENT_Opinion:
            return { ...state, opinion: state.opinions.find(opinion => opinion.id === payload.id) }

        case ADD_Opinion:
            return { ...state, opinions: [...state.opinions,action.payload] }

       
        default:
            return state
    }


}
