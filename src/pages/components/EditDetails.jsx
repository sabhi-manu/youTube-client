import { useState } from "react";
import { updateProfileApi } from "../../api/user.api";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../../features/authSlice";

const EditDetails = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
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

        const { fullName, email } = formData;

        // 🔹 Validation
        if (!fullName.trim()) {
            return setError("Full name is required");
        }

        if (!email.trim()) {
            return setError("Email is required");
        }

       

        try {
            setLoading(true);
            let response = await updateProfileApi(formData)

            console.log("response data===>",response)
              dispatch(loginUser(response.data.data));
            toast.success("Registration successful 🎉");
        } catch (err) {
            setError("Something went wrong. Please try again.");
            toast.error("Registration failed ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2 className="text-lg font-semibold mb-3">Edit Account Details</h2>

            {error && (
                <p className="text-red-500 text-sm mb-2">{error}</p>
            )}

            <input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="border p-2 w-full mb-2"
            />

            <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full mb-3"
            />

            <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-purple-600 text-white py-2 w-full rounded
          hover:bg-purple-700 disabled:opacity-50"
            >
                {loading ? "Updating..." : "Update"}
            </button>
        </div>
    );
};

export default EditDetails;
