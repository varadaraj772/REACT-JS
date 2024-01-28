import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className=" text-center text-orange-200 text-3xl bg-rose-950 p-4">
      Github followers : {data.followers}
    </div>
  );
}
export default Github;
export const getGitFollowers = async () => {
  const response = await fetch("https://api.github.com/users/varadaraj772");
  return response.json();
};
