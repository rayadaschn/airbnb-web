import React, { memo, useEffect, useRef, useState } from "react";
import ScrollViewWrapper from "./style";
import { IconArrowLeft, IconArrowRight } from "@/assets/svg";

// 滚动组件

const ScrollView = memo((props) => {
  // 定义内部转态
  const [itemIndex, setItemIndex] = useState(0); // 头显为第几个 item
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const scrollContentRef = useRef(); // 内部主题内容的外部的大框框
  const totalDistanceRef = useRef(); // overflow 溢出宽度
  useEffect(() => {
    // 子组件不变化, 以下只渲染一次
    const scrollWidth = scrollContentRef.current.scrollWidth; // 包括由于 overflow 溢出而在屏幕上不可见的内容。
    const clientWidth = scrollContentRef.current.clientWidth; // 外部框框实际显示宽度
    totalDistanceRef.current = scrollWidth - clientWidth; // overflow 溢出宽度
    setShowLeft(totalDistanceRef.current > 0); // 是否显示左按钮
    console.log("scrollWidth", scrollWidth);
    console.log("clientWidth", clientWidth);
    console.log("props.children", props.children);
  }, [props.children, props]);

  /**
   * @description: 控制按钮点击, 左右移动插槽内容
   * @param {*} isLeft 是否为左按钮
   */
  function controlClickHandle(isLeft) {
    const currentLeftIndex = isLeft ? itemIndex + 1 : itemIndex - 1;
    setItemIndex(currentLeftIndex); // 更新头显

    // 获取当前子元素
    const currentLeftElement =
      scrollContentRef.current.children[currentLeftIndex];
    const currentOffsetLeft = currentLeftElement.offsetLeft; // 当前子元素距离父左边框距离
    // 移动加边界条件
    let offSet = currentOffsetLeft;
    if (currentOffsetLeft >= totalDistanceRef.current) {
      // 检测已经划到底部了
      offSet = totalDistanceRef.current;
    }
    scrollContentRef.current.style.transform = `translate(-${offSet}px)`;

    // 检测是否显示俩旁按钮
    setShowRight(offSet > 0);
    setShowLeft(currentOffsetLeft < totalDistanceRef.current);
  }

  return (
    <ScrollViewWrapper>
      {/* 俩边按钮 */}
      {showLeft && (
        <div className="control left" onClick={() => controlClickHandle(true)}>
          <IconArrowLeft />
        </div>
      )}

      {showRight && (
        <div
          className="control right"
          onClick={() => controlClickHandle(false)}
        >
          <IconArrowRight />
        </div>
      )}

      {/* 插槽实际内容 */}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
