import { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      <Tours url={url} isLoading={isLoading} setIsLoading={setIsLoading} />
    </main>
  );
}

export default App;
