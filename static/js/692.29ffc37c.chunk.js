"use strict";(self.webpackChunkairbnb_web=self.webpackChunkairbnb_web||[]).push([[692],{2692:function(n,i,e){e.r(i),e.d(i,{default:function(){return G}});var t,r,o,s,l,c,a,d,f=e(2791),x=e(168),m=e(7691),u=m.ZP.div(t||(t=(0,x.Z)(["\n  > .content {\n    width: 1032px;\n    margin: 0 auto;\n\n    > div {\n      margin-top: 30px;\n    }\n  }\n"]))),p=e(5048),h=e(908),v=m.ZP.div(r||(r=(0,x.Z)(["\n  height: 529px;\n  background: url(",") center/cover;\n"])),e(3109)),g=e(184),b=(0,f.memo)((function(n){return(0,g.jsx)(v,{})})),j=m.ZP.div(o||(o=(0,x.Z)(["\n  margin-top: 30px;\n"]))),w=m.ZP.div(s||(s=(0,x.Z)(["\n  color: #222;\n\n  .title {\n    font-size: 22px;\n    font-width: 700;\n    margin-bottom: 16px;\n  }\n\n  .subtitle {\n    font-size: 16px;\n    margin-bottom: 20px;\n  }\n"]))),N=(0,f.memo)((function(n){var i=n.title,e=n.subtitle;return(0,g.jsxs)(w,{children:[(0,g.jsx)("h2",{className:"title",children:i}),!!e&&(0,g.jsx)("div",{className:"subtitle",children:e})]})})),y=m.ZP.div(l||(l=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -8px;\n"]))),Z=e(9608),k=m.ZP.div(c||(c=(0,x.Z)(["\n  flex-shrink: 0;\n  box-sizing: border-box;\n  width: ",";\n  padding: 8px;\n\n  .inner {\n    width: 100%;\n  }\n\n  .cover {\n    position: relative;\n    box-sizing: border-box;\n    padding: 66.66% 8px 0;\n    border-radius: 3px;\n    overflow: hidden;\n\n    img {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .desc {\n    margin: 10px 0 5px;\n    font-size: 12px;\n    font-weight: 700;\n    color: ",";\n  }\n\n  .name {\n    font-size: 16px;\n    font-weight: 700;\n\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n\n  .price {\n    margin: 8px 0;\n  }\n\n  .bottom {\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    font-weight: 600;\n    color: ",";\n\n    .count {\n      margin: 0 2px 0 4px;\n    }\n\n    .MuiRating-decimal {\n      margin-right: -2px;\n    }\n  }\n"])),(function(n){return n.itemWidth}),(function(n){return n.verifyColor}),(function(n){return n.theme.text.primaryColor})),P=(0,f.memo)((function(n){var i,e,t,r=n.itemData,o=n.itemWidth;return(0,g.jsx)(k,{verifyColor:(null===r||void 0===r||null===(i=r.verify_info)||void 0===i?void 0:i.text_color)||"#39576a",itemWidth:o,children:(0,g.jsxs)("div",{className:"inner",children:[(0,g.jsx)("div",{className:"cover",children:(0,g.jsx)("img",{src:r.picture_url,alt:"\u56fe\u7247"})}),(0,g.jsx)("div",{className:"desc",children:r.verify_info.messages.join(" \xb7 ")}),(0,g.jsx)("div",{className:"name",children:r.name}),(0,g.jsxs)("div",{className:"price",children:["\uffe5",r.price,"/\u665a"]}),(0,g.jsxs)("div",{className:"bottom",children:[(0,g.jsx)(Z.Z,{value:null!==(e=r.star_rating)&&void 0!==e?e:5,precision:.1,readOnly:!0,sx:{fontSize:"12px",color:"#00848A",marginRight:"-1px"}}),(0,g.jsx)("span",{className:"count",children:r.reviews_count}),r.bottom_info&&(0,g.jsxs)("span",{className:"extra",children:["\xb7",null===(t=r.bottom_info)||void 0===t?void 0:t.content]})]})]})})})),z=(0,f.memo)((function(n){var i,e=n.roomList,t=void 0===e?[]:e,r=n.itemWidth;return(0,g.jsx)(y,{children:null===(i=t.slice(0,8))||void 0===i?void 0:i.map((function(n){return(0,g.jsx)(P,{itemData:n,itemWidth:r},n.id)}))})})),_=e(6387),D=e(7689),I=m.ZP.div(a||(a=(0,x.Z)(["\n  display: flex;\n  margin-top: 10px;\n\n  .info {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n\n    font-size: 17px;\n    font-weight: 700;\n    color: ",";\n    \n    &:hover {\n      text-decoration: underline;\n    }\n\n    .text {\n      margin-right: 6px;\n    }\n  }\n"])),(function(n){return n.color})),C=(0,f.memo)((function(n){var i=n.name,e="\u663e\u793a\u5168\u90e8";i&&(e="\u663e\u793a\u66f4\u591a".concat(i,"\u623f\u6e90"));var t=(0,D.s0)();return(0,g.jsx)(I,{color:i?"#00848A":"#000",children:(0,g.jsxs)("div",{className:"info",onClick:function(){t("/entire")},children:[(0,g.jsx)("span",{className:"text",children:e}),(0,g.jsx)(_.Z,{})]})})})),W=(0,f.memo)((function(n){var i=n.infoData;return(0,g.jsxs)(j,{children:[(0,g.jsx)(N,{title:i.title,subtitle:i.subtitle}),(0,g.jsx)(z,{roomList:i.list,itemWidth:"25%"}),(0,g.jsx)(C,{})]})}));function S(n){return!!Object.keys(n).length}var R,E,L=m.ZP.div(d||(d=(0,x.Z)(["\n  .longfor-list {\n    display: flex;\n    margin: 0 -8px;\n  }\n"]))),A=m.ZP.div(R||(R=(0,x.Z)(["\n  flex-shrink: 0;\n  width: 20%;\n  padding: 8px;\n\n  .inner {\n    position: relative;\n    border-radius: 3px;\n    overflow: hidden;\n\n    .cover {\n      width: 100%;\n    }\n\n    /* \u5e95\u90e8\u906e\u7f69 */\n    .bg-cover {\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      height: 60%;\n      /* \u4ece\u900f\u660e\u5230\u9ed1\u8272\u6e10\u53d8 */\n      background-image: linear-gradient(rgba(0, 0, 0, 0), black 100%);\n    }\n\n    .inner-info {\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 32px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      color: #fff;\n\n      .city {\n        font-size: 18px;\n      }\n      .price {\n        font-size: 14px;\n        margin-top: 8px;\n      }\n    }\n  }\n"]))),O=(0,f.memo)((function(n){var i=n.itemData;return(0,g.jsx)(A,{children:(0,g.jsxs)("div",{className:"inner",children:[(0,g.jsx)("img",{className:"cover",src:i.picture_url,alt:""}),(0,g.jsx)("div",{className:"bg-cover"}),(0,g.jsxs)("div",{className:"inner-info",children:[(0,g.jsx)("div",{className:"city",children:i.city}),(0,g.jsxs)("div",{className:"price",children:["\u5747\u4ef7 ",i.price]})]})]})})})),M=e(9439),U=m.ZP.div(E||(E=(0,x.Z)(["\n  position: relative;\n  padding: 8px 0;\n\n  .scroll {\n    overflow: hidden;\n\n    .scroll-content {\n      display: flex;\n      transition: transform 250ms ease;\n    }\n  }\n\n  .control {\n    position: absolute;\n    z-index: 9;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    text-align: center;\n    border-width: 2px;\n    border-style: solid;\n    border-color: #fff;\n    background: #fff;\n    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);\n    cursor: pointer;\n\n    &.left {\n      left: 0;\n      top: 50%;\n      transform: translate(-50%, -50%);\n    }\n\n    &.right {\n      right: 0;\n      top: 50%;\n      transform: translate(50%, -50%);\n    }\n  }\n"]))),q=e(3305),B=(0,f.memo)((function(n){var i=(0,f.useState)(0),e=(0,M.Z)(i,2),t=e[0],r=e[1],o=(0,f.useRef)(),s=(0,f.useRef)();function l(n){var i=n?t+1:t-1;r(i);var e=o.current.children[i].offsetLeft;o.current.style.transform="translate(-".concat(e,"px)")}return(0,f.useEffect)((function(){var n=o.current.scrollWidth,i=o.current.clientWidth;s.current=n-i}),[n.children]),(0,g.jsxs)(U,{children:[(0,g.jsx)("div",{className:"control left",onClick:function(){return l(!0)},children:(0,g.jsx)(q.D6,{})}),(0,g.jsx)("div",{className:"control right",onClick:function(){return l(!1)},children:(0,g.jsx)(q.Ec,{})}),(0,g.jsx)("div",{className:"scroll",children:(0,g.jsx)("div",{className:"scroll-content",ref:o,children:n.children})})]})})),F=(0,f.memo)((function(n){var i=n.infoData;return(0,g.jsxs)(L,{children:[(0,g.jsx)(N,{title:i.title,subtitle:i.subtitle}),(0,g.jsx)("div",{className:"longfor-list",children:(0,g.jsx)(B,{children:i.list.map((function(n){return(0,g.jsx)(O,{itemData:n},n.city)}))})})]})})),G=function(){var n=(0,p.v9)((function(n){return{longforInfo:n.home.longforInfo,goodPriceInfo:n.home.goodPriceInfo,highScoreInfo:n.home.highScoreInfo}}),p.wU),i=n.longforInfo,e=n.goodPriceInfo,t=n.highScoreInfo,r=(0,p.I0)();return(0,f.useEffect)((function(){r((0,h.d7)())}),[r]),(0,g.jsxs)(u,{children:[(0,g.jsx)(b,{}),(0,g.jsxs)("div",{className:"content",children:[S(i)&&(0,g.jsx)(F,{infoData:i}),S(e)&&(0,g.jsx)(W,{infoData:e}),S(t)&&(0,g.jsx)(W,{infoData:t})]})]})}},3109:function(n,i,e){n.exports=e.p+"static/media/cover_01.293232bc7bb8539118a8.jpeg"}}]);
//# sourceMappingURL=692.29ffc37c.chunk.js.map