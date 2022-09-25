//responsible for receiving requests external of the application
import { Request, Response } from "express";
import { CreatePostCase } from "./CreatePostCase";

export class CreatePostController {
  constructor(private createPostCase: CreatePostCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      title,
      detail,
      description,
      category,
      content,
      metatitle,
      metadescription,
      metakeywords,
      metarobots,
    } = request.body;

    try {
      await this.createPostCase.execute({
        title,
        detail,
        description,
        category,
        content,
        metatitle,
        metadescription,
        metakeywords,
        metarobots,
      });
      return response.status(201).json({ message: "sucess" });
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message || "Unexpected error." });
    }
    return;
  }
}
