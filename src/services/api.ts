import type { Photographer, Photographers } from '../components/Common/data';
import { initialPhotographers } from '../components/Common/data';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

type DispatchFunction = (action: any) => void;

export const api = {
  async getPhotographers(dispatch?: DispatchFunction): Promise<Photographers> {
    await delay(1000);
    const photographers = initialPhotographers;
    if (dispatch) {
      dispatch({ type: 'SET_PHOTOGRAPHERS', photographers });
    }
    return photographers;
  },

  async addPhotographer(photographer: Photographer, dispatch?: DispatchFunction): Promise<{ id: string }> {
    await delay(800);
    const id = `P${Date.now()}`;
    if (dispatch) {
      dispatch({ type: 'ADD_PHOTOGRAPHER', id, photographer });
    }
    return { id };
  },

  async updatePhotographer(id: string, photographer: Photographer, dispatch?: DispatchFunction): Promise<void> {
    await delay(600);
    if (dispatch) {
      dispatch({ type: 'UPDATE_PHOTOGRAPHER', id, photographer });
    }
  },

  async deletePhotographer(id: string, dispatch?: DispatchFunction): Promise<void> {
    await delay(500);
    if (dispatch) {
      dispatch({ type: 'DELETE_PHOTOGRAPHER', id });
    }
  }
};