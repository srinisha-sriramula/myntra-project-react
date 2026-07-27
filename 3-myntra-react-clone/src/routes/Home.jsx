import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.items);
  console.log(items);

  return (
    <>
      <main>
        <div className="items-container">
          <HomeItem item={items[0]}></HomeItem>
        </div>
      </main>
    </>
  );
};
export default Home;
