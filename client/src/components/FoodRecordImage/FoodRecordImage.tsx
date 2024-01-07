import React, { Dispatch, MutableRefObject, useRef, useState } from "react";
import { usePostImage } from "../../hooks";
import { AddImg, SelectImage } from "./styles";

interface FoodRecordImageProps {
  imageRef?: MutableRefObject<HTMLImageElement | null>;
  imageUrl?: string;
  setImageUrl: Dispatch<React.SetStateAction<string>>;
}
export default function FoodRecordImage({
  imageRef,
  imageUrl,
  setImageUrl,
}: FoodRecordImageProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [showImgDiv, setShowImgDiv] = useState<boolean>(true);
  const { mutate: postImage } = usePostImage();
  const handleAddImgClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      const formData = new FormData();
      const reader = new FileReader();
      reader.onload = (event) => {
        if (imageRef && imageRef.current) {
          imageRef.current.src = event.target?.result as string;
          formData.append("image", selectedFile);
          postImage(formData, {
            onSuccess: (response) => {
              setImageUrl(response);
            },
          });
        }
      };
      reader.readAsDataURL(selectedFile);
    }
    setShowImgDiv(false);
  };
  const handleDeleteImage = () => {
    setShowImgDiv(true);
    setImageUrl("");
  };
  return (
    <>
      {showImgDiv && imageUrl === "" ? (
        <AddImg onClick={handleAddImgClick}>
          <input
            type="file"
            ref={fileInputRef}
            className="upload-img"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <span>사진 등록하기</span>
        </AddImg>
      ) : (
        <SelectImage>
          <img ref={imageRef} src={imageUrl} />
          <button onClick={() => handleDeleteImage()}>사진 삭제하기</button>
        </SelectImage>
      )}
    </>
  );
}
