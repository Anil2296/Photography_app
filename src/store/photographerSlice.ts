import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Photographer, Photographers } from '../components/Common/data';

interface PhotographerState {
  photographers: Photographers;
  showDialog: boolean;
  formData: Photographer;
  editingId: string | null;
  errors: { [key: string]: string };
  loading: boolean;
}

const emptyForm: Photographer = { name: "", level: "", email: "", phone: "" };

const initialState: PhotographerState = {
  photographers: {},
  showDialog: false,
  formData: emptyForm,
  editingId: null,
  errors: {},
  loading: false
};

const photographerSlice = createSlice({
  name: 'photographer',
  initialState,
  reducers: {
    openAddDialog: (state) => {
      state.showDialog = true;
      state.formData = emptyForm;
      state.editingId = null;
      state.errors = {};
    },
    openEditDialog: (state, action: PayloadAction<{ id: string; photographer: Photographer }>) => {
      state.showDialog = true;
      state.formData = action.payload.photographer;
      state.editingId = action.payload.id;
      state.errors = {};
    },
    closeDialog: (state) => {
      state.showDialog = false;
      state.formData = emptyForm;
      state.editingId = null;
      state.errors = {};
    },
    updateForm: (state, action: PayloadAction<Photographer>) => {
      state.formData = action.payload;
    },
    setErrors: (state, action: PayloadAction<{ [key: string]: string }>) => {
      state.errors = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setPhotographers: (state, action: PayloadAction<Photographers>) => {
      state.photographers = action.payload;
    },
    addPhotographer: (state, action: PayloadAction<{ id: string; photographer: Photographer }>) => {
      state.photographers[action.payload.id] = action.payload.photographer;
      state.showDialog = false;
      state.formData = emptyForm;
      state.errors = {};
    },
    updatePhotographer: (state, action: PayloadAction<{ id: string; photographer: Photographer }>) => {
      state.photographers[action.payload.id] = action.payload.photographer;
      state.showDialog = false;
      state.formData = emptyForm;
      state.editingId = null;
      state.errors = {};
    },
    deletePhotographer: (state, action: PayloadAction<{ id: string }>) => {
      delete state.photographers[action.payload.id];
    }
  }
});

export const {
  openAddDialog,
  openEditDialog,
  closeDialog,
  updateForm,
  setErrors,
  setLoading,
  setPhotographers,
  addPhotographer,
  updatePhotographer,
  deletePhotographer
} = photographerSlice.actions;

export default photographerSlice.reducer;