import PropTypes from "prop-types";
import React, { memo } from "react";
import SectionRoomWrapper from "./style";
import RoomItem from "../roomItem";

const SectionRoom = memo((props) => {
  const { roomList = [], itemWidth } = props;
  return (
    <SectionRoomWrapper>
      {roomList.slice(0, 8)?.map((item) => {
        return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id} />;
      })}
    </SectionRoomWrapper>
  );
});

SectionRoom.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRoom;
