import QuoteCard from '../QuoteCard';

export default function QuoteCardExample() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <QuoteCard 
        message="인생은 자전거를 타는 것과 같습니다. 균형을 유지하려면 계속 움직여야 합니다."
        numbers={[42, 17, 89]}
      />
    </div>
  );
}
