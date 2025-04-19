
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ImageUploader from "@/components/ImageUploader";
import FigurePreview from "@/components/FigurePreview";
import FigureCustomizer from "@/components/FigureCustomizer";

const FigureCreator = () => {
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState("Максим");
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Имитация процесса генерации
    setTimeout(() => {
      setResult("https://cdn.poehali.dev/files/85306f77-dfad-46c4-ade8-4c0cee378225.jpg");
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Создание коллекционной фигурки</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Загрузите фото</h2>
          <ImageUploader 
            currentImage={image}
            onImageChange={setImage}
          />
          
          <div className="mt-6">
            <FigureCustomizer 
              name={name}
              onNameChange={setName}
            />
          </div>
          
          <Button 
            className="w-full mt-6" 
            size="lg"
            onClick={handleGenerate}
            disabled={!image || isGenerating}
          >
            {isGenerating ? "Генерация..." : "Создать фигурку"}
          </Button>
        </Card>
        
        <FigurePreview 
          image={image || result}
          name={name}
          isGenerating={isGenerating}
        />
      </div>
    </div>
  );
};

export default FigureCreator;
