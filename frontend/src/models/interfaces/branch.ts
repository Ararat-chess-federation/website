export interface IBranch {
  id: number;
  attributes: {
    url: string;
    address: string;
    mapUrl: string | null;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    trainers: any;
    mainImage: any;
    description: any;
  };
}
