import { createReducer, on } from '@ngrx/store';
import { changeFilter, reset } from './filter.actions';
import { FilterModel } from './models/filter.model';


export const initialState: FilterModel = { filterTags: [], filterProgress: [] };

export const filterReducer = createReducer(
  initialState,
  on(changeFilter, (state, action) => ({
    ...state,
    filterTags: action.filterTags,
    filterProgress: action.filterStatus
  })),
  on(reset, (state) => ({ ...state, color: '#00bcd4' }))
);
