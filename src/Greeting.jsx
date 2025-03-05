function Greeting() {
  const animals = ["cat", "dog", "bird"];
  return (
    <div>
      <p>I will end you.</p>
      <ul>
        {animals.map((animal) => (
          <li>{animal}</li>
        ))}
      </ul>
    </div>
  );
}

export default Greeting;
