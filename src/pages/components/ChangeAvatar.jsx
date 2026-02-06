import { useState } from "react";
import { updateAvatarApi } from "../../api/user.api";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../../features/authSlice";

const ChangeAvatar = () => {
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setError("");

    if (!file) return;

    // 🔹 Validation
    if (!file.type.startsWith("image/")) {
      return setError("Please select a valid image file");
    }

    // if (file.size > 2 * 1024 * 1024) {
    //   return setError("Image size must be less than 2MB");
    // }

    setAvatar(file);
  };

  const handleSubmit = async () => {
    if (!avatar) {
      return setError("Please select an image");
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("avatar", avatar);
let response = await updateAvatarApi(formData)

            console.log("response data===>",response)
              dispatch(loginUser(response.data.data));
            toast.success("avatar Update successful 🎉");
    } catch (err) {
      setError("Failed to upload avatar");
         toast.error(" Failed to update avatar ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Change Avatar</h2>

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
        {loading ? "Uploading..." : "Upload Avatar"}
      </button>
    </div>
  );
};

export default ChangeAvatar;
