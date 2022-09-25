import { IPostRepository } from "../IPostRepository";
import { Post } from "../../entities/Post";

export class MongoPostRepository implements IPostRepository {
  private posts: Post[] = [];

  async findByTitle(title: string): Promise<Post> {
    const post = this.posts.find((post) => post.title === title);
    return post;
  }

  async all(): Promise<Post[]> {
    return this.posts;
  }

  async save(post: Post): Promise<void> {
    this.posts.push(post);
  }

  update(id: string, post: Post): Promise<Post> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
