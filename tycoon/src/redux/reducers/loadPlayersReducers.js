/* eslint-disable default-param-last */
import actionTypes from '../actions/actionTypes';

export default function loadPlayersReducer(
  players = [],
  action,
) {
  let nextplayersState = players;

  switch (action.type) {
    case actionTypes.LOAD_PLAYERS:
      nextplayersState = action.data;
      break;

    default:
      break;
  }

  return nextplayersState;
}
