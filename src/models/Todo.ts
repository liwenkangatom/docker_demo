import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree'
const Todo = types.model('Todo', {
   details: types.string,
   is_done: false,
   id: types.string,
}).actions(self =>({
        markDone(){
             self.is_done = true;
    }
})).views(self =>({
        status(){
             return self.is_done ? "Done" : "Not Done"
               }
}));

export default Todo;
export interface ITodo extends Instance<typeof Todo> {} 
export interface ITodoSnapshotIn extends SnapshotIn<typeof Todo> {}
export interface ITodoSnapshotOut extends SnapshotOut<typeof Todo> {} 