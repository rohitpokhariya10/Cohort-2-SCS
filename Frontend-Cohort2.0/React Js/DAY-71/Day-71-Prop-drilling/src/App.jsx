import Card from "./components/Card";
//App.jsx 👉 Parent
//Card.jsx 👉 Child
const users = [
  {
    id: 1,
    name: "Rohit Pokhariya",
    role: "Frontend Developer",
    likes: "70.1k",
    posts: "828",
    views: "342.9k",
    profileImage:
      "https://i.pinimg.com/736x/87/84/94/87849407bbd923eaeb18a8f22863a18b.jpg",
  },
  {
    id: 2,
    name: "Aman Verma",
    role: "UI Designer",
    likes: "55.2k",
    posts: "412",
    views: "210k",
    profileImage:
      "https://i.pinimg.com/736x/b9/ce/fb/b9cefba0d63d322c1519837f9fb6c7e3.jpg",
  },
  {
    id: 3,
    name: "Neha Sharma",
    role: "Product Manager",
    likes: "89k",
    posts: "990",
    views: "500k",
    profileImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  }
];

const App = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-wrap gap-6 items-center justify-center p-10">
      {users.map((user) => (
        //Card ek React component hai
        //Left side: user---->Ye prop ka naam hai

        //Right side: {user}--->Ye variable hai (JS variable)--->Usually ye map() ke andar se aata hai
        

        <Card  users={user} />
      ))}
    </div>
  );
};

export default App;
