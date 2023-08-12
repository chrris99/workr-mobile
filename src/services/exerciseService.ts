import {
  CreateExerciseRequest,
  ExerciseResponse,
} from "../models/exercise";
import axios from "axios";

const BASE_URI = "http://localhost:5117/api/exercise";

export const getExerciseById = async (id: string, token: string) => {
  return axios
    .get<ExerciseResponse>(`${BASE_URI}/{id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);
};

export const getExercises = async (token: string) => {
  return axios
    .get<ExerciseResponse[]>(BASE_URI, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);
};

export const createExercise = async (
  exercise: CreateExerciseRequest,
  token: string
) => {
  return axios
    .post<ExerciseResponse>(BASE_URI, exercise, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);
};

export const deleteExercise = async (id: string) => {};
