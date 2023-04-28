import style from "styled-components";

export const CenterWrapper = style.div`
  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow};

    font-size: 15px;
    font-weight: 400;
    
    .left {
      padding: 0 14px;
      color: #222;
      white-space: nowrap;
    }
    .center, .right {
      padding: 0 0 0 10px;
      color: #717171;
      border-left: 1px solid ;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${(props) => props.theme.color.primaryColor};
    }
  }
`;
