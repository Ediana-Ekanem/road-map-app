import Container from "../Container";
import { SubCategory } from "../SubCategory";

const Categories = () => {
  const cat = [
    { id: 1, img: "/images/cat6.png", title: "Puffers" },
    { id: 2, img: "/images/cat1.png", title: "Bombers" },
    { id: 3, img: "/images/cat2.png", title: "Lightweight jackets" },
    { id: 4, img: "/images/cat3.png", title: "Gilets" },
    { id: 5, img: "/images/cat4.png", title: "Coats" },
    { id: 6, img: "/images/cat5.png", title: "Rainwears" },
  ];
  return (
    <div>
      <Container>
        <h2 className="text-center text-4xl font-semibold mt-20 mb-10">
          Shop by Categories
        </h2>
        <div className="flex flex-wrap justify-center ">
          {cat.map((item) => (
            <div className="w-1/2 sm:w-1/3 lg:w-1/6 p-2" key={item.id}>
              <img
                className="w-full rounded-full"
                src={item.img}
                alt={item.title}
              />
              <p className="mt-2 text-center font-[600]">{item.title}</p>
            </div>
          ))}
        </div>
        <SubCategory />
      </Container>
    </div>
  );
};
export default Categories;
