import React from "react";
import Toggler from "../../withToggle/WithToggle";
import hoc from "../hoc1/Hoc1";
import withFetch from "../withFetch/WithFetch";
import withLog from "../withLog/WithLog";


const Test = () => {
  return (
    <Toggler>
      {( isOpen, onToggle ) => (
        <>
          <button type='button' onClick={onToggle}>
            {isOpen ? "Hide" : "Show"}
          </button>
          {isOpen && <p>Vestibulum suscipit nulla quis orci.</p>}
        </>
      )}
    </Toggler>
  );
};

export default Test;

// export default hoc(Test);
// export default withLog(Test);
// export default withFetch("https://jsonplaceholder.typicode.com/posts")(Test);
