import { Request, Response } from "express";
import { IPostRepository } from "../../repositories/IPostRepository";
import { UpdatePostDTO } from "./UpdatePostDTO";
export class UpdatePostCase {
  constructor(private ipostRepository: IPostRepository) {}

  async execute(id: string, data: UpdatePostDTO) {
    const findPostById = await this.ipostRepository.findById(id);

    if (!findPostById) {
      throw new Error("Ops, não achamos nenhum post com este id");
    }

    if (id.length == 0) {
      throw new Error(
        "Por favor insira um id, este post não poder editado sem um id"
      );
    }

    const updateRepository = await this.ipostRepository.update(id, data);
    return updateRepository;
  }
}
