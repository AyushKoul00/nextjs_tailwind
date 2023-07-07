import { FC } from "react";
import Hello from "@/components/hello";

interface HomePageProps { }

const HomePage: FC<HomePageProps> = ({ }) => {
  return (
    <div className="gap-2 flex flex-col  p-4">
      {/* <!-- Before --> */}
      <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
        ...
      </button>

      {/* <!-- After --> */}
      <button className="px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 bg-sky-700">
        ...
      </button>

      <Hello>
        <div className="bg-blue-600">Hi</div>
      </Hello>
    </div>
  );
};

export default HomePage;
