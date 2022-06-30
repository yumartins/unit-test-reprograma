import { useState, useEffect } from "react";

export const User: React.FC = () => {
  const [data, setData] = useState<{ lastName: string, firstName: string }>();

  useEffect(() => {
    fetch("/user")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex flex-col">
      {data && (
        <div role="contentinfo" className="whitespace-pre">
          {`Name is\n${data.firstName} ${data.lastName}`}
        </div>
      )}
    </div>
  );
};