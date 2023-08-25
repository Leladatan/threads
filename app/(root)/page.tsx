import {NextPage} from "next";
import {UserButton} from "@clerk/nextjs";

const HomePage: NextPage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default HomePage;
