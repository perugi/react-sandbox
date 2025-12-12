import { Outlet } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <hr />
      <h2>The profile visited is here</h2>
      <Outlet context={[count]} />
    </div>
  );
};

export default Profile;
