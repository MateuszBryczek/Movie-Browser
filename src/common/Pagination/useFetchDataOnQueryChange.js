import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

export function useFetchDataOnLocationSearchChange({ fetchAction }) {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(location.search);

    dispatch(
      fetchAction({
        query: urlSearchParams.get("query"),
        page: urlSearchParams.get("page"),
      })
    );
  }, [dispatch, fetchAction, location.search]);
}
