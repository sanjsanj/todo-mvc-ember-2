import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    },
    actions: {
        createTodo: function (newTitle) {
            // Create the new Todo model
            var todo = this.store.createRecord('todo', {
                title: newTitle,
                isCompleted: false
            });

            // Clear the "New Todo" text field
            // DELETE THESE LINES!!!
            // this.controllerFor('todos').set('newTitle', '');

            // Save the new model
            todo.save();
        },
        // Other Actions
    }
});
