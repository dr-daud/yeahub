export type TSkills = {
  data: {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
  }[];
};

export type TSkillsArgs = {
  page: number;
  limit: number;
  specializations: number | null;
};
