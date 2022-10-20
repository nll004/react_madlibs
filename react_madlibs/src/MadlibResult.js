import React from "react";

function MadlibResult({inputs} ){

    return (
        <p> The {inputs.adjective}, {inputs.noun} {inputs.verb} the {inputs.noun2} for the rest of the day.</p>
    )
}

export default MadlibResult;
