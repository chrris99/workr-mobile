import { API_BASE_URI } from "@env";
import { Exercise } from "../models/exercise";

export const getExerciseById = async (id: string) => {};

export const getExercises = async (token: string) => {
  const res = fetch(`${API_BASE_URI}/exercise`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  })

  return res;
};

export const createExercise = async (exercise: Exercise, token: string) => {
  const res = fetch(`${API_BASE_URI}/exercise`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(exercise),
  })

  return res;
};

export const deleteExercise = async (id: string) => {};
