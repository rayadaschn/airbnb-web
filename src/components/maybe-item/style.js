import styled from "styled-components";

const MaybeItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;
  padding: 8px;

  .inner {
    position: relative;
    border-radius: 3px;
    overflow: hidden;

    .cover {
      width: 100%;
    }

    /* 底部遮罩 */
    .bg-cover {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 60%;
      /* 从透明到黑色渐变 */
      background-image: linear-gradient(rgba(0, 0, 0, 0), black 100%);
    }

    .inner-info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;

      .city {
        font-size: 18px;
      }
      .price {
        font-size: 14px;
        margin-top: 8px;
      }
    }
  }
`;

export default MaybeItemWrapper;
