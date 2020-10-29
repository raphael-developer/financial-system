import Vue from "vue";
import Vuetify from "vuetify/lib";
import pt from "vuetify/src/locale/pt.ts";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },

  lang: {
    locales: { pt },
    current: "pt",
  },

  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#F4B607",
        secondary: "#247DAA",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FF8F00",
        dark: "#212121",
      },

      dark: {
        primary: "#F4B607",
        secondary: "#247DAA",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FF8F00",
        dark: "#212121",
      },
    },
  },
});
