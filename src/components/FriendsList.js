import React from "react";

const FriendsList = (props) => {
    console.log(props.friends, "found here")
        return(
        <div className = "friendsDiv">
        {props.friends.map(friends => (
            <div id ={friends.id} key={friends.id}>
                <div>
                    <p>{friends.name}</p>
                    <p>{friends.phone}</p>
                    <p>{friends.anniversary}</p>
                    <p>{friends.birthday}</p>
                    <p>{friends.graduation}</p>
                    <p>{friends.wedding}</p>
                    <p>{friends.comment}</p>
                </div>
                <button onClick={(event, id=friends.id) => props.delete(event, id)}>Remove Reminder</button>
            </div>
        ))}
        </div>
    );
}

export default FriendsList;