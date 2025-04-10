import { ShoppingCart } from "lucide-react";

const Main = ({ expert }) => {
  return (
    <div className="bg-gray-200 p-2 relative rounded-md min-h-96">
      <div className="flex justify-center">
        <img className="rounded-full" src={expert.img} alt="Profile Picture" />
      </div>
      <h2 className="text-2xl text-orange-400 mb-3 text-center font-semibold">
        {expert.name}
      </h2>
      <p>
        <b>Age:</b> {expert.age}
      </p>
      <p>
        <b>Designation:</b> {expert.designation}
      </p>
      <p>
        <b>Address:</b> {expert.address}
      </p>
      <p>
        <b>Salary:</b> {expert.salary}
      </p>
      <button className="w-full absolute bottom-2 left-0 right-0 mt-2 p-2 rounded cursor-pointer bg-blue-500 text-white hover:bg-blue-600">
        <b className="flex items-center gap-2 justify-center">
          <ShoppingCart /> Add to cart
        </b>
      </button>
    </div>
  );
};

export default Main;
