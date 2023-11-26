import { useDispatch } from 'react-redux';

const filter = value => {
  return {
    type: 'filter/change',
    payload: value,
  };
};

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Find contacts by name</p>
      <input onChange={evt => dispatch(filter(evt.target.value))} />
    </div>
  );
};
