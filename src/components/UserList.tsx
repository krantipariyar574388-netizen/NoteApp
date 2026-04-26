import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        console.log("Fetched Users:", data); // Printing to console
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err.message); // Printing error to console
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <ul className="mt-4 space-y-2">
      {users.slice(0, 5).map((user: any) => (
        <li key={user.id} className="p-2 border-b">{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;