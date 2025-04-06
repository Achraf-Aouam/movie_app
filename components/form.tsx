"use client";

import { FormHelperText, Input, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { SubmitHandler, useForm } from "react-hook-form";

type inputs = {
  title: string;
  release_year: string;
  genre: string;
  notes: string;
};

const Movieform = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Movie</h2>

        {(() => {
          const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm<inputs>();

          const onSubmit: SubmitHandler<inputs> = (data) => {
            console.log(data);
            // api call to add movie
          };

          return (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <FormControl fullWidth error={!!errors.title} variant="standard">
                <InputLabel htmlFor="title">Movie Title</InputLabel>
                <Input
                  id="title"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                  <FormHelperText>{errors.title.message}</FormHelperText>
                )}
              </FormControl>

              <FormControl
                fullWidth
                error={!!errors.release_year}
                variant="standard"
              >
                <InputLabel htmlFor="release_year">Release Year</InputLabel>
                <Input
                  id="release_year"
                  type="number"
                  {...register("release_year", {
                    required: "Release year is required",
                    pattern: {
                      value: /^\d{4}$/,
                      message: "Enter a valid year",
                    },
                  })}
                />
                {errors.release_year && (
                  <FormHelperText>{errors.release_year.message}</FormHelperText>
                )}
              </FormControl>

              <FormControl fullWidth error={!!errors.genre} variant="standard">
                <InputLabel htmlFor="genre">Genre</InputLabel>
                <Input
                  id="genre"
                  {...register("genre", { required: "Genre is required" })}
                />
                {errors.genre && (
                  <FormHelperText>{errors.genre.message}</FormHelperText>
                )}
              </FormControl>

              <FormControl fullWidth error={!!errors.notes} variant="standard">
                <InputLabel htmlFor="notes">Notes</InputLabel>
                <Input id="notes" multiline rows={4} {...register("notes")} />
              </FormControl>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                Add Movie
              </button>
            </form>
          );
        })()}
      </div>
    </div>
  );
};

export default Movieform;
