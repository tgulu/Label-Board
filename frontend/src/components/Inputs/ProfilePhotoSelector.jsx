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
    <div className="">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageCHange}
        className="hidden"
      />

      {!image ? (
        <div className="">
          <LuUser className="" />
          <button type="button" className="" onClick={onChooseFile}>
            <LuUpload className="" />
          </button>
        </div>
      ) : (
        <div className="">
          <img src={previewUrl} alt="Profile" className="" />
          <button type="button" className="" onClick={handleRemoveImage}>
            <LuTrash className="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
