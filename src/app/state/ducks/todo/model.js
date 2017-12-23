
// This is the model of our module state (e.g. return type of the reducer)
export let State = Todo[];

// Some utility functions that operates on our model
export const filterCompleted = todos => todos.filter(t => t.isComplete);

export const filterActive = todos => todos.filter(t => !t.isComplete);