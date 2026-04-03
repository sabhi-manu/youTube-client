import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { uploadVideoApi } from "../../api/videoApi/getVideosApi";

const UploadVideoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("video", data.video[0]);
      formData.append("thumbnail", data.thumbnail[0]);
      formData.append("title", data.title);
      formData.append("description", data.description);

      const response = await uploadVideoApi(formData);
      console.log("processing  video upload  data: ==>", response);
      const video = response.data.data;

      console.log("video created:", video);

      localStorage.setItem("processingVideo", JSON.stringify(video));
      alert("Video processing started!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
      className="max-w-3xl mx-auto bg-black border border-gray-700 p-6 rounded-lg "
    >
      <h2 className="text-xl font-semibold mb-4">Upload Videos</h2>

      {/* Video Upload */}
      <div className="mb-4 text-white">
        <label className="block mb-1 text-sm">Video *</label>

        <input
          type="file"
          accept="video/*"
          {...register("video", {
            required: "Video file is required",
          })}
          className="border p-2 w-full   rounded"
        />

        {errors.video && (
          <p className="text-red-500 text-sm mt-1">{errors.video.message}</p>
        )}
      </div>

      {/* Thumbnail */}
      <div className="mb-4 text-white">
        <label className="block mb-1 text-sm">Thumbnail *</label>
        <input
          type="file"
          accept="image/*"
          {...register("thumbnail", {
            required: "Thumbnail is required",
          })}
          className="border p-2 w-full"
        />
        {errors.thumbnail && (
          <p className="text-red-500 text-sm">{errors.thumbnail.message}</p>
        )}
      </div>

      {/* Title */}
      <div className="mb-4 text-white">
        <label className="block mb-1 text-sm">Title *</label>
        <input
          placeholder="Title .."
          type="text"
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters",
            },
          })}
          className="border p-2 w-full"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      {/* Description */}
      <div className="mb-6 text-white">
        <label className="block mb-1 text-sm">Description</label>
        <textarea
          placeholder="Description....."
          rows="3"
          {...register("description")}
          className="border p-2 w-full"
        />
      </div>

      {/* Action */}
      <div className="flex justify-around">
        <Link to={"/"}>
          <button
            type="button"
            className="px-6 py-2 bg-purple-600 rounded text-white
            hover:bg-purple-700 disabled:opacity-50"
          >
            Home
          </button>
        </Link>

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-purple-600 rounded text-white
            hover:bg-purple-700 disabled:opacity-50"
        >
          {isSubmitting ? "Uploading..." : "Upload"}
        </button>
      </div>
    </form>
  );
};

export default UploadVideoForm;
