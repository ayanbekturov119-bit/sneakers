import logo from "../assets/logo.svg";
import price from "../assets/Group.svg";
import heart from "../assets/health.svg";
import person from "../assets/Union.svg";

export const Header = () => {
  return (
    <header className="h-[100px] border-b border-[#EAEAEA] px-10 flex items-center justify-between">

      <div className="flex items-center gap-4">
        <img className="w-10 h-10" src={logo} alt="React Sneakers" />

        <div>
          <h1 className="font-bold text-[20px] leading-5">REACT SNEAKERS</h1>

          <p className="text-[#c0c0c0] text-[13px] mt-1">
            Магазин лучших кроссовок
          </p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <img className="w-[18px]" src={price} alt="" />
          <span className="text-[14px] text-[#5C5C5C]">1205 руб.</span>
        </div>

        <div className="flex items-center gap-2">
          <img className="w-[18px]" src={heart} alt="" />
          <span className="text-[14px] text-[#5C5C5C]">Закладки</span>
        </div>

        <div className="flex items-center gap-2">
          <img className="w-[18px]" src={person} alt="" />
          <span className="text-[14px] text-[#5C5C5C]">Профиль</span>
        </div>
      </div>
    </header>
  );
};
