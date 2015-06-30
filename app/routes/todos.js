import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('todo');
  },
  actions: {
    createTodo: function(newTitle){
      var todo = this.store.createRecord('todo', {
        title: newTitle,
        isCompleted: false
      });
      this.controllerFor('todos').set('newTitle', '');
      todo.save();
    }
  }
});
