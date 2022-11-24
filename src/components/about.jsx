export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        {/* <div className="row"> */}
        {/* <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img" className="img-responsive" alt="" />{" "}
          </div> */}
        <div className="col-xs-12 col-md-11">
          <div className="about-text">
            <h2>About Us</h2>
            <h4>{props.data ? props.data.head : "loading..."}</h4>
            <p>{props.data ? props.data.paragraph : "loading..."}</p>
            <h5>{props.data ? props.data.foot : "loading..."}</h5>

            <div className="about-features">
              <div className="about-chooseus">
                <h3>Why Choose Us?</h3>

                <div>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
              <div className="about-unlocking">
                <h3>Unlocking Soon</h3>

                <div>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
