import { useLoaderData } from "react-router-dom";


const Coffee = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className="w-52">
      <img src={data.photo} alt="" />
      <p>{data.name}</p>
      <p>{data.type}</p>
      <p>{data.test}</p>
    </div>
  );
};

export default Coffee;