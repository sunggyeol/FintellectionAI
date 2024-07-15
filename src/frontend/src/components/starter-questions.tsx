import { ArrowUpRight } from "lucide-react";

const starterQuestions = [
  "What's the latest news on cryptocurrency?",
  "How is the S&P 500 performing today?",
  "How do I start investing in real estate?",
  "What happened to Donald Trump?",
];



export const StarterQuestionsList = ({
  handleSend,
}: {
  handleSend: (question: string) => void;
}) => {
  return (
    <ul className="flex flex-col space-y-1 pt-2">
      {starterQuestions.map((question) => (
        <li key={question} className="flex items-center space-x-2">
          <ArrowUpRight size={18} className="text-tint" />
          <button
            onClick={() => handleSend(question)}
            className="font-medium hover:underline decoration-tint underline-offset-4 transition-all duration-200 ease-in-out transform hover:scale-[1.02] text-left break-words normal-case"
          >
            {question}
          </button>
        </li>
      ))}
    </ul>
  );
};
