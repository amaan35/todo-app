import axios, { AxiosResponse } from "axios";

const baseURL: string = "http://localhost:3001";

export const getTodos = async (): Promise<AxiosResponse<TypeTodo[]>> => {
  try {
    const res: AxiosResponse<TypeTodo[]> = await axios.get(
      baseURL + "/todos"
    );
    return res;
  } catch (error) {
    throw new Error();
  }
};

export const addTodo = async (
  formData: TypeTodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<TypeTodo, "_id"> = {
      name: formData.name,
      desc: formData.desc,
      completed: false,
    };
    const savedTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseURL + "/addTodo",
      todo
    );
    return savedTodo;
  } catch (error) {
    throw new Error();
  }
};

export const updateTodo = async (
  todo: TypeTodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const updateTodo: Pick<TypeTodo, "completed"> = {
      completed: true,
    };
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseURL}/updateTodo/${todo._id}`,
      updateTodo
    );
    return updatedTodo;
  } catch (error) {
    throw new Error();
  }
};

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseURL}/deleteTodo/${_id}`
    );
    return deletedTodo;
  } catch (error) {
    throw new Error();
  }
};
