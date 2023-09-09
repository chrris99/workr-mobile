import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CreateExerciseRequest,
  ExerciseResponse,
  UpdateExerciseRequest,
} from "../models/exercise";
import { Clerk } from "@clerk/clerk-expo";
import Constants from "expo-constants";

const { manifest } = Constants;

const BASE_URL = `http://${manifest?.debuggerHost
  ?.split(":")
  .shift()}:5117/api`;

//const BASE_URL = "http://localhost:5117/api/";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers) => {
      const token = await Clerk.session?.getToken({ template: "user_default" });
      if (token) headers.append("Authorization", `Bearer ${token}`);
    },
  }),
  tagTypes: ["Exercise"],
  endpoints: (builder) => ({
    getExercises: builder.query<ExerciseResponse[], void>({
      query: () => "exercise",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Exercise", id } as const)),
              { type: "Exercise", id: "ALL" },
            ]
          : [{ type: "Exercise", id: "ALL" }],
    }),
    addExercise: builder.mutation<ExerciseResponse, CreateExerciseRequest>({
      query: (body) => ({
        url: "exercise",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Exercise", id: "ALL" }],
    }),
    updateExercise: builder.mutation<ExerciseResponse, UpdateExerciseRequest>({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `exercise/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Exercise", id }],
    }),
    deleteExercise: builder.mutation<void, string>({
      query: (id) => ({
        url: `exercise/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Exercise", id }],
    }),
  }),
});

// Export hooks, which are auto-generated based on the defined endpoints
export const {
  useGetExercisesQuery,
  useAddExerciseMutation,
  useUpdateExerciseMutation,
  useDeleteExerciseMutation,
} = api;
