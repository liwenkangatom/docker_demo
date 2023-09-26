import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree";
import Todo, { ITodoSnapshotIn } from "./Todo";
const TaskStore = types
  .model("Todo", {
    Todo: types.array(Todo),
  })
  .actions((self) => ({
    add(task: ITodoSnapshotIn) {
      self.Todo.push(task);
    },
    remove(taskId: string) {
      const task = self.Todo.find((t) => t.id === taskId);
      if (task) {
        self.Todo.remove(task);
      }
    },
  }));
export default TaskStore;
export interface ITaskStore extends Instance<typeof TaskStore> {}
export interface ITaskStoreSnapshotIn extends SnapshotIn<typeof TaskStore> {}
export interface ITaskStoreSnapshotOut extends SnapshotOut<typeof TaskStore> {}
