
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { PackageIcon } from "lucide-react";

interface FigurePreviewProps {
  image: string | null;
  name: string;
  isGenerating: boolean;
}

const FigurePreview = ({ image, name, isGenerating }: FigurePreviewProps) => {
  return (
    <Card className="p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Предпросмотр фигурки</h2>
      
      {isGenerating ? (
        <div className="w-full space-y-4">
          <Skeleton className="h-[350px] w-full rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      ) : image ? (
        <div className="relative">
          <div className="relative border-8 border-[#f2f2f2] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 font-bold text-xl text-center">
              {name.toUpperCase()}
            </div>
            
            <div className="pt-12 pb-4 px-4 bg-[#f8f8f8]">
              <div className="relative">
                <img 
                  src={image} 
                  alt="Превью фигурки" 
                  className="w-full h-auto rounded bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-around">
                  <div className="bg-white p-1 rounded-full h-10 w-10 flex items-center justify-center">
                    <span className="text-xs">🔑</span>
                  </div>
                  <div className="bg-white p-1 rounded-full h-10 w-10 flex items-center justify-center">
                    <span className="text-xs">📱</span>
                  </div>
                  <div className="bg-white p-1 rounded-full h-10 w-10 flex items-center justify-center">
                    <span className="text-xs">💧</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            <p className="font-medium">Коллекционная фигурка "{name}"</p>
            <p>Премиальное качество 3D-печати</p>
            <p>С аксессуарами и фирменной упаковкой</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[350px] border-2 border-dashed border-muted-foreground/30 rounded-lg w-full">
          <PackageIcon className="h-16 w-16 text-muted-foreground/50" />
          <p className="text-muted-foreground mt-4">Загрузите фото для предпросмотра</p>
        </div>
      )}
    </Card>
  );
};

export default FigurePreview;
