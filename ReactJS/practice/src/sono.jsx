import React, {useContext} from "react";
function Son(){
    const value = useContext(context);
    return (
        <div>
            <p>{value}</p>
        </div>
        );
}