import styles from "./App.module.css";
import { useState, useEffect } from "react";

function UserDashboard({ user }) {
  const [notifications, setNotifications] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const fullName = `${user.first} ${user.last}`;

  useEffect(() => {
    fetch(`/api/notifications/${user.id}`)
      .then((res) => res.json())
      .then(setNotifications);
  }, [user.id]);

  useEffect(() => {
    document.body.classList.toggle(styles.dark, isDark);
  }, [isDark]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h1>{fullName}</h1>
      <p>Notifications: {notifications.length}</p>
      <p>Window width: {width}</p>
      <button onClick={() => setIsDark((d) => !d)}>Toggle Theme</button>
    </div>
  );
}

function App() {
  return (
    <UserDashboard user={{ first: "Dominik", last: "Perusko", id: "69" }} />
  );
}

export default App;
