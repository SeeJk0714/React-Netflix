import { useState, useEffect } from "react";
import axios from "axios";
import { Title, Grid, Card, Badge, Group, Space, Button } from "@mantine/core";

function Tvshows() {
    const [tvshows, setTvshows] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/tvshows")
            .then((response) => {
                setTvshows(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const filterTvshow = async (genre = "") => {
        try {
            const response = await axios.get(
                "http://localhost:5000/tvshows?genre=" + genre
            );
            setTvshows(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Title order={3} align="center">
                Tvshows
            </Title>
            <Space h="20px" />
            <Group>
                <Button
                    onClick={() => {
                        filterTvshow("");
                    }}
                >
                    All
                </Button>
                <Button
                    onClick={() => {
                        filterTvshow("Drama");
                    }}
                >
                    Drama
                </Button>
                <Button
                    onClick={() => {
                        filterTvshow("Fantasy");
                    }}
                >
                    Fantasy
                </Button>
                <Button
                    onClick={() => {
                        filterTvshow("Action");
                    }}
                >
                    Action
                </Button>
                <Button
                    onClick={() => {
                        filterTvshow("Sci-Fi");
                    }}
                >
                    Sci-fi
                </Button>
                <Button
                    onClick={() => {
                        filterTvshow("Adventure");
                    }}
                >
                    Adventure
                </Button>
                <Button
                    onClick={() => {
                        filterTvshow("Comedy");
                    }}
                >
                    Comedy
                </Button>
                <Button
                    onClick={() => {
                        filterTvshow("Thriller");
                    }}
                >
                    Thriller
                </Button>
                <Button
                    onClick={() => {
                        filterTvshow("Horror");
                    }}
                >
                    Horror
                </Button>
                <Button
                    onClick={() => {
                        filterTvshow("Crime");
                    }}
                >
                    Crime
                </Button>
                <Button
                    onClick={() => {
                        filterTvshow("Mystery");
                    }}
                >
                    Mystery
                </Button>
                <Button
                    onClick={() => {
                        filterTvshow("Biography");
                    }}
                >
                    Biography
                </Button>
                <Button
                    onClick={() => {
                        filterTvshow("History");
                    }}
                >
                    History
                </Button>
            </Group>
            <Space h="20px" />
            <Grid>
                {tvshows
                    ? tvshows.map((tvshow) => {
                          return (
                              <Grid.Col key={tvshow._id} span={4}>
                                  <Card withBorder shadow="sm" p="20px">
                                      <Title order={5}>{tvshow.title}</Title>
                                      <Space h="20px" />
                                      <Group position="center" sapcing="5px">
                                          <Badge color="green">
                                              {tvshow.creator}
                                          </Badge>
                                          {tvshow.genre.map((genre) => (
                                              <Badge color="yellow" key={genre}>
                                                  {genre}
                                              </Badge>
                                          ))}
                                          <Badge color="red">
                                              {tvshow.rating}
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

export default Tvshows;
