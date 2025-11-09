import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface QuoteCardProps {
  message: string;
  numbers: [number, number, number];
}

export default function QuoteCard({ message, numbers }: QuoteCardProps) {
  return (
    <Card className="p-12 md:p-16 shadow-lg">
      <div className="flex flex-col items-center space-y-8">
        <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary" />
        
        <p 
          className="text-2xl md:text-4xl leading-relaxed text-center font-medium"
          style={{ wordBreak: 'keep-all', lineHeight: '1.8' }}
          data-testid="text-quote-message"
        >
          {message}
        </p>
        
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex gap-2">
            {numbers.map((num, idx) => (
              <span key={idx} className="text-xl md:text-2xl font-bold" data-testid={`text-number-${idx + 1}`}>
                {num}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
