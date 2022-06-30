import { useState, useEffect } from "react";

export const useAPI = () => {
  const [data, setData] = useState<{ name: string }>();

  useEffect(() => {
    fetch("/user")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return data;
}