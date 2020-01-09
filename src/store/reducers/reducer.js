import {
  ADD_MOVIE,
  EDIT_MOVIE,
  SEARCH_MOVIE,
  REMOVE_MOVIE
} from "../actions/actionstype";

const initState = {
        searchvalue:{byname:'',byrate:0},
        movieslist:[{id:0,movie:{
            name: "The Informer",
            rank: { stars: ["", "", "", "", ""], ranknumber: 2 },
            url:
              "https://img.yts.lt/assets/images/movies/the_informer_2019/medium-cover.jpg"
          }},{id:1,movie:{
            name: "Berlin-Alexanderplatz ",
            rank: { stars: ["", "", "", "", ""], ranknumber: 3 },
            url:
              "https://img.yts.lt/assets/images/movies/berlin_alexanderplatz_die_geschichte_franz_biberkopfs_1931/medium-cover.jpg"
          }},{id:2,movie:{
            name: "Joker",
            rank: { stars: ["", "", "", "", ""], ranknumber: 4 },
            url:
              "https://img.yts.lt/assets/images/movies/joker_2019/medium-cover.jpg"
          }}],
    }
    



export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {...state,movieslist:[...state.movieslist,action.payload]};
    case EDIT_MOVIE:
      return {...state,movieslist:state.movieslist.map(el=>el.id===action.payload.id?{id:el.id,movie:action.payload.movie}:el)};
    case REMOVE_MOVIE:
      return {...state,movieslist:state.movieslist.filter((el,i)=>el.id!==action.payload)};
    case SEARCH_MOVIE:
      return {...state,searchvalue:action.payload};
      default:
      return state
  }
};
