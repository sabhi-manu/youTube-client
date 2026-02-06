import { useState } from "react";
import { toast } from "react-toastify";
import { changePasswordApi } from "../../api/user.api";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/authSlice";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });
 const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setError("");

    const { oldPassword, newPassword } = formData;

    // 🔹 Validation
    if (!oldPassword || !newPassword) {
      return setError("Both fields are required");
    }

    if (oldPassword === newPassword) {
      return setError("New password must be different from old password");
    }

    try {
      setLoading(true);

     let response = await changePasswordApi(formData)

 console.log("response data===>",response)
       dispatch(loginUser(response.data.data));
       toast.success("Password update successful 🎉");
    } catch (err) {
      setError("Failed to update password. Please try again.");
      toast.error(" Failed to update  ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Change Password</h2>

      {error && (
        <p className="text-red-500 text-sm mb-2">{error}</p>
      )}

      <input
        type="password"
        name="oldPassword"
        placeholder="Old Password"
        value={formData.oldPassword}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <input
        type="password"
        name="newPassword"
        placeholder="New Password"
        value={formData.newPassword}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-purple-600 text-white py-2 w-full rounded
          hover:bg-purple-700 disabled:opacity-50"
      >
        {loading ? "Updating..." : "Update Password"}
      </button>
    </div>
  );
};

export default ChangePassword;
