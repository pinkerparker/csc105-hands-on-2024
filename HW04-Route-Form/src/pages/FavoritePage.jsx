import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Navbar from "../components/Navbar";

const favSchema = z.object({
  number: z.coerce.number().min(1, "Number must be between 1 and 100").max(100, "Number must be between 1 and 100"),
  q: z.enum(["love", "like"], { required_error: "Please select a query type" }),
  size: z.enum(["small", "medium", "large"], { required_error: "Please select a size" }),
});

function FavouritesPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    number: "",  
    q: "",
    size: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = favSchema.safeParse(formData);
    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors({
        number: formattedErrors.number?._errors[0] || "",
        q: formattedErrors.q?._errors[0] || "",
        size: formattedErrors.size?._errors[0] || "",
      });
    } else {

    navigate(`/fav/${formData.number}?q=${formData.q}&size=${formData.size}`);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-2xl font-bold mb-4">This is the Favourites Page</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-pink-100 p-8 rounded-lg w-96  justify-center items-center flex flex-col m-5"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Number (1-100):</label>
            <input
              type="number"
              name="number"
              value={Number(formData.number)}
              onChange={handleChange}
              className="w-60 p-2 border rounded mt-1"
              min="1"
              max="100"
            />
            {errors.number && <p className="text-red-500 text-sm w-50">{errors.number}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Query:</label>
            <select name="q" value={formData.q} onChange={handleChange} className="w-60 p-2 border rounded mt-1">
              <option value="love">Love</option>
              <option value="like">Like</option>
            </select>
            {errors.q && <p className="text-red-500 text-sm w-50">{errors.q}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Size:</label>
            <select name="size" value={formData.size} onChange={handleChange} className="w-60 p-2 border rounded mt-1">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            {errors.size && <p className="text-red-500 text-sm w-50">{errors.size}</p>}
          </div>

          <button type="submit" className="bg-blue-400 text-white p-2 mt-5 rounded-xl hover:bg-blue-300">
            Go to Favourite Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default FavouritesPage;
