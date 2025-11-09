import { useState } from "react";
import NumberInput from "@/components/NumberInput";
import QuoteCard from "@/components/QuoteCard";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { getQuoteFromNumbers } from "@/lib/quotes";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [quote, setQuote] = useState<string | null>(null);
  const [submittedNumbers, setSubmittedNumbers] = useState<[number, number, number] | null>(null);

  const isValid = number1 !== "" && number2 !== "" && number3 !== "";

  const handleSubmit = () => {
    if (isValid) {
      const nums: [number, number, number] = [
        Number(number1),
        Number(number2),
        Number(number3),
      ];
      const message = getQuoteFromNumbers(nums[0], nums[1], nums[2]);
      setQuote(message);
      setSubmittedNumbers(nums);
    }
  };

  const handleReset = () => {
    setNumber1("");
    setNumber2("");
    setNumber3("");
    setQuote(null);
    setSubmittedNumbers(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold">당신의 인생 숫자가 전하는 지혜</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        {!quote ? (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                당신의 숫자가 전하는 지혜
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                0부터 100까지 숫자 3개를 입력해주세요
              </p>
            </div>

            <div className="space-y-8">
              <NumberInput
                label="첫 번째 숫자"
                value={number1}
                onChange={setNumber1}
                testId="input-number-1"
              />
              <NumberInput
                label="두 번째 숫자"
                value={number2}
                onChange={setNumber2}
                testId="input-number-2"
              />
              <NumberInput
                label="세 번째 숫자"
                value={number3}
                onChange={setNumber3}
                testId="input-number-3"
              />
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!isValid}
              className="w-full h-16 md:h-20 text-2xl md:text-3xl font-bold rounded-full"
              data-testid="button-submit"
            >
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 mr-3" />
              인생 명언 받기
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            <QuoteCard message={quote} numbers={submittedNumbers!} />
            
            <Button
              onClick={handleReset}
              variant="outline"
              className="w-full h-16 md:h-20 text-xl md:text-2xl font-medium rounded-full"
              data-testid="button-reset"
            >
              새로운 명언 받기
            </Button>
          </div>
        )}
      </main>

      <footer className="border-t mt-20">
        <div className="max-w-3xl mx-auto px-6 py-8 text-center text-muted-foreground">
          <p className="text-lg md:text-xl">
            인생 명언
          </p>
        </div>
      </footer>
    </div>
  );
}
