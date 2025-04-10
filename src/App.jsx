import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";

function App() {
  const [experts, setExperts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("../public/expert.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);

  const handleCart = (id) => {
    const expert_info = experts.find((person) => person.id == id);
    const is_available = cart.find((person) => person.id == expert_info.id);

    if (is_available) alert("You already added this expert");
    else setCart([...cart, expert_info]);
  };

  return (
    <div className="max-w-[1400px] mx-auto p-3 md:p-8">
      <Header />
      <div className="grid grid-cols-4 gap-3 mt-10">
        <div className="col-span-3">
          <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-2">
            {experts.map((expert) => (
              <Main key={expert.id} handleCart={handleCart} expert={expert} />
            ))}
          </div>
        </div>
        <div className="">
          <Cart cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
