export type TQuestionsResponse = {
  fullCount: number;
  skills: number[];
  questions: TQuestions[];
};

export type TQuestions = {
  complexity: number;
  description: string;
  id: number;
  imageSrc: string;
  keywords: string[];
  longAnswer: string;
  rate: number;
  shortAnswer: number;
  title: string;
};

export type TQuestionsArgs = {
  skills: string[];
  complexity?: number[];
  limit: number;
  specialization: number | null;
};
