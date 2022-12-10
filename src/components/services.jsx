export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We Are On The Mission To Educate 25000 NEET Students In And Across
            TamilNadu.
          </p>
        </div>
        <div className="row section-row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-8">
                  <img
                    className="service-img"
                    src={`./../../img/${d.image}`}
                    alt={`${d.image}`}
                  />
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
