import { Request, Response } from "express";
import { UpdatePostCase } from "./UpdatePostCase";
export class UpdatePostCaseController {
  constructor(private updatePosCase: UpdatePostCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
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
      const updatePost = await this.updatePosCase.execute(id, {
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

      return response.status(201).json(updatePost);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error." });
    }
    return;
  }
}
