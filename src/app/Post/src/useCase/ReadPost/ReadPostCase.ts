import { IPostRepository } from "../../repositories/IPostRepository";
export class ReadPostCase {
  constructor(private postRepository: IPostRepository) {
    this.postRepository = postRepository;
  }

  async executeAllPost() {
    const allPosts = await this.postRepository.all();
    return allPosts;
  }

  async executeFindPost() {}
}
