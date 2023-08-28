import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateExerciseRequest, ExerciseResponse } from "../models/exercise";

const BASE_URL = "http://localhost:5117/api/";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers) => {
      const token = await window.Clerk?.session?.getToken();
      if (token) headers.append("Authorization", `Bearer ${token}`);
      return headers;
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
        url: `exercise`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Exercise", id: "ALL" }],
    }),
  }),
});

// Export hooks, which are auto-generated based on the defined endpoints
export const { useGetExercisesQuery, useAddExerciseMutation } = api;
