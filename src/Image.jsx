import { useEffect, useState } from "react";

const useImageURL = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list", {
      headers: {
        "User-Agent": "the-odin-project",
      },
    })
      .then((response) => {
        if (response.status === 404) {
          throw new Error("not found");
        }
        return response.json();
      })
      .then((data) => setImageURL(data[0].download_url))
      .catch((error) => {
        console.error("Error fetching image:", error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { imageURL, error, loading };
};

const Image = () => {
  const { imageURL, error, loading } = useImageURL();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered.</p>;

  return (
    imageURL && (
      <>
        <h1>Random Image</h1>
        <img src={imageURL} alt="Random from Picsum" />
      </>
    )
  );
};

export default Image;
