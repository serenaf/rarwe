import DS from 'ember-data'

const { Model, attr, hasMany } = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  songs: hasMany(), // No need to pass 'song', it's inferred from the key name
});
