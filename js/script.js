function initVue() {
  new Vue({
    el: "#app",
    data: {
      contents: [],
      input: "",
    },
    methods: {
      search: function () {
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
            this.contents = result;
            console.log(this.contents);
          });
      },
      language: function (item) {
        if (item == "en") {
          return "img/en.png";
        } else if (item == "it") {
          return "img/it.png";
        } else if (item == "ja") {
          return "img/ja.png";
        } else if (item == "cn") {
          return "img/cn.jfif";
        }
      },
      overview: function (item) {
        if (item.overview && item.overview.length > 130) {
          return item.overview.slice(0, 130);
        } else {
          return item.overview;
        }
      },
    },
  });
}

function init() {
  initVue();
}
document.addEventListener("DOMContentLoaded", init);
