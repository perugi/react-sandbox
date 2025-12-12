import { Link } from "react-router";
import { useOutletContext } from "react-router-dom";

const Popeye = () => {
  const [count] = useOutletContext();
  return (
    <>
      <p>Hi, I am Popeye! I love to eat Spinach!</p>
      <p>Count: {count}</p>
      <Link to="/">Click here to go back</Link>
    </>
  );
};

export default Popeye;
