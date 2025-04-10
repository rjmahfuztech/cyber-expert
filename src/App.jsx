import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("../public/expert.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);
  console.log(experts);
  return (
    <div className="max-w-[1400px] mx-auto p-3 md:p-8">
      <Header />
      <div className="grid grid-cols-4 gap-3 mt-10">
        <div className="col-span-3">
          <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-2">
            {experts.map((expert) => (
              <Main expert={expert} />
            ))}
          </div>
        </div>
        <div>ok</div>
      </div>
    </div>
  );
}

export default App;
