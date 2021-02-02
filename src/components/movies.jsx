import React, { Component } from "react";

import Like from "../common/like";
import Table from "../common/table";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
import { getGenres } from "../services/fakeGenre";
import { getMovies } from "../services/fakeMovie";
import { paginate } from "../utils/paginate.js";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "../common/searchBox";

class Movies extends Component {
  state = {
    movies: [],
    genre: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    searchQuery: null,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genre = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genre });
  }

  handleDelete = (movie) => {
    const newData = this.state.movies.filter((item) => item._id !== movie._id);
    this.setState({ movies: newData });
  };

  handleLike = (movie) => {
    const cloneData = [...this.state.movies];
    const index = cloneData.indexOf(movie);
    cloneData[index] = { ...cloneData[index] };
    cloneData[index].liked = !cloneData[index].liked;
    this.setState({ movies: cloneData });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleItemSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({
      sortColumn,
    });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      selectedGenre,
      searchQuery,
      sortColumn,
    } = this.state;

    let filteredMovies = allMovies;

    if (searchQuery)
      filteredMovies = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filteredMovies = allMovies.filter(
        (m) => m.genre._id === selectedGenre._id
      );
    const sorted = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filteredMovies.length, data: movies };
  };
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (item) => <Like onLike={this.handleLike} movie={item} />,
    },
    {
      key: "delete",
      content: (item) => (
        <button
          onClick={() => this.handleDelete(item)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const {
      pageSize,
      currentPage,
      genre,
      selectedGenre,
      searchQuery,
      sortColumn,
    } = this.state;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genre}
            selectedItem={selectedGenre}
            onItemSelect={this.handleItemSelect}
          />
        </div>
        <div className="col">
          <Link to="/movies/new" className="btn btn-primary mb-4">
            New Movie
          </Link>

          {movies.length === 0 ? (
            <p>
              <strong>There are no movies in the database</strong>
            </p>
          ) : (
            <div>
              <p>
                <strong>Showing {movies.length} movies in the database</strong>
              </p>
            </div>
          )}

          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <Table
            columns={this.columns}
            data={movies}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
