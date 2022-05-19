import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {

static load() {
  return read()
    .then((data) => {
      return json(data);
    })
    .then((str) => {
      const savingObj = JSON.parse(str);
    	return new GameSaving(savingObj.id, savingObj.created, savingObj.userInfo);
    });
  }
}