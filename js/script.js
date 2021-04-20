function initVue() {
  new Vue({
    el: "#app",
    data: {
      films: [],
      series: [],
      input: "",
    },
    methods: {
      search: function () {
        //FILM
        axios
          .get("https://api.themoviedb.org/3/search/multi", {
            params: {
              api_key: "751a05be1460b8ba83b49cc31a439091",
              query: this.input,
              include_image_language: "en,noLen",
            },
          })
          .then((data) => {
            const result = data.data.results;
            this.films = result;
            console.log(this.films);
          });
        //TV SERIES
        axios
          .get("https://api.themoviedb.org/3/search/tv", {
            params: {
              api_key: "751a05be1460b8ba83b49cc31a439091",
              query: this.input,
              include_image_language: "en,noLen",
            },
          })
          .then((data) => {
            const result = data.data.results;
            this.series = result;
            console.log(this.series);
          });
      },
      language: function (film) {
        if (film == "en") {
          return "img/en.png";
        } else if (film == "it") {
          return "img/it.png";
        } else if (film == "ja") {
          return "img/ja.png";
        } else if (film == "cn") {
          return "img/cn.jfif";
        }
      },
      overview: function (film) {
        if (film.overview && film.overview.length > 130) {
          return film.overview.slice(0, 130);
        } else {
          return film.overview;
        }
      },
      vote: function (val) {
        return Math.ceil(val / 2);
      },
    },
  });
}

function init() {
  initVue();
}
document.addEventListener("DOMContentLoaded", init);
