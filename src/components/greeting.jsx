import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetcher } from '../slice';

const Greeting = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.greetings.text);
  const loading = useSelector((state) => state.greetings.loading);
  const error = useSelector((state) => state.greetings.error);
  useEffect(() => {
    const promise = dispatch(fetcher());
    return () => promise.abort();
  }, [dispatch]);
  if (error !== null) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      {loading ? (<h1>Loading</h1>) : (<h1>{text}</h1>)}
      <button type="button" onClick={() => dispatch(fetcher())}>Generate</button>
    </>
  );
};

export default Greeting;
