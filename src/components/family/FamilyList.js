import React from "react";


const FamilyList = (props) => {
    console.log(props.family, "found here")
    console.log( props)
        return(
        <div className = "familyDiv">
        {props.family && props.family.map(family => (
            <div id ={family.id} key={family.id}>
                <div>
                    <p>{family.name}</p>
                    <p>{family.phone}</p>
                    <p>{family.anniversary}</p>
                    <p>{family.birthday}</p>
                    <p>{family.graduation}</p>
                    <p>{family.wedding}</p>
                    <p>{family.comment}</p>
                </div>
                <button onClick={(event, id=family.id) => props.delete(event, id)}>X</button>
            </div>
        ))}
        </div>
    );
}

export default (FamilyList);