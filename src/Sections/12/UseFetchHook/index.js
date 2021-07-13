import { useEffect, useState } from "react";
import Header from "../Header";

const useFetch = (url, initialState = []) => {
  const [isFetching, setFetching] = useState(true);
  const [data, setData] = useState(initialState);

  useEffect(() => {
    setFetching(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFetching(false);
      });
  }, [url]);

  return [data, isFetching];
};

const UseFetchHook = () => {
  const [data, isFetching] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [clicks, setClicks] = useState(0);
  const [user, isFetchingUser] = useFetch(
    "https://jsonplaceholder.typicode.com/users/" + clicks,
    {}
  );
  return (
    <>
      <Header title="Custom Hook useFetch" />
      {isFetching && <p>Loading data..</p>}
      {!!data.length && data.map((todo) => <li>{todo?.name}</li>)}
      {isFetchingUser && (
        <p>
          <strong>Loading...</strong>
        </p>
      )}
      <h4>{user?.name}</h4>
      <p>{user?.email}</p>
      <button onClick={() => setClicks((c) => c + 1)}>Fetch new User</button>
    </>
  );
};

export default UseFetchHook;
