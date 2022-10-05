import { IPostRepository } from "../IPostRepository";
import { Post } from "../../entities/Post";

export class MongoPostRepository implements IPostRepository {
  private posts: Post[] = [];

  async findByTitle(title: string): Promise<Post> {
    const post = this.posts.find((post) => post.title === title);
    return post;
  }

  async findById(id: string): Promise<Post> {
    const post = this.posts.find((post) => post.id === id);
    return post;
  }

  async all(): Promise<Post[]> {
    return this.posts;
  }

  async save(post: Post): Promise<void> {
    this.posts.push(post);
  }

  async update(id: string, post: Post): Promise<Post> {
    const postUpdate = this.posts.find((id) => {
      console.log(id);
    });
    return postUpdate;
  }

  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
