import {
  CreateWorkoutTemplateRequest,
  WorkoutTemplate,
  WorkoutTemplateResponse,
} from "@/models/workoutTemplate";
import { Clerk } from "@clerk/clerk-expo";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Constants from "expo-constants";
import {
  CreateExerciseRequest,
  ExerciseResponse,
  UpdateExerciseRequest,
} from "../models/exercise";

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
      console.log(token);
    },
  }),
  tagTypes: ["Exercise", "WorkoutTemplate"],
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
    getExerciseById: builder.query<ExerciseResponse, string>({
      query: (id) => ({
        url: `exercise/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Exercise", id }],
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
    createWorkoutTemplate: builder.mutation<
      WorkoutTemplateResponse,
      CreateWorkoutTemplateRequest
    >({
      query: (body) => ({
        url: "template",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "WorkoutTemplate", id: "ALL" }],
    }),
    getWorkoutTemplates: builder.query<WorkoutTemplate[], void>({
      query: () => "template",
      transformResponse: (response: WorkoutTemplateResponse[], meta, arg) =>
        response.map((workoutTemplate) => {
          const { blockTemplates, ...workoutTemplateDetails } = workoutTemplate;
          return {
            ...workoutTemplateDetails,
            blocks: blockTemplates.map((blockTemplate) => ({
              items: blockTemplate.itemTemplates.map((itemTemplate) => {
                const { exercise, sets } = itemTemplate;
                return {
                  type: "repeated",
                  exerciseId: exercise.id,
                  sets,
                };
              }),
            })),
          };
        }),

      providesTags: (result) =>
        result
          ? [
              ...result.map(
                ({ id }) => ({ type: "WorkoutTemplate", id } as const)
              ),
              { type: "WorkoutTemplate", id: "ALL" },
            ]
          : [{ type: "WorkoutTemplate", id: "ALL" }],
    }),
  }),
});

// Export hooks, which are auto-generated based on the defined endpoints
export const {
  useGetExercisesQuery,
  useGetExerciseByIdQuery,
  useAddExerciseMutation,
  useUpdateExerciseMutation,
  useDeleteExerciseMutation,
  useCreateWorkoutTemplateMutation,
  useGetWorkoutTemplatesQuery,
} = api;
