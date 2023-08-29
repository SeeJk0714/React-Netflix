import { useState, useEffect } from "react";
import axios from "axios";
import { Title, Grid, Card, Badge, Group, Space, Button } from "@mantine/core";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [moviesAPI, setMoviesAPI] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/movies")
            .then((response) => {
                setMovies(response.data);
                setMoviesAPI(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const filterMovie = (genre = "") => {
        if (genre !== "") {
            const newMovies = moviesAPI.filter((m) => m.genre === genre);
            setMovies(newMovies);
        } else {
            setMovies(moviesAPI);
        }
    };

    return (
        <>
            <Title order={3} align="center">
                Movies
            </Title>
            <Space h="20px" />
            <Group>
                <Button
                    onClick={() => {
                        filterMovie("");
                    }}
                >
                    All
                </Button>
                <Button
                    onClick={() => {
                        filterMovie("Drama");
                    }}
                >
                    Drama
                </Button>
                <Button
                    onClick={() => {
                        filterMovie("Fantasy");
                    }}
                >
                    Fantasy
                </Button>
                <Button
                    onClick={() => {
                        filterMovie("Action");
                    }}
                >
                    Action
                </Button>
                <Button
                    onClick={() => {
                        filterMovie("Sci-Fi");
                    }}
                >
                    Sci-fi
                </Button>
            </Group>
            <Space h="20px" />
            <Grid>
                {movies
                    ? movies.map((movie) => {
                          return (
                              <Grid.Col key={movie._id} span={4}>
                                  <Card withBorder shadow="sm" p="20px">
                                      <Title order={5}>{movie.title}</Title>
                                      <Space h="20px" />
                                      <Group position="center" sapcing="5px">
                                          <Badge color="green">
                                              {movie.director}
                                          </Badge>
                                          <Badge color="yellow">
                                              {movie.genre}
                                          </Badge>
                                          <Badge color="red">
                                              {movie.rating}
                                          </Badge>
                                      </Group>
                                  </Card>
                              </Grid.Col>
                          );
                      })
                    : null}
            </Grid>
        </>
    );
}

export default Movies;
