import type { Photographer, Photographers } from '../components/Common/data';
import { initialPhotographers } from '../components/Common/data';
import { setPhotographers, addPhotographer, updatePhotographer, deletePhotographer } from '../store/photographerSlice';
import type { AppDispatch } from '../store/store';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  async getPhotographers(dispatch?: AppDispatch): Promise<Photographers> {
    await delay(1000);
    const photographers = initialPhotographers;
    if (dispatch) {
      dispatch(setPhotographers(photographers));
    }
    return photographers;
  },

  async addPhotographer(photographer: Photographer, dispatch?: AppDispatch): Promise<{ id: string }> {
    await delay(800);
    const id = `P${Date.now()}`;
    if (dispatch) {
      dispatch(addPhotographer({ id, photographer }));
    }
    return { id };
  },

  async updatePhotographer(id: string, photographer: Photographer, dispatch?: AppDispatch): Promise<void> {
    await delay(600);
    if (dispatch) {
      dispatch(updatePhotographer({ id, photographer }));
    }
  },

  async deletePhotographer(id: string, dispatch?: AppDispatch): Promise<void> {
    await delay(500);
    if (dispatch) {
      dispatch(deletePhotographer({ id }));
    }
  }
};