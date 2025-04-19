
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImageIcon, UploadIcon } from "lucide-react";

interface ImageUploaderProps {
  currentImage: string | null;
  onImageChange: (url: string | null) => void;
}

const ImageUploader = ({ currentImage, onImageChange }: ImageUploaderProps) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target && typeof event.target.result === "string") {
        onImageChange(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    onImageChange(null);
  };

  const useSampleImage = () => {
    onImageChange("https://cdn.poehali.dev/files/85306f77-dfad-46c4-ade8-4c0cee378225.jpg");
  };

  return (
    <div className="w-full">
      {!currentImage ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center ${
            dragActive ? "border-primary bg-primary/10" : "border-muted-foreground/30"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <ImageIcon className="h-10 w-10 text-muted-foreground" />
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Перетащите фото сюда или нажмите для выбора</p>
              <p className="text-xs text-muted-foreground">PNG, JPG или WEBP (макс. 5MB)</p>
            </div>
            <Input
              type="file"
              className="hidden"
              id="file-upload"
              accept="image/*"
              onChange={handleChange}
            />
            <label htmlFor="file-upload">
              <Button variant="outline" size="sm" type="button">
                <UploadIcon className="h-4 w-4 mr-2" />
                Выбрать фото
              </Button>
            </label>
            <Button variant="ghost" size="sm" onClick={useSampleImage}>
              Использовать пример
            </Button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <img
            src={currentImage}
            alt="Uploaded"
            className="rounded-lg w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <Button variant="destructive" onClick={handleRemoveImage}>
              Удалить фото
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
