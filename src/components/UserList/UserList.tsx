import { useState, useEffect } from "react";

export default function UserList() {
  const [users, setUsers] = useState<any[]>([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  
  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <div data-testid={"users-div"} key={user.id} className="user">
            {user.name}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
