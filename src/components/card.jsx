import React from "react";

const CardDescription = (props) => {
  return (
    <div className="card-description">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

const CardBilling = (props) => {
  return (
    <div className={`card-billing card-billing-${props.bg}`}>
      <p>
        <strong className="price">₹ {props.price}</strong>
        <strong> / year</strong>
      </p>
    </div>
  );
};

const CardFeatures = (props) => {
  return (
    <div className="card-features">
      <ul>
        {props.data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

const CardAction = (props) => {
  return (
    <div className="card-action">
      <button onClick={props.clickMe}>BUY NOW</button>
    </div>
  );
};

export function PricingCard(props) {
  return (
    <div className={`card ${props.type}`}>
      {props.mostPopular ? (
        <span className="most-popular">Combo 🎁</span>
      ) : null}
      <CardDescription title={props.title} description={props.description} />
      <CardBilling
        price={props.price}
        recurrency={props.recurrency}
        type={props.type}
        bg={props.bg}
      />
      <CardFeatures data={props.data} />
      <CardAction clickMe={(e) => e.preventDefault()} />
    </div>
  );
}
