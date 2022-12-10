import React from "react";

import { PricingCard } from "./card";

export function BaseCard(props) {
  console.log(props);
  return (
    <div id="pricing" style={{ padding: 24, paddingLeft: "5rem" }}>
      <h2>Pricing</h2>

      <div className="pricing-container">
        {props.data?.map((item, i) => (
          <PricingCard key={i} {...item} />
        ))}
        {/* <PricingCard />
        <PricingCard />
        <PricingCard /> */}
      </div>
    </div>
  );
}
