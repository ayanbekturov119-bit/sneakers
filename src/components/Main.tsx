import banner from "../assets/frogg.png";
import search from "../assets/search.svg";
import arrow from "../assets/arrow.svg";
import sneaker from "../assets/item1.png"
import check from "../assets/galochka.svg";

export const Main = () => {
    const sneakers = Array.from({ length: 12 });
  return (
    <div className="px-10 py-6">

      <div className="relative">
        <img
          src={banner}
          alt="Banner"
          className="w-full rounded-2xl"
        />

        <div className="w-10 h-10 bg-white rounded-full absolute right-[-20px] top-1/2 -translate-y-1/2 flex items-center justify-center">
          <img
            src={arrow}
            alt="Arrow"
            className="w-4 h-4"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-8">
        <h2 className="text-[28px] font-bold">
          Все кроссовки
        </h2>

        <div className="w-[250px] h-[40px] border border-[#EAEAEA] rounded-lg flex items-center px-4">
          <img
            src={search}
            alt="search"
            className="w-4 h-4 mr-2"
          />

          <input
            type="text"
            placeholder="Поиск..."
            className="w-full outline-none"
          />
        </div>
      </div>


<div className="grid grid-cols-4 gap-5 mt-8">
  {sneakers.map((_, index) => (
    <div
      key={index}
      className="w-[210px] rounded-2xl bg-white p-5 border border-[#F3F3F3]"
    >
      <img
        src={sneaker}
        alt="Sneaker"
        className="w-full h-[150px] object-contain"
      />

      <h3 className="text-[14px] font-normal mt-4">
        Мужские Кроссовки Nike Blazer Mid Suede
      </h3>

      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-[11px] text-[#BDBDBD] uppercase">
            Цена:
          </p>

          <p className="font-bold text-[14px]">
            12 999 руб.
          </p>
        </div>

        <button className="w-8 h-8 border border-[#F2F2F2] rounded-lg flex items-center justify-center cursor-pointer">
          +
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};