import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

class GameSavingLoader {
  constructor() {

  }

  static load() {
  	read()
  	  .then(json())
  	  .then((savingObj) => {
  	  	return new Promise((resolve) => {
  	  	  resolve(new GameSaving(savingObj.id, savingObj.created, savingObj.userInfo));
  	  });
  	})
  }
}
