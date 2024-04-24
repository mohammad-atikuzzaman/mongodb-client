import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const MyItems = () => {
  const loaderData = useLoaderData();
  const [data, setData] = useState(loaderData);

  const handleDelete =(id)=>{
    console.log(id)
    fetch(`http://localhost:4000/items/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((ddata) => {
        console.log(ddata);
        const remainingData = data.filter(d => d._id !== id)
        setData(remainingData)
      });
  }

  return (
    <div>
      <h2>this is my items : {data.length}</h2>

      <div className="grid grid-cols-3">
        {data.map((d) => (
          <div className="w-48" key={d._id}>
            <img src={d.photo} />
            <p>{d.name}</p>
            <p>{d.type}</p>
            <p>{d.test}</p>
            <div className="grid grid-cols-3 gap-1">
              <Link to={`/myItems/${d._id}`}>
                <button className="btn btn-primary">view</button>
              </Link>
              <Link to={`/edit/${d._id}`}>
                <button className="btn btn-secondary">Edit</button>
              </Link>
              <button onClick={()=>handleDelete(d._id)} className="btn btn-error">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
