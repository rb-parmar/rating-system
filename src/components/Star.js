import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false, onClick = () => {} }) => {
  return (
    <FaStar
      color={selected ? '#ffc107' : '#e4e5e9'}
      onClick={onClick}
    /> 
  );
};

export default Star