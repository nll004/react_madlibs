import React, {useState} from "react";
import MadlibForm from "./MadlibForm";
import MadlibResult from "./MadlibResult";


function Madlib(){
    const [madlibInputs, setMadlibInputs] = useState();

    if(madlibInputs){
        return (
            <div>
                <h1>Madlibs</h1>
                <MadlibResult noun={madlibInputs.noun} inputs={madlibInputs}/>
                <button onClick={()=> setMadlibInputs(null)}> Restart </button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Madlibs</h1>
                <p>Enter responses for your results</p>
                <MadlibForm submit={setMadlibInputs} />
            </div>
        )
    }

}

export default Madlib;
