export interface ITrainer {
  id: number;
  attributes: {
    url: string;
    fullName: string;
    bio: string;
    phoneNumber: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    branches: any;
    profilePhoto: any;
  };
}
