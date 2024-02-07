import { useSelector } from "react-redux";
import { Spin } from "antd";
import { getAssets, getIsCoinsShowed } from "../../redux/dashboardSlice";

export const ContentLoader: React.FC = () => {
  const assets = useSelector(getAssets);
  const isCoinShowed = useSelector(getIsCoinsShowed);
  return (
    <div
      className={`
        ${isCoinShowed && assets.length > 0 ? " hidden " : " "}
      ${!assets.length ? " w-[100%] " : "  w-[78%]  lg:w-[100%] "}
      text-center   h-full min-h-[calc(100vh-86px)]
       text-sky-200 bg-[#1E293B] p-4 transition-all rounded-2xl overflow-hidden `}
    >
      <div
        className="flex items-center justify-center 
        h-full w-[100%] mt-72"
      >
        <Spin size="large" />
      </div>
    </div>
  );
};