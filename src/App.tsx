import { useEffect, useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function App() {
  const [swaggerDoc, setSwaggerDoc] = useState<string | null>(null);

  const endpoint = import.meta.env.VITE_API_URL

  useEffect(() => {
    fetch('/swagger.yaml')
      .then((response) => response.text())
      .then((result) => {
        setSwaggerDoc(result);
      })
      .catch((error) => {
        console.error("Error fetching the Swagger doc:", error);
      });
  }, []);
  return (
    <div>
      {swaggerDoc && <SwaggerUI
        spec={swaggerDoc}
        url={endpoint}
      />}
    </div>
  );
}

export default App;
