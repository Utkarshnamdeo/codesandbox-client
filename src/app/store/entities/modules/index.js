// @flow
import { Schema } from 'normalizr';

import reducer, { actions } from './reducer';

const schema = new Schema('modules');

export type Module = {
  id: string,
  name: string;
  code: string;
  sandboxId: string;
  error: ?Error;
};


export default {
  schema,
  reducer,
  actions,
};