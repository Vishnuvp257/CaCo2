export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.unacademyapp"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  <img
                    src="img/playstore.png"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      marginRight: "1rem",
                    }}
                    alt=""
                  />
                  Download
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
