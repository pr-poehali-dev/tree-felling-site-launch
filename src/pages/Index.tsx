
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-green-100">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardContent className="flex flex-col items-center py-10 px-6">
          {/* Логотип упавшей елки (SVG) */}
          <svg 
            viewBox="0 0 200 150" 
            width="200" 
            height="150" 
            className="mb-6"
          >
            {/* Ствол елки */}
            <rect 
              x="90" 
              y="50" 
              width="20" 
              height="70" 
              fill="#8B4513" 
              transform="rotate(45, 100, 100)" 
            />
            
            {/* Ветви елки (треугольники) */}
            <polygon 
              points="70,80 130,80 100,40" 
              fill="#2E8B57" 
              transform="rotate(45, 100, 100)" 
            />
            <polygon 
              points="75,65 125,65 100,25" 
              fill="#3CB371" 
              transform="rotate(45, 100, 100)" 
            />
            <polygon 
              points="80,50 120,50 100,10" 
              fill="#00FF7F" 
              transform="rotate(45, 100, 100)" 
            />
            
            {/* Земля */}
            <ellipse 
              cx="100" 
              cy="135" 
              rx="60" 
              ry="10" 
              fill="#8B4513" 
              opacity="0.3" 
            />
          </svg>
          
          {/* Текст "Спилим Ваш лес" */}
          <h1 className="text-3xl font-bold mb-4 text-green-800">Спилим Ваш лес</h1>
          
          {/* Номер телефона */}
          <p className="text-xl font-medium text-green-700">+7(814)226-56-86</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
