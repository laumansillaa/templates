import { useEffect } from "react";
// import { getPostByIdWithRelations, getPostById } from "@/redux/actions";
export const useGetPostForUpdated = (dispatch, isUpdatedForm, id) => {
  useEffect(() => {
    if (isUpdatedForm) {
      // dispatch(getPostByIdWithRelations(id));
    }
  }, []);
};
