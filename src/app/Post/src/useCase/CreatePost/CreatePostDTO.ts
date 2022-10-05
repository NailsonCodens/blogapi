//The DTO is the interface that controls whats data my feature expected receive of the request
export interface ICreatePostRequestDTO {
  title: string;
  detail: string;
  description: string;
  category: string;
  content: string;
  metatitle: string;
  metadescription: string;
  metakeywords: string;
  metarobots: string;
}
