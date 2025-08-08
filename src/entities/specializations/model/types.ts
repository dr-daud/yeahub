export type TSpecializations = {
  data: {
    id: number;
    title: string;
    description: string;
    imageSrc: null;
    updatedAt: string;
  }[];
};

export type TSpecializationArgs = {
  page: number;
  limit: number;
};
