(function () {
  // Content
  const movieTitle = document.getElementById("movie-title"),
    movieDescription = document.getElementById("movie-descriptions"),
    movieImage = document.getElementById("movie-image"),
    movieItems = document.getElementsByClassName("movie-item");

  const listmovies = [
    {
      movieTitle: "Naruto",
      movieDescription: `Naruto[a] is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts—the first set in Naruto's pre-teen years, and the second in his teens. The series is based on two one-shot manga by Kishimoto: Karakuri (1995), which earned Kishimoto an honorable mention in Shueisha's monthly Hop Step Award the following year, and Naruto (1997).`,
      movieImage: `https://upload.wikimedia.org/wikipedia/en/thumb/9/94/NarutoCoverTankobon1.jpg/220px-NarutoCoverTankobon1.jpg`,
      color: "orange",
    },
    {
      movieTitle: "One Piece",
      movieDescription: `One Piece (stylized in all caps) is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled into 106 tankōbon volumes as of July 2023. The story follows the adventures of Monkey D. Luffy and his crew, the Straw Hat Pirates, where he explores the Grand Line in search of the mythical treasure known as the "One Piece" in order to become the next King of the Pirates.`,
      movieImage: `https://upload.wikimedia.org/wikipedia/en/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg`,
      color: "red",
    },
    {
      movieTitle: "Boruto",
      movieDescription: `Boruto[a] is a Japanese manga series written by Ukyō Kodachi and Masashi Kishimoto, and illustrated by Mikio Ikemoto. It initially began monthly serialization under the title Boruto: Naruto Next Generations,[b] with Kodachi as writer and Kishimoto as editorial supervisor in Shueisha's shōnen manga magazine Weekly Shōnen Jump in May 2016, and was transferred to Shueisha's monthly magazine V Jump in July 2019. In November 2020, Kodachi stepped down, with Kishimoto taking over as writer. In April 2023, the series concluded the first part of the story and, following a brief hiatus, continued in August of the same year with a second part titled Boruto: Two Blue Vortex.[c] Boruto is a spin-off and a sequel to Kishimoto's Naruto, which follows the exploits of Naruto Uzumaki's son, Boruto Uzumaki, and his ninja team.`,
      movieImage: `https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Boruto_manga_vol_1.jpg/220px-Boruto_manga_vol_1.jpg`,
      color: "gray",
    },
  ];

  for (var i = 0; i < movieItems.length; i++) {
    movieItems[i].addEventListener("click", function () {
      const current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

      const movie = listmovies.find(
        (data) => data.movieTitle.toLowerCase() === this.dataset.title
      );

      if (movie) {
        movieTitle.classList.add("hide");
        movieDescription.classList.add("hide");
        movieImage.classList.add("hide");

        setTimeout(function () {
          movieTitle.innerText = movie.movieTitle;
          movieDescription.innerText = movie.movieDescription;
          movieImage.setAttribute("src", movie.movieImage);

          movieTitle.classList.remove("hide");
          movieDescription.classList.remove("hide");
          movieImage.classList.remove("hide");
        }, 500);

        document.body.style.backgroundColor = movie.color;
        document.body.style.transition = "all 1s ease";
      }
    });
  }
})();
