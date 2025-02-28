import axios from "axios";
import { Task } from "../interfaces/Task";

export const getListTasks = async () => {
  try {
    const response = await axios.get(
      "https://65f7b579b4f842e80885e0ef.mockapi.io/tasks"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createTask = async (task: Task) => {
  try {
    const response = await axios.post(
      "https://65f7b579b4f842e80885e0ef.mockapi.io/tasks",
      task,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTask = async (task: Task, id: string) => {
  try {
    const response = await axios.put(
      `https://65f7b579b4f842e80885e0ef.mockapi.io/tasks/${id}`,
      task,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (id: string) => {
  try {
    const response = await axios.delete(
      `https://65f7b579b4f842e80885e0ef.mockapi.io/tasks/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
