
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface FigureCustomizerProps {
  name: string;
  onNameChange: (name: string) => void;
}

const FigureCustomizer = ({ name, onNameChange }: FigureCustomizerProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Настройки фигурки</h3>
      <Separator />
      
      <div className="space-y-2">
        <Label htmlFor="name">Имя на коробке</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Введите имя"
        />
      </div>
      
      <div className="space-y-1 text-sm text-muted-foreground">
        <p>✅ Стиль: коллекционная фигурка Bratz</p>
        <p>✅ Материал: soft touch пластик</p>
        <p>✅ Одежда: белая футболка, джинсы</p>
        <p>✅ Аксессуары: ключ от машины, телефон, бутылка воды</p>
        <p>✅ Упаковка: прозрачный пластик спереди, картон сзади</p>
      </div>
    </div>
  );
};

export default FigureCustomizer;
