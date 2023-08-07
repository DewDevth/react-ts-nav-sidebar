import axios, { AxiosError } from "axios";
import { User } from "../models/User";

const API_BASE_URL = "http://localhost:3000";

export async function getUsers(): Promise<User[]> {
  try {
    const response = await axios.get<User[]>(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError && axiosError.isAxiosError) {
      throw new Error("Error fetching users: " + axiosError.message);
    } else if (error instanceof Error) {
      throw new Error("Error fetching users: " + error.message);
    } else {
      throw new Error("Unknown error fetching users");
    }
  }
}
