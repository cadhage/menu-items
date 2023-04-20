import { useState } from "react";
import data from "./data";
import Items from "./Items";
import Title from "./Title";
import Catagories from "./Catagories";
const tempCategories = data.map((item) => {
  return item.category;
});
// const tempSet = new Set(tempCategories);
// const temp = ["all", ...tempSet];

const allCatagories = ["all", ...new Set(tempCategories)];
const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCatagories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Catagories categories={categories} filterItems={filterItems} />
        <Items menu={menu}></Items>;
      </section>
    </main>
  );
};
export default App;
