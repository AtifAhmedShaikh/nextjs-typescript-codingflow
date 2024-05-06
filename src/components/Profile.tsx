"use client";
const Profile = ({ path }: { path: string }) => {
  const handleClick = () => {
    console.log(path);
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Profile;
