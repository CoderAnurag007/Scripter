export default function About(props) {
  return (
    <>
      <div className="container " style={props.aboutstyle}>
        <h2 className="textformbox">About Us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header " id="headingOne">
              <button
                style={props.style}
                className="accordion-button "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>What is Text Manipulator</strong>
              </button>
            </h2>
            <div
              style={props.style}
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Text Manipulator is a Web app </strong> that can be used
                to change text styles , remove spaces, converting lowercase and
                converting uppercase etc. features are provided by this website
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={props.style}
                className="accordion-button collapsed bt2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Why Text Manipulator
              </button>
            </h2>
            <div
              style={props.style}
              id="collapseTwo"
              className="accordion-collapse collapse "
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                style={props.style}
                className="accordion-button collapsed "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              style={props.style}
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
