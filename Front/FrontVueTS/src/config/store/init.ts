import { defineStore } from 'pinia'

// TODO use this files
const initValues = 
{
  state: {
    lang: "NL",
    translations: [],
    recupName: "inlim", // TODO recupName to something in english ?
  },
  actions: {
    loadData({ commit }) {
      axios
        // for dev
        .get("/lang/header.json")
        // .get("http://localhost/lang/header.json")
        // .get("/lang/header.json")
        .then((response: { data: any; }) => {
          //   // console.log(response);
          commit("updateTrans", response.data);
        });
    },
    loadBigData({ commit }) {
      axios
        // for dev
        .get("/lang/app_wide_text.json")
        // .get("http://localhost/lang/header.json")
        // .get("/lang/header.json")
        .then((response: { data: any; }) => {
          //   // console.log(response);
          commit("updateBigTxt", response.data);
        });
    },
    getCookie({ commit }) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${"recup_lang"}=`);
      if (parts.length === 2) {
        commit("updateLang", parts.pop().split(";").shift());
      }
    },
  },
  mutations: { // TODO not used and weird 
    updateTrans(state: { translations: any; }, translations: any) {
      state.translations = translations;
    },
    updateBigTxt(state: { bigTxt: any; }, translations: any) {
      state.bigTxt = translations;
    },
    updateLang(state: { lang: any; }, currLang: any) {
      state.lang = currLang;
    },
  },
}


const initStore = defineStore('init', { // TODO change name to something better
  state: () => (initValues.state),
  getters: {
    lang: (state) => state.lang,
  },
  actions: initValues.actions,
})

export default initStore

