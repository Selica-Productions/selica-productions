// --Max Pages --
export const maxPages = 500;

// -- Year Options --
export const YEARS = [
    2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015,
    2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005,
    2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995,
    1994, 1993, 1992, 1991, 1990
];

// --Genre Options--
export const GENRES = [
    { id: 28, label: "Action" },
    { id: 12, label: "Adventure" },
    { id: 16, label: "Animation" },
    { id: 35, label: "Comedy" },
    { id: 80, label: "Crime" },
    { id: 99, label: "Documentary" },
    { id: 18, label: "Drama" },
    { id: 10751, label: "Family" },
    { id: 14, label: "Fantasy" },
    { id: 36, label: "History" },
    { id: 27, label: "Horror" },
    { id: 10402, label: "Music" },
    { id: 9648, label: "Mystery" },
    { id: 10749, label: "Romance" },
    { id: 878, label: "Science Fiction" },
    { id: 10770, label: "TV Movie" },
    { id: 53, label: "Thriller" },
    { id: 10752, label: "War" },
    { id: 37, label: "Western" }
];

//-- Sort options --
export const sortOptions = [
    { value: "popularity.desc", label: "Popularity (descending)" },
    { value: "popularity.asc", label: "Popularity (ascending)" },
    { value: "vote_average.desc", label: "Rating (high to low)" },
    { value: "primary_release_date.desc", label: "Release Date (newest first)" },
    { value: "primary_release_date.asc", label: "Release Date (oldest first)" },
    { value: "revenue.desc", label: "Revenue (high to low)" },
    { value: "revenue.asc", label: "Revenue (low to high)" },
    { value: "original_title.asc", label: "Title (A-Z)" },
    { value: "original_title.desc", label: "Title (Z-A)" },
  ];