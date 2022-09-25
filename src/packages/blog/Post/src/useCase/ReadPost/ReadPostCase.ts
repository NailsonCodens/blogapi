import { IPostRepository } from "../../repositories/IPostRepository";
export class ReadPostCase {
  constructor(private postRepository: IPostRepository) {
    this.postRepository = postRepository;
  }

  async execute() {
    const allPosts = await this.postRepository.all();

    return allPosts;
  }
}
