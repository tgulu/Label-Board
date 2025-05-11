import React, { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageCHange = (event) => {
    const file = event.target.files[0];
    if (file) {
      //update the image state
      setImage(file);

      // Generate preview URL from the file
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };
  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageCHange}
        className="hidden"
      />

      {!image ? (
        <div className="w-20 h-20 relative flex items-center justify-center bg-blue-100 rounded-3xl cursor-pointer">
          <LuUser className="text-4xl text-primary" />
          <button
            type="button"
            className="w-8 h-8 flex items-center bg-primary justify-center text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer"
            onClick={onChooseFile}
          >
            <LuUpload />
          </button>
        </div>
      ) : (
        <div className="relative">
          <img
            src={previewUrl}
            alt="Profile photo"
            className="w-24 h-24 object-cover rounded-3xl"
          />
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-red-500 text-white absolute -bottom-1 -right-1 rounded-full"
            onClick={handleRemoveImage}
          >
            <LuTrash className="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
