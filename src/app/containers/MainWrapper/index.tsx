import React from "react";
import { getUsers, users } from "../../stores";
import { useStore } from "@nanostores/react";

export function MainWrapper() {
    const usersList = useStore(users);

    console.log(usersList);

    React.useEffect(() => {
        void getUsers();
    }, []);

    return <div>hello</div>;
}
