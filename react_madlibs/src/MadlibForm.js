import React, { useState } from "react";

function MadlibForm({submit}){
    const [formData, setFormData] = useState();

    function handleChange(evt){
        const {name, value}= evt.target;
        setFormData( data =>({...data, [name]: value }) );
    };

    function handleSubmit(evt){
        evt.preventDefault();
        submit(formData);
        evt.target.reset()
    }

    return (
        <div className="Madlib-form-center">
            <form onSubmit={handleSubmit}>
                <input  onChange={handleChange}
                        type='text'
                        name="noun"
                        placeholder='Noun 1'
                        required>
                </input>
                <input  onChange={handleChange}
                        type='text'
                        name="noun2"
                        placeholder='Noun 2'
                        required>
                </input>
                <input  onChange={handleChange}
                        type='text'
                        name="verb"
                        placeholder='Past tense verb'
                        required>
                </input>
                <input  onChange={handleChange}
                        type='text'
                        name="adjective"
                        placeholder='Adjective'
                        required>
                </input>
                <button>Get Story</button>
            </form>
        </div>
    )
}

export default MadlibForm;
