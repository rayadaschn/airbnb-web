import React, { memo, useEffect, useState } from "react";
import { IconAvatar, IconGlobal, IconMenu } from "@/assets/svg";
import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
  // 定义组件内部的状态
  const [showPanel, setShowPanel] = useState(false);

  // 副作用
  useEffect(() => {
    function windowHandleClick() {
      // 点击其它区域
      setShowPanel(false);
    }
    // 监听 window 点击事件: 事件冒泡, DOM 事件之后执行
    window.addEventListener("click", windowHandleClick, false);
    return () => {
      window.removeEventListener("click", windowHandleClick, false);
    };
  }, []);

  // 事件处理函数
  function profileClickHandle(event) {
    setShowPanel(!showPanel); // 展示 or 关闭弹窗
    event.stopPropagation(); // 阻止事件冒泡
  }

  return (
    <RightWrapper>
      <div className="btns">
        {/* <span className="btn">登录</span>
        <span className="btn">注册</span> */}
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />

        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">出展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
