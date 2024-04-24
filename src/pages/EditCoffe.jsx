import { useLoaderData } from "react-router-dom";

const EditCoffe = () => {
  const loaderData = useLoaderData()
  console.log(loaderData)
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const type = form.type.value;
    const test = form.test.value;
    const photo = form.photo.value;
    const data = { name, type, test, photo };
    console.log(data)

    fetch(`http://localhost:4000/items/${loaderData._id}`,{
      method: "PUT",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  };

  return (
    <div className="bg-slate-100 my-4 mx-auto">
      <form onSubmit={handleUpdate} className="bg-white mx-auto w-1/2 p-6 flex gap-3">
        <div>
          <label htmlFor="coffeeName">Coffee Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="coffeeName"
            className="border-2 rounded-lg"
          />
          <br />
          <label htmlFor="coffeeType">Coffee Type</label>
          <br />
          <input
            type="text"
            name="type"
            id="coffeeType"
            className="border-2 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="coffeeTest">Coffee Test</label>
          <br />
          <input
            type="text"
            name="test"
            id="coffeeTest"
            className="border-2 rounded-lg"
          />
          <br />
          <label htmlFor="coffeePhoto">Photo</label>
          <br />
          <input
            type="text"
            name="photo"
            id="coffeePhoto"
            className="border-2 rounded-lg"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Update" />
      </form>
    </div>
  );
};

export default EditCoffe;
