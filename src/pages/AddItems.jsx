const AddItems = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffeeName = form.coffeeName.value;
    const coffeeType = form.coffeeType.value;
    const coffeeTest = form.test.value;
    const photo = form.photo.value;
    const item = { coffeeName, coffeeType, coffeeTest, photo };
    console.log(item);

    fetch("http://localhost:4000/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset()
      });
  };

  return (
    <div className="flex flex-col p-6 rounded-md mx-auto sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Add Coffe</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="space-y-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="coffee-name" className="block mb-2 text-sm">
              Coffee Name
            </label>
            <input
              type="text"
              name="coffeeName"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="coffee-type" className="block mb-2 text-sm">
              Coffee Type
            </label>
            <input
              type="text"
              name="coffeeType"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="test" className="block mb-2 text-sm">
              Test
            </label>
            <input
              type="text"
              name="test"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="photo-url" className="text-sm">
                Photo Url
              </label>
            </div>
            <input
              type="text"
              name="photo"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <input type="submit" value="Add coffee" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default AddItems;
