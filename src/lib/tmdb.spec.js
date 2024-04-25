import { getMovies, searchMovies, getDetails } from "./tmdb.js";
import { moviesList } from "../mocks/movies.js";
import { movieDetail } from "../mocks/movieDetail.js";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("getMovies", () => {
  // Teste: Deve renderizar sem problemas
  it("Deve chamar a API do TMDB /discover", async () => {
    global.fetch = jest.fn((url, options) =>
      Promise.resolve({
        json: () => Promise.resolve(moviesList),
      })
    );
    const result = await getMovies("query");

    //expect(result).toEqual(1.42);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/discover/movie?language=pt-BR&include_adult=false&sort_by=popularity.desc&api_key=8da53c7d14f03ceb87ea073e21c6bc1f&query"
    );
  });
  it("Deve chamar a API do TMDB /discover", async () => {
    global.fetch = jest.fn((url, options) =>
      Promise.reject('deu erro na API')
    );
    const result = await getMovies("query");

    expect(result).toEqual('deu erro na API');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/discover/movie?language=pt-BR&include_adult=false&sort_by=popularity.desc&api_key=8da53c7d14f03ceb87ea073e21c6bc1f&query"
    );
  });
  it("Deve chamar a API do TMDB /discover", async () => {
    global.fetch = jest.fn((url, options) =>
      Promise.resolve({
        json: () => Promise.resolve(moviesList),
      })
    );
    const result = await getMovies();

    //expect(result).toEqual(1.42);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/discover/movie?language=pt-BR&include_adult=false&sort_by=popularity.desc&api_key=8da53c7d14f03ceb87ea073e21c6bc1f&"
    );
  });
});

describe("getDetails", () => {
  // Teste: Deve chamar o filme pelo id
  it("Deve chamar o filme pelo id", async () => {
    global.fetch = jest.fn((url, options) =>
      Promise.resolve({
        json: () => Promise.resolve(movieDetail),
      })
    );
    const movieId = "693134"; // Id de um filme fictício para o teste
    const result = await getDetails(movieId);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGE1M2M3ZDE0ZjAzY2ViODdlYTA3M2UyMWM2YmMxZiIsInN1YiI6IjY2MGIwOTk0OWM5N2JkMDE2M2EzNDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MmUXgCO_cxAjvFt4VRKr7WxFnpG643tqNrbsD9fVjSY",
          accept: "application/json",
        },
      }
    );
  });
  it("Deve chamar o filme pelo id", async () => {
    global.fetch = jest.fn((url, options) =>
      Promise.reject('deu erro na API')
    );
    const movieId = "693134"; // Id de um filme fictício para o teste
    const result = await getDetails(movieId);

    expect(result).toEqual('deu erro na API');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGE1M2M3ZDE0ZjAzY2ViODdlYTA3M2UyMWM2YmMxZiIsInN1YiI6IjY2MGIwOTk0OWM5N2JkMDE2M2EzNDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MmUXgCO_cxAjvFt4VRKr7WxFnpG643tqNrbsD9fVjSY",
          accept: "application/json",
        },
      }
    );
  })
  it("Deve chamar o filme pelo id", async () => {
    global.fetch = jest.fn((url, options) =>
      Promise.resolve({
        json: () => Promise.resolve(moviesList),
      })
    );
    const movieId = "693134"; // Id de um filme fictício para o teste
    const result = await getDetails(movieId); // Passando o movieId como argumento

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGE1M2M3ZDE0ZjAzY2ViODdlYTA3M2UyMWM2YmMxZiIsInN1YiI6IjY2MGIwOTk0OWM5N2JkMDE2M2EzNDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MmUXgCO_cxAjvFt4VRKr7WxFnpG643tqNrbsD9fVjSY",
          accept: "application/json",
        },
      }
    );
  });
});

describe("searchMovies", () => {
  // Teste: Deve renderizar sem problemas
  it("Deve chamar o filme pelo search", async () => {
    global.fetch = jest.fn((url, options) =>
      Promise.resolve({
        json: () => Promise.resolve(moviesList),
      })
    );
    const result = await searchMovies("query");

    //expect(result).toEqual(1.42);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/search/movie?language=pt-BR&include_adult=false&api_key=8da53c7d14f03ceb87ea073e21c6bc1f&query"
    );
  });

  it("Deve chamar o filme pelo search", async () => {
    global.fetch = jest.fn((url, options) =>
      Promise.reject('Deu erro na API')
    );
    const result = await searchMovies("query");

    expect(result).toEqual('Deu erro na API');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/search/movie?language=pt-BR&include_adult=false&api_key=8da53c7d14f03ceb87ea073e21c6bc1f&query"
    );
  });
  it("Deve chamar o filme pelo search", async () => {
    global.fetch = jest.fn((url, options) =>
      Promise.resolve({
        json: () => Promise.resolve(moviesList),
      })
    );
    const result = await searchMovies();

    //expect(result).toEqual(1.42);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/search/movie?language=pt-BR&include_adult=false&api_key=8da53c7d14f03ceb87ea073e21c6bc1f&"
    );
  });
});


