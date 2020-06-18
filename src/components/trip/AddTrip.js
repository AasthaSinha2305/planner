import React from 'react'

export const AddTrip = ({AddNewTrip}) => {
    let date, place, type;
    const submit = (e) => {
        e.preventDefault();

        const obj = {
            date: date.value,
            place: place.value,
            type: type.value
        }
        AddNewTrip(obj);
        date.value =place.value=type.value="";
    }
    return(
        <div className="form-container">
            <form onSubmit={submit} className="form black-container">
                <label>
                    <h3>Add a trip</h3>
                    <br/>
                    <br/>
                    <br/>
                </label>
                <label>
                    Date : <br/>
                    <input id="date" type="date" required ref={(input) =>(date = input)} />
                </label>

                <label>
                    Place : <br/>
                    <input id="place" type="text" required ref={(input) =>(place = input)} />
                </label>

                <label>
                    Type : <br/>
                    <select ref={(input) => (type=input)}>
                        <option value="Trek">Trek</option>
                        <option value="Family Trip">Family Trip</option>
                        <option value="Office Trip">Office Trip</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};