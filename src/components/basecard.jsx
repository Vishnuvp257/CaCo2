import React from "react";

export function BaseCard(props) {
  return (
    <div id="pricing" style={{ padding: 24, paddingLeft: "5rem" }}>
      <h2 style={{ marginBottom: 30 }}>Pricing</h2>
      <div
        style={{
          overflow: "hidden",
          margin: "0 -24px 12px",
          height: "fit-content",
        }}
      >
        <div
          className="row"
          style={{
            whiteSpace: props.stack ? "normal" : "nowrap",
            overflowX: "scroll",
            overflowY: "hidden",
            paddingRight: 24 - props.spacing,
            paddingLeft: 24 - props.spacing,
            marginBottom: -15,
          }}
        >
          {Array(props.noOfCards ? props.noOfCards : 1)
            .fill(1)
            .map((_, i) => {
              return (
                <div
                  className="card"
                  style={{
                    width: `${100 / props.visible}%`,
                    display: "inline-block",
                    position: "relative",
                    paddingBottom: props.stack ? 12 : 0,
                  }}
                  key={i}
                >
                  <div
                    style={{
                      paddingRight: props.spacing,
                      paddingLeft: props.spacing,
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        paddingTop: `${100 * props.ratio}%`,
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                        }}
                        children={props.children}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
