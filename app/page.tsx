import Movieform from "@/components/form";
import MovieCard from "@/components/moviecard";
import { title } from "process";

export default function Home() {
  const movie = {
    title: "Movie Title",
    description: "A short description of the movie",
    year: "2023",
    genre: "Action, Adventure, Sci-Fi",
  };
  // many real dummy movies with data
  const dummyMovies = [
    {
      title: "Inception",
      year: "2010",
      genre: "Action, Adventure, Sci-Fi",
    },
    {
      title: "The Matrix",
      year: "1999",
      genre: "Action, Sci-Fi",
    },
    {
      title: "The Shawshank Redemption",
      year: "1994",
      genre: "Drama",
    },
    {
      title: "The Godfather",
      year: "1972",
      genre: "Crime, Drama",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px",
      }}
    >
      <Movieform />
      <MovieCard />
      {dummyMovies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}
