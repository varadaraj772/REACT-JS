import { useParams } from "react-router-dom";
function User() {
  const { id } = useParams();
  return (
    <div className=" text-center text-orange-200 text-3xl bg-rose-950 p-4">
      User :{id}{" "}
    </div>
  );
}

export default User;
