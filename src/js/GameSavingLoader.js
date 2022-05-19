import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {

static load() {
  return read()
    .then(() => {
      return json();
    })
    .then((savingObj) => {
    	return new GameSaving(savingObj.id, savingObj.created, savingObj.userInfo);
    });
  }
}