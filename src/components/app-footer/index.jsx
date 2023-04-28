import React, { memo, useEffect } from "react";
import {
  IconFootWeiBo,
  IconFootWeChat,
  IconFootChn,
  IconFootSupport,
} from "@/assets/svg";

import AppFooterWrapper from "./style";

const footerRightData = [
  [
    {
      id: 0,
      name: "京ICP备16017121号",
      href: "http://beian.miit.gov.cn/",
      endContent: " ",
    },
    {
      id: 1,
      name: "京ICP证 160773号",
      href: "https://z1.muscache.cn/pictures/carson/carson-1630514828733-435235f3/original/7c3906bf-e700-43a2-bc1e-38d8fb2f01cb.png",
      endContent: " · ",
    },
    {
      id: 2,
      name: "京公网安备 11010502032345号",
      href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502032345",
      endContent: " · ",
    },
    {
      id: 3,
      name: "",
      href: "",
      endContent: " 安彼迎网络（北京）有限公司 ",
    },
    {
      id: 4,
      name: "营业执照",
      href: "https://zzlz.gsxt.gov.cn/businessCheck/verifKey.do?showType=p&amp;serial=91110105MA003A481G-SAIC_SHOW_10000091110105MA003A481G1679980493194&amp;signData=MEYCIQDz/atwLJBCy8/tQW9ebGuoA+1etBYL/KpjQTCJL2bTFQIhAKgrAzJOcfltfxrKALrq8ayM/pVNSuKJg6N2oy6Q40ps",
      endContent: "",
    },
  ],
  [
    {
      id: 0,
      name: "© 2023 Airbnb, Inc. All rights reserved.",
      href: "",
      endContent: " · ",
    },
    {
      id: 1,
      name: "条款",
      href: "https://www.airbnb.cn/help/article/2908",
      endContent: " · ",
    },
    {
      id: 2,
      name: "隐私政策",
      href: "https://www.airbnb.cn/help/article/3188",
      endContent: " · ",
    },
    {
      id: 3,
      name: "网站地图",
      href: "https://www.airbnb.cn/sitemaps/v2",
      endContent: " · ",
    },
    {
      id: 4,
      name: "",
      href: "",
      endContent: "全国旅游投诉渠道 12301",
    },
  ],
];

const AppFooter = memo(() => {
  useEffect(() => {}, []);

  return (
    <AppFooterWrapper>
      <div className="box">
        <div className="box-left">
          <div>
            <span>
              <a href="http://www.weibo.com/airbnb">
                <IconFootWeiBo />
              </a>
            </span>
          </div>
          <div>
            <span>
              <IconFootWeChat />
            </span>
          </div>

          <div>
            <span>
              <IconFootChn />
            </span>
          </div>
          <div>
            <span>简体中文 (CN)</span>
          </div>

          <div>
            <span>￥ CNY支持和资源</span>
          </div>
          <div>
            <IconFootSupport />
          </div>
        </div>

        <div className="box-right">
          {footerRightData.map((item) => {
            return (
              <div className="dir">
                {item.map((listItem) => {
                  return (
                    <>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="{item.href}"
                      >
                        {listItem.name}
                      </a>
                      <span>{listItem.endContent}</span>
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ height: "70px" }}></div>
    </AppFooterWrapper>
  );
});

export default AppFooter;
