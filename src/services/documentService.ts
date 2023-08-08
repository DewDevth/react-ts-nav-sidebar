import axios, { AxiosError } from "axios";
import { Document } from "../models/Document";

const API_BASE_URL = "http://localhost:3000";

export async function getDocuments(): Promise<Document[]> {
  try {
    const response = await axios.get<Document[]>(`${API_BASE_URL}/documents`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError && axiosError.isAxiosError) {
      throw new Error("Error fetching Documents: " + axiosError.message);
    } else if (error instanceof Error) {
      throw new Error("Error fetching Documents: " + error.message);
    } else {
      throw new Error("Unknown error fetching Documents");
    }
  }
}



export async function updateDocumentIsRead(
  documentId: string,
  isRead: boolean
): Promise<void> {
  try {
    await axios.patch(`${API_BASE_URL}/documents/${documentId}`, {
      IsRead: isRead,
    });
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError && axiosError.isAxiosError) {
      throw new Error("Error updating IsRead: " + axiosError.message);
    } else if (error instanceof Error) {
      throw new Error("Error updating IsRead: " + error.message);
    } else {
      throw new Error("Unknown error updating IsRead");
    }
  }
}
