import PropTypes from "prop-types";
import React, { memo } from "react";
import HomeMaybeWrapper from "./style";
import MaybeItem from "@/components/maybe-item/index";
import SectionHeader from "@/components/section-header";
import ScrollView from "@/components/scroll-view";

const HomeMaybe = memo((props) => {
  const { infoData } = props;
  return (
    <HomeMaybeWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <MaybeItem itemData={item} key={item.city} />;
          })}
        </ScrollView>
      </div>
    </HomeMaybeWrapper>
  );
});

HomeMaybe.propTypes = {
  infoData: PropTypes.object,
};

export default HomeMaybe;
