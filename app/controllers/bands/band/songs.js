import Controller from '@ember/controller';
import Song from 'rarwe/models/band';
import { empty } from '@ember/object/computed';


export default Controller.extend({
  isAddingSong: false,
  newSongTitle: '',

  isAddButtonDisabled: empty('newSongName'),

  actions: {
    addSong() {
      this.set('isAddingSong', true);
    },
    cancelAddSong() {
      this.set('isAddingSong', false);
    },
    saveSong(event) {
      event.preventDefault();
      let newSong = Song.create({ name: this.newSongTitle });
      this.model.pushObject(newSong);
      this.set('newSongTitle', '');
    }
  }
});
