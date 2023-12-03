import { useDispatch, useSelector } from "react-redux";

const PeopleList () => {
    const people = useSelector(selectPeople);
    const error = useSelector(selectError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPeople());
      }, [dispatch]);

      return (
        
      );
};

export default PeopleList;