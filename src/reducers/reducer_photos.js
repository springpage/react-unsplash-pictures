import { LOAD_IMAGE } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case LOAD_IMAGE:
      return action.payload;
  }
  return state;
}
