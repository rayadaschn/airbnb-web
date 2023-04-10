import PropTypes from "prop-types";
import React, { memo } from "react";
import MaybeItemWrapper from "./style";

const MaybeItem = memo((props) => {
  const { itemData } = props;
  return (
    <MaybeItemWrapper>
      <div className="inner">
        <img className="cover" src={itemData.picture_url} alt="" />

        {/* 此处不能单标签, 单标签自闭和则无内容 */}
        <div className="bg-cover"></div>

        {/* 主题信息 */}
        <div className="inner-info">
          <div className="city">{itemData.city}</div>
          <div className="price">均价 {itemData.price}</div>
        </div>
      </div>
    </MaybeItemWrapper>
  );
});

MaybeItem.propTypes = {
  itemData: PropTypes.object,
};

export default MaybeItem;
