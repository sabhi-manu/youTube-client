import { useState } from "react";

const ChangeCoverImage = () => {
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setError("");

    if (!file) return;

    // 🔹 Validation
    if (!file.type.startsWith("image/")) {
      return setError("Please select a valid image file");
    }

    if (file.size > 5 * 1024 * 1024) {
      return setError("Cover image must be less than 5MB");
    }

    setCoverImage(file);
  };

  const handleSubmit = async () => {
    if (!coverImage) {
      return setError("Please select a cover image");
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("coverImage", coverImage);

      // 🔹 API call (example)
      // await api.put("/users/change-cover", formData);

      console.log("Uploading cover image:", coverImage);

      alert("Cover image updated successfully!");
    } catch (err) {
      setError("Failed to upload cover image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Change Cover Image</h2>

      {error && (
        <p className="text-red-500 text-sm mb-2">{error}</p>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border p-2 w-full mb-3"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-purple-600 text-white py-2 w-full rounded
          hover:bg-purple-700 disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload Cover"}
      </button>
    </div>
  );
};

export default ChangeCoverImage;
