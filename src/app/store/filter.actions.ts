import { createAction, props } from '@ngrx/store';

export const changeFilter = createAction('[Filter] Change Filter', props<{ filterTags: string[]; filterStatus: string[] }>());
export const reset = createAction('[Filter] Reset');
