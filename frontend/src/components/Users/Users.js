import { getUsers } from "../../services/user";
import { useEffect, useState } from "react";
import UserTable from "../Tables/UserTable";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsersData = async () => {
            await getUsers().then(response => setUsers(response))
        }

        fetchUsersData()
    }, [])

    console.log("users", users)

    return (
        <div>
            <h2>Users List</h2>
            <UserTable data={users} />
        </div>
    )
}

export default Users
