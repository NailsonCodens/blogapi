import { IPostRepository } from "../../src/app/Post/src/repositories/IPostRepository";
import { Post } from "../../src/app/Post/src/entities/Post";

export class inMemoryMongoPost implements IPostRepository {
  private posts: Post[] = [
    {
      id: "1",
      title: "Novo 1",
      detail: "novo 1",
      description: "",
      category: "",
      content: "",
      metatitle: "",
      metadescription: "",
      metakeywords: "",
      metarobots: "",
    },
    {
      id: "2",
      title: "Novo 2",
      detail: "novo 2",
      description: "",
      category: "",
      content: "",
      metatitle: "",
      metadescription: "",
      metakeywords: "",
      metarobots: "",
    },
  ];

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
    const postUpdate = this.posts
      .map((postIntern) => {
        postIntern.title = post.title;
        postIntern.category = post.category;
        return postIntern;
      })
      .find((post) => post.id === id);

    return postUpdate;
  }

  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
