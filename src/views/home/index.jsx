import React, { useEffect } from "react";
import HomeWrapper from "./style";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";

// import HomeBanner from "./c-cons/home-banner";
import HomeSectionV1 from "./c-cons/home-section-v1";
import { isEmptyObj } from "@/utils";
import HomeMaybe from "./c-cons/home-maybe";

const Home = () => {
  /* 从 redux 中获取数据 */
  const { longforInfo, goodPriceInfo, highScoreInfo } = useSelector(
    (state) => ({
      longforInfo: state.home.longforInfo,
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
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
      {/* <HomeBanner /> */}
      <div className="content">
        {/* 可能想去 */}
        {isEmptyObj(longforInfo) && <HomeMaybe infoData={longforInfo} />}
        {/* 好价推荐 */}
        {isEmptyObj(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo} />
        )}
        {/* 高分推荐 */}
        {isEmptyObj(highScoreInfo) && (
          <HomeSectionV1 infoData={highScoreInfo} />
        )}
      </div>
    </HomeWrapper>
  );
};

export default Home;
