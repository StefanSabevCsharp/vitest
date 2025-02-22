import { useEffect, useState } from "react";

interface userProfileProps {
    userId: number;
}
 
export default function UserProfile({userId} : userProfileProps) {
    const [ user, setUser] = useState<any | null>(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.error(error));

    }, [userId]);

    if(!user) {
        return <p>Loading...</p>
    }
  return (
    <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
    </div>
    
  );
}