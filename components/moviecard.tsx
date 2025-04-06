"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Skeleton,
} from "@mui/material";

interface Movie {
  title: string;
  year: string;
  genre: string;
}

interface MovieCardProps {
  movie?: Movie;
  loading?: boolean;
  apiKey?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  loading = false,
  apiKey = "d055326b",
}) => {
  const dummyMovie: Movie = {
    title: "inception",
    year: "2010",
    genre: "Action, Adventure, Sci-Fi",
  };

  const displayMovie = movie || dummyMovie;

  const getPosterUrl = () => {
    return `http://img.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
      displayMovie.title
    )}`;
  };
  return (
    <Card className="w-64 m-4 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-80">
        <CardMedia
          component="img"
          alt={`${displayMovie.title} poster`}
          height="300"
          image={getPosterUrl()}
          className="object-cover w-full h-full"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://via.placeholder.com/300x450?text=No+Poster";
          }}
        />
      </div>

      <CardContent className="p-4">
        <Typography
          variant="h6"
          component="div"
          className="font-bold text-gray-900 truncate"
        >
          {displayMovie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mb-2">
          {displayMovie.year}
        </Typography>
        <div className="flex flex-wrap gap-1 mt-2">
          {displayMovie.genre.split(", ").map((genre, index) => (
            <Chip
              key={index}
              label={genre}
              size="small"
              className="bg-blue-100 text-blue-800 text-xs"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
