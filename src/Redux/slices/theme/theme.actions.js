import axios from "axios";
import { getPost, setListPost, setPropertyTypes, setSearch } from "./theme.slice";

export const getPostId = (id) => {
  return async function (dispatch) {
    try {
      const result = await fetch(`/api/post/${id}`);
      const data = await result.json();
      return dispatch(getPost(data));
    } catch (error) {
      throw error;
    }
  };
};

export const getListPost = (id) => {
  return async function (dispatch) {
    try {
      const result = await fetch(`/api/post/list/${id}`);
      const data = await result.json();
      console.log(data);
      return dispatch(setListPost(data.data));
    } catch (error) {
      throw error;
    }
  };
};

export const getSearchResult = (payload) => {
  return async function (dispatch) {
    try {
      const result = await fetch(`/api/search?id=${payload.id}&location=${payload.location}`);
      const data = await result.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
};


export const getPropertyTypes = () => {
  return async function (dispatch) {
    try {
      const result = await fetch(`/api/propertyTypes`);
      const data = await result.json();
      console.log(data);
      return dispatch(setPropertyTypes(data));
    } catch (error) {
      throw error;
    }
  };
}

// export const getBookListAction = () => {
//     return async function (dispatch) {
//       try {
//         var json = await instancePrivate.get(
//           `${apiRouting.book.getBookList}`
//         )
//         return dispatch(getBookList(json.data))
//       } catch (error) {
//         console.log(error)
//       }
//     }
//   }
