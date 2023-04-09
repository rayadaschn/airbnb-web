import React, { useEffect } from "react";
import HomeWrapper from "./style";
import SectionHeader from "@/components/section-header";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionRoom from "@/components/section-room";

const Home = () => {
  /* 从 redux 中获取数据 */
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );

  // 发送网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRoom roomList={goodPriceInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
