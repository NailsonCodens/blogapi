import { Post } from "../entities/Post";

export interface IPostRepository {
  findByTitle(title: string): Promise<Post>;
  findById(id: string): Promise<Post>;
  all(): Promise<Post[]>;
  save(post: Post): Promise<void>;
  update(id: string, post: Post): Promise<Post>;
  delete(id: string): Promise<void>;
}
