//Business rule
import { Post } from "../../entities/Post";
import { IPostRepository } from "../../repositories/IPostRepository";
import { ICreatePostRequestDTO } from "./CreatePostDTO"; //responsible for giving a pattern to the data that is coming from the request
export class CreatePostCase {
  private postRepository: IPostRepository;

  constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository;
  }

  //IcreatePostRequestDTO have the only responsability. To check if data is ok, like expected
  async execute(data: ICreatePostRequestDTO) {
    //Check if post alredy exitsts
    const postAlredyExists = await this.postRepository.findByTitle(data.title);

    if (!data.title) {
      throw new Error("Ops, não conseguimos salvar um post que não tem título");
    }

    if (postAlredyExists) {
      throw new Error(
        "Este post já existe no blog, por gentileza mude o nome para não termos problema de SEO"
      );
    }

    //create new object post with entities
    const post = new Post(data);
    //save post using our post repository
    await this.postRepository.save(post);
  }
}
