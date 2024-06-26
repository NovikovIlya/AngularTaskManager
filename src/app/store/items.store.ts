import {
  getState,
  patchState,
  signalStore,
  withMethods,
  withState,
} from '@ngrx/signals';
import { ProductsService } from '../services/products.service';
import { inject } from '@angular/core';
import { dataType, init } from '../../types';


const initialState: init = {
  books: [],
  isLoading: false,
  filter: '1',
};

export const BooksStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, productsService = inject(ProductsService)) => ({
    updateQuery(name: string): void {
      patchState(store, (state) => ({
        ...state,
        filter: name,
      }));
    },
    setData(books: dataType[]) {
      patchState(store, (state) => ({ ...state, books: books }));
    },
    deleteData(id: number) {
      const state = getState(store);
      const filterBook = state.books.filter((item: dataType) => item.id !== id);
      patchState(store, (state) => ({ ...state, books: filterBook }));
    },
  }))
);
