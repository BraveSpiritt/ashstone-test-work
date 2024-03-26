import { FC } from "react";
import { CardData } from "../../type";

type Props = {
  item: CardData;
};

const Card: FC<Props> = ({ item }) => {
  return (
    <div className="w-[360px] h-[459px]">
      <img src={`${item.img}`} alt="image for card" />
      <p className="font-bold text-[#EB0028] text-[13px] leading-[13px] mt-4">{item.tags}</p>
      <p className="font-bold text-2xl mt-4">{item.title}</p>
      <div className="flex flex-row mt-4">
        <p className="font-medium text-[12px] leading-3">{item.autor}</p>
        <p className="font-normal text-[#9B9B9B] text-[12px] leading-3"> • {item.date} • </p>
        <p className="font-normal text-[#9B9B9B] text-[12px] leading-3">{item.views}</p>
      </div>
      <p className="text-[#929292] font-medium text-sm mt-4">{item.text}</p>
    </div>
  );
};

export default Card;
