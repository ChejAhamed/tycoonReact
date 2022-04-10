import actionTypes from './actionTypes';
import BoardPlayer from '../../const/Board';

export default function loadPlayers() {
  return async (dispatch) => {
    try {
      const { data } = BoardPlayer.players;

      dispatch({
        type: actionTypes.LOAD_PLAYERS,
        data,

      });
    } catch (error) {
      console.log(error);
    }

    return true;
  };
}
