'use client';

import React, { useEffect, useState } from 'react';

interface MovieData {
    Title: string;
    Released: string;
    Genre: string;
    Plot: string;
    Poster: string;
}

interface MovieInfoProps {
    movieId: string;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ movieId }) => {
    const [movie, setMovie] = useState<MovieData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const fetchMovieData = async () => {
            try {
                const response = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=d055326b`);
                const data = await response.json();
                console.log('OMDb response:', data); 
                if (data.Response === 'True') {
                    setMovie(data);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error("Fetch error:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieData();
    }, [movieId]);

    if (!isClient) return null;
    if (loading) return <p>Loading...</p>;
    if (error || !movie) return <p>Failed to load movie details.</p>;

    return (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} style={{ width: '200px', height: 'auto' }} />
            <div>
                <h2>{movie.Title}</h2>
                <p><strong>Release Date:</strong> {movie.Released}</p>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <p><strong>Plot:</strong> {movie.Plot}</p>
                <textarea
                    placeholder="Add your personal notes here..."
                    style={{ width: '100%', height: '100px', marginTop: '10px' }}
                />
            </div>
        </div>
    );
};

export default MovieInfo;
