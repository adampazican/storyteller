import React, { useState } from 'react';
import {User} from "../types";

const UserContext = React.createContext([{}, () => {}]);

const UserProvider = (props: any) => {
    const [state, setState] = useState({} as User);
    return (
        <UserContext.Provider value={[state, setState]}>
            {props.children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };