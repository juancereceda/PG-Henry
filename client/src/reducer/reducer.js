import {
  GET_GENRES,
  GET_MOVIES_BY_GENRE,
  GET_MOVIES_DETAIL,
  GET_MOVIE_LIST,
} from "../actions/movies";
import { ORDER_USERS_BY_POINTS } from "../actions/points";
import {
  GET_PRODUCTS,
  ADD_TOTAL,
  SUBSTRACT_TOTAL,
  SAVE_SLOT,
  SAVE_PRODUCT,
  DELETE_PRODUCT,
  SEND_TO_PRODUCTS,
} from "../actions/products";
import {
  GET_USERS,
  GET_USER_BY_ID,
  SIGNUP,
  LOGIN,
  LOG_OUT,
  GET_BOOKINGS,
  SEARCH_USERS,
  USER_INFO,
  GET_BOOK,
  ALL_REV,
} from "../actions/users";
import { GET_PAYMENTS } from "../actions/orders";

const initialState = {
  products: [],
  /*   purchase:{
    parking:'',
    price:0,
    day:'',
    time:'',
    title:'',
    slot:'',
    extras:{},
    total:0
  }, */
  slot: "",
  purchase: getPurchaseLocalStorage() ? getPurchaseLocalStorage() : {},
  movieDetail: {},
  moviesGenre: [],
  genre: "",
  users: [],
  movieList: [],
  token: getTokenLocalStorage(),
  bookings: [],
  selBook: {},
  payments: [],
  searchUserByName: [],
  searchUserById: [],
  userData: {},
  showRevs: false,
};

export function getTokenLocalStorage() {
  const token = window.localStorage.getItem("token");
  return token ? JSON.parse(token) : "";
}

export function setTokenLocalStorage(token) {
  window.localStorage.setItem("token", JSON.stringify(token));
}

export function getUserDataStorage() {
  const userdata = window.localStorage.getItem("userdata");
  return userdata ? JSON.parse(userdata) : "";
}

function setUserDataLocalStorage(userdata) {
  window.localStorage.setItem("userdata", JSON.stringify(userdata));
}

export function getPurchaseLocalStorage() {
  const purchase = window.localStorage.getItem("purchase");
  return purchase ? JSON.parse(purchase) : "";
}

function setPurchaseLocalStorage(purchase) {
  window.localStorage.setItem("purchase", JSON.stringify(purchase));
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //movie list
    case GET_MOVIE_LIST: {
      return {
        ...state,
        movieList: action.payload,
      };
    }
    case GET_MOVIES_DETAIL: {
      return {
        ...state,
        movieDetail: action.payload,
      };
    }
    case GET_MOVIES_BY_GENRE: {
      return {
        ...state,
        genre: action.payload,
      };
    }
    case GET_GENRES: {
      const moviesGenres = state.movieList.map((movie) =>
        movie.onBillboard ? movie.genre : ", "
      );
      let moviesGenresFiltred = [];
      moviesGenres.forEach((element) =>
        moviesGenresFiltred.push(
          element.includes(", ")
            ? element
                .split(", ")
                .forEach((element) => moviesGenresFiltred.push(element))
            : element
        )
      );
      moviesGenresFiltred = moviesGenresFiltred.filter(
        (el) => el !== undefined && el !== ""
      );
      let genresList = [...new Set(moviesGenresFiltred)];
      return {
        ...state,
        moviesGenre: genresList,
      };
    }

    //Products
    case SEND_TO_PRODUCTS: {
      let purchase = action.payload;
      purchase.total = action.payload.price;
      purchase.extras = {};
      purchase.slot = "";
      setPurchaseLocalStorage(purchase);
      return state;
    }
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case ADD_TOTAL: {
      let purchase = getPurchaseLocalStorage();
      purchase.total = purchase.total + action.payload;
      setPurchaseLocalStorage(purchase);
      return state;
    }
    case SUBSTRACT_TOTAL: {
      let purchase = getPurchaseLocalStorage();
      purchase.total = purchase.total - action.payload;
      setPurchaseLocalStorage(purchase);
      return state;
    }
    case SAVE_SLOT: {
      let purchase = getPurchaseLocalStorage();
      purchase.slot = action.payload;
      setPurchaseLocalStorage(purchase);
      return {
        ...state,
        slot: action.payload,
      };
    }
    case SAVE_PRODUCT: {
      let purchase = getPurchaseLocalStorage();
      if (!purchase.extras.hasOwnProperty(action.payload)) {
        purchase.extras[action.payload] = 1;
        setPurchaseLocalStorage(purchase);
      } else {
        purchase.extras[action.payload] = purchase.extras[action.payload] + 1;
        setPurchaseLocalStorage(purchase);
      }
      return state;
    }
    case DELETE_PRODUCT: {
      let purchase = getPurchaseLocalStorage();
      if (purchase.extras[action.payload] - 1 === 0) {
        delete purchase.extras[action.payload];
        setPurchaseLocalStorage(purchase);
      } else {
        purchase.extras[action.payload] = purchase.extras[action.payload] - 1;
        setPurchaseLocalStorage(purchase);
      }
      return state;
    }

    //users
    case GET_USERS: {
      // Para que en la pantalla del admin se muestren los usuarios
      return {
        ...state,
        users: action.payload,
      };
    }
    case GET_USER_BY_ID: {
      return {
        ...state,
        searchUserById: action.payload,
      };
    }
    case SEARCH_USERS: {
      return {
        ...state,
        searchUserByName: action.payload,
      };
    }
    // Ordenar usuarios por cantidad de puntos asc/desc
    case ORDER_USERS_BY_POINTS: {
      //Si no hay payload, order desc
      if (!action.payload) {
        return {
          ...state,
          users: [...state.users].sort((a, b) => a - b),
        };
      }
      return {
        ...state,
        users: [...state.users].sort((a, b) => a + b),
      };
    }
    //authentication
    case LOGIN: {
      setTokenLocalStorage(action.payload);
      return {
        ...state,
        token: action.payload,
      };
    }
    case SIGNUP: {
      setTokenLocalStorage(action.payload);
      return {
        ...state,
        token: action.payload,
      };
    }
    case USER_INFO: {
      setUserDataLocalStorage(action.payload);
      return {
        ...state,
        userData: action.payload,
      };
    }
    case LOG_OUT: {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("userdata");
      return {
        ...state,
        token: "",
      };
    }
    case GET_BOOKINGS: {
      return {
        ...state,
        bookings: action.payload,
      };
    }
    case GET_BOOK: {
      return {
        ...state,
        selBook: action.payload,
      }
    }
    case ALL_REV: {
      return {
        ...state,
        showRevs: action.payload,
      }
    }
    case GET_PAYMENTS: {
      return {
        ...state,
        payments: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
