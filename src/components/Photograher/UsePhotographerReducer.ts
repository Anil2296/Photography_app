import { useReducer } from "react";
import type { Photographer, Photographers } from '../Common/data';

export type State = {
    photographers: Photographers;
    showDialog: boolean;
    formData: Photographer;
    editingId: string | null;
    errors: { [key: string]: string };
    loading: boolean;
};

export type Action = 
    | { type: 'OPEN_ADD_DIALOG' }
    | { type: 'OPEN_EDIT_DIALOG'; id: string; photographer: Photographer }
    | { type: 'CLOSE_DIALOG' }
    | { type: 'UPDATE_FORM'; formData: Photographer }
    | { type: 'ADD_PHOTOGRAPHER'; id: string; photographer: Photographer }
    | { type: 'UPDATE_PHOTOGRAPHER'; id: string; photographer: Photographer }
    | { type: 'DELETE_PHOTOGRAPHER'; id: string }
    | { type: 'SET_ERRORS'; errors: { [key: string]: string } }
    | { type: 'SET_LOADING'; loading: boolean }
    | { type: 'SET_PHOTOGRAPHERS'; photographers: Photographers };

const emptyForm: Photographer = { name: "", level: "", email: "", phone: "" };

const initialState: State = {
    photographers: {},
    showDialog: false,
    formData: emptyForm,
    editingId: null,
    errors: {},
    loading: false
};

function photographerReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'OPEN_ADD_DIALOG':
            return { ...state, showDialog: true, formData: emptyForm, editingId: null, errors: {} };
        case 'OPEN_EDIT_DIALOG':
            return { ...state, showDialog: true, formData: action.photographer, editingId: action.id, errors: {} };
        case 'CLOSE_DIALOG':
            return { ...state, showDialog: false, formData: emptyForm, editingId: null, errors: {} };
        case 'UPDATE_FORM':
            return { ...state, formData: action.formData };
        case 'SET_ERRORS':
            return { ...state, errors: action.errors };
        case 'ADD_PHOTOGRAPHER':
            return { ...state, photographers: { ...state.photographers, [action.id]: action.photographer }, showDialog: false, formData: emptyForm, errors: {} };
        case 'UPDATE_PHOTOGRAPHER':
            return { ...state, photographers: { ...state.photographers, [action.id]: action.photographer }, showDialog: false, formData: emptyForm, editingId: null, errors: {} };
        case 'DELETE_PHOTOGRAPHER':
            const { [action.id]: deleted, ...remaining } = state.photographers;
            return { ...state, photographers: remaining };
        case 'SET_LOADING':
            return { ...state, loading: action.loading };
        case 'SET_PHOTOGRAPHERS':
            return { ...state, photographers: action.photographers };
        default:
            return state;
    }
}

export function usePhotographerReducer() {
    const [state, dispatch] = useReducer(photographerReducer, initialState);
    return { state, dispatch };
}