import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";
import { useHistory } from 'react-router-dom';

export default () => {
    const [_, setUser] = useContext(UserContext);
    const history = useHistory();
    
    setUser({});
    history.push("/");
    return (
        <div>
        </div>
    );
};