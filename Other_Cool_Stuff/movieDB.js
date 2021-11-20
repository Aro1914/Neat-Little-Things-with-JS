let myMovies = [
    {
        movieName: "The Tomorrow War",
        movieRating: "5",
        watchStatus: true
    },
    {
        movieName: "Free Guy",
        movieRating: "4.5",
        watchStatus: true
    },
    {
        movieName: "Shang Chi: Legend of the Ten Rings",
        movieRating: "5.0",
        watchStatus: true
    },
    {
        movieName: "SpiderMan: No Way Home",
        movieRating: "4.5",
        watchStatus: false
    },
    {
        movieName: "Death in a Funeral",
        movieRating: "3.0",
        watchStatus: true
    },
    {
        movieName: "Dune",
        movieRating: "5",
        watchStatus: false
    }
];

myMovies.forEach(element => {
    if (element.watchStatus) {
        console.log(`You have watched '${element.movieName}' - ${element.movieRating} stars`);
    } else {
        console.log(`You have not seen '${element.movieName}' - ${element.movieRating} stars`);
    }
});