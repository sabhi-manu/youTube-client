import { useState } from "react";

const EditDetails = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
    });

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

        if (!/\S+@\S+\.\S+/.test(email)) {
            return setError("Enter a valid email");
        }

        try {
            setLoading(true);

            // 🔹 API call (example)
            // await api.put("/users/update-profile", formData);

            console.log("Submitting data:", formData);

            alert("Profile updated successfully!");
        } catch (err) {
            setError("Something went wrong. Please try again.");
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
