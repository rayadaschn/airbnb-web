import React, { memo, useEffect, useRef, useState } from "react";
import ScrollViewWrapper from "./style";
import { IconArrowLeft, IconArrowRight } from "@/assets/svg";

// 滚动组件

const ScrollView = memo((props) => {
  const [itemIndex, setItemIndex] = useState(0); // 头显为第几个 item

  const scrollContentRef = useRef(); // 内部主题内容的外部的大框框
  const totalDistanceRef = useRef(); // overflow 溢出宽度
  useEffect(() => {
    // 子组件不变化, 以下只渲染一次
    const scrollWidth = scrollContentRef.current.scrollWidth; // 包括由于 overflow 溢出而在屏幕上不可见的内容。
    const clientWidth = scrollContentRef.current.clientWidth; // 外部框框实际显示宽度
    totalDistanceRef.current = scrollWidth - clientWidth; // overflow 溢出宽度
  }, [props.children]);

  function controlClickHandle(isLeft) {
    const currentLeftIndex = isLeft ? itemIndex + 1 : itemIndex - 1;
    setItemIndex(currentLeftIndex); // 更新头显
    // 获取当前子元素
    const currentLeftElement =
      scrollContentRef.current.children[currentLeftIndex];
    const currentOffsetLeft = currentLeftElement.offsetLeft; // 当前子元素距离父左边框距离
    // TODO 待增加边界条件
    scrollContentRef.current.style.transform = `translate(-${currentOffsetLeft}px)`;
  }
  return (
    <ScrollViewWrapper>
      <div className="control left" onClick={() => controlClickHandle(true)}>
        <IconArrowLeft />
      </div>
      <div className="control right" onClick={() => controlClickHandle(false)}>
        <IconArrowRight />
      </div>
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
