import axios from "axios";

export const api = {
  getListFilmes: async () => {
    let response = await axios.get(
      `https://api.themoviedb.org/3/list/20?api_key=b8ca458b434d3e3f53aaa63fb3319f12&language=pt-BR`
    );
    return response.data.items;
  },
};
