import ChangeAvatar from "./components/ChangeAvatar";
import ChangeCoverImage from "./components/ChangeCoverImage";
import ChangePassword from "./components/ChangePassword";
import EditDetails from "./components/EditDetails";


const EditProfileModal = ({ activeEdit, onClose }) => {
  if (!activeEdit) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] p-5 rounded-lg relative">

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl"
        >
          ✕
        </button>

        {activeEdit === "details" && <EditDetails />}
        {activeEdit === "password" && <ChangePassword />}
        {activeEdit === "avatar" && <ChangeAvatar />}
        {activeEdit === "cover" && <ChangeCoverImage />}

      </div>
    </div>
  );
};

export default EditProfileModal;
