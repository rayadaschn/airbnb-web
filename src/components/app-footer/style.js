import styled from "styled-components";

const AppFooterWrapper = styled.div`
  .box {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 14px 40px;
    border-top: 1px solid #ddd;

    .box-left {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      white-space: nowrap;
      max-width: 400px;
      overflow: hidden;

      font-weight: 600;
      line-height: 10px;
      span {
        display: inline-block;
        margin-right: 6px;
        line-height: 20px;
      }
    }

    .box-right {
      color: #b0b0b0;
      font-size: 12px;
      line-height: 16px;
      align-items: end;

      .dir {
        text-align: right;
      }

      a {
        color: inherit;
        text-decoration: none;
        margin-left: 2px;
      }
      a:hover {
        color: black;
        text-decoration: underline;
      }
    }
  }
`;

export default AppFooterWrapper;
