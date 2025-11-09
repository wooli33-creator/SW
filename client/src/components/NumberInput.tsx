import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface NumberInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  testId: string;
}

export default function NumberInput({ label, value, onChange, testId }: NumberInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || (Number(val) >= 0 && Number(val) <= 100)) {
      onChange(val);
    }
  };

  return (
    <div className="space-y-3">
      <Label htmlFor={testId} className="text-2xl md:text-3xl font-medium block text-center">
        {label}
      </Label>
      <Input
        id={testId}
        data-testid={testId}
        type="number"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="h-20 md:h-24 text-4xl md:text-5xl text-center font-bold border-2 focus-visible:ring-4"
        placeholder="0-100"
        inputMode="numeric"
      />
    </div>
  );
}
