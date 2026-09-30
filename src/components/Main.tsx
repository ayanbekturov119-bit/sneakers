import banner from "../assets/frogg.png";
import search from "../assets/search.svg";
import arrow from "../assets/arrow.svg";
import sneaker from "../assets/item1.png";
import check from "../assets/galochka.svg";
import add from "../assets/add.svg";
import heart from "../assets/health.svg";
import Like from "../assets/Like.svg";
import { useState } from "react";

export const Main = () => {
  const sneakers = [
    {
      id: 1,
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      image: sneaker,
    },
    {
      id: 2,
      title: "Мужские Кроссовки Nike Air Max 270",
      price: 13999,
      image: sneaker,
    },
    {
      id: 3,
      title: "Мужские Кроссовки Nike Air Force 1",
      price: 14999,
      image: sneaker,
    },
    {
      id: 4,
      title: "Мужские Кроссовки Nike Dunk Low",
      price: 15999,
      image: sneaker,
    },
    {
      id: 5,
      title: "Мужские Кроссовки Nike Air Jordan 1",
      price: 17999,
      image: sneaker,
    },
    {
      id: 6,
      title: "Мужские Кроссовки Nike Court Vision",
      price: 11999,
      image: sneaker,
    },
    {
      id: 7,
      title: "Мужские Кроссовки Nike Revolution",
      price: 10999,
      image: sneaker,
    },
    {
      id: 8,
      title: "Мужские Кроссовки Nike Air Max 90",
      price: 16999,
      image: sneaker,
    },
    {
      id: 9,
      title: "Мужские Кроссовки Nike Air Max SC",
      price: 12999,
      image: sneaker,
    },
    {
      id: 10,
      title: "Мужские Кроссовки Nike Waffle Debut",
      price: 13999,
      image: sneaker,
    },
    {
      id: 11,
      title: "Мужские Кроссовки Nike Venture Runner",
      price: 14999,
      image: sneaker,
    },
    {
      id: 12,
      title: "Мужские Кроссовки Nike Court Legacy",
      price: 11999,
      image: sneaker,
    },
  ];

  const [added, setAdded] = useState<number[]>([]);
  const [liked, setLiked] = useState<number[]>([]);

  return (
    <div className="px-10 py-6">
      {/* Баннер */}
      <div className="relative">
        <img src={banner} alt="Banner" className="w-full rounded-2xl" />

        <div className="w-10 h-10 bg-white rounded-full absolute right-[-20px] top-1/2 -translate-y-1/2 flex items-center justify-center">
          <img src={arrow} alt="Arrow" className="w-4 h-4" />
        </div>
      </div>

      {/* поиск */}
      <div className="flex items-center justify-between mt-8">
        <h2 className="text-[28px] font-bold">Все кроссовки</h2>

        <div className="w-[250px] h-[40px] border border-[#EAEAEA] rounded-lg flex items-center px-4">
          <img src={search} alt="search" className="w-4 h-4 mr-2" />

          <input
            type="text"
            placeholder="Поиск..."
            className="w-full outline-none"
          />
        </div>
      </div>

      {/* Кроссовки карточка */}
      <div className="grid grid-cols-4 gap-5 mt-8">
        {sneakers.map((item) => (
          <div
            key={item.id}
            className="relative w-[210px] rounded-2xl bg-white p-5 border border-[#F3F3F3] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Сердечко */}
            <button
              onClick={() => {
                setLiked((prev) =>
                  prev.includes(item.id)
                    ? prev.filter((id) => id !== item.id)
                    : [...prev, item.id],
                );
              }}
              className={`absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 uppercase ${
                liked.includes(item.id) ? "bg-red-100" : "bg-white"
              }`}
            >
              <img
                src={liked.includes(item.id) ? Like : heart}
                alt="heart"
                className="w-5 h-5 transition-all duration-200"
              />
            </button>

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[150px] object-contain"
            />

            <h3 className="text-[14px] font-normal mt-4">{item.title}</h3>

            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-[11px] text-[#BDBDBD] uppercase">Цена:</p>

                <p className="font-bold text-[14px]">
                  {item.price.toLocaleString("ru-RU")} руб.
                </p>
              </div>

              {/* Добавить */}
              <button
                onClick={() => {
                  setAdded((prev) =>
                    prev.includes(item.id)
                      ? prev.filter((id) => id !== item.id)
                      : [...prev, item.id],
                  );
                }}
                className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 ${
                  added.includes(item.id)
                    ? "bg-green-500"
                    : "border border-[#F2F2F2] bg-white"
                }`}
              >
                <img
                  src={added.includes(item.id) ? check : add}
                  alt=""
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
