import Card from "./Card";

export default function UsersGrid() {
  const users = [
    {
      name: "Aashish",
      username: "@aashish01",
      image: "https://dummyimage.com/300x200/ddd/000",
    },
    {
      name: "Rohit",
      username: "@rohitdev",
      image: "https://dummyimage.com/300x200/ccc/000",
    },
    {
      name: "Suman",
      username: "@sumanjs",
      image: "https://dummyimage.com/300x200/bbb/000",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {users.map((user, i) => (
        <Card
          key={i}
          image={user.image}
          title={user.name}
          subtitle={user.username}
        />
      ))}
    </div>
  );
}
