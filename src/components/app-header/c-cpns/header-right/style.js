import styled from "styled-components";

export const RightWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  margin-right: 32px;
  color: ${(props) => props.theme.text.primaryColor};

  .btns {
    display: flex;
    box-sizing: content-box;

    .btn {
      height: 18px;
      padding: 12px 15px;
      border-radius: 25px;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 76px;
    height: 42px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${(props) => props.theme.text.primaryColor};
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow};

    .panel {
      position: absolute;
      z-index: 2;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      color: #666;

      .top {
        border-bottom: 1px solid #ddd;
      }

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
    }
  }
`;
