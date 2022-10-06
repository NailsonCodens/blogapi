import { Response, Request } from "express";
import { ReadPostCase } from "./ReadPostCase";

export class ReadPostController {
  constructor(private readPostCase: ReadPostCase) {}

  async handleAllPost(request: Request, response: Response): Promise<Response> {
    try {
      const posts = await this.readPostCase.executeAllPost();
      return response.status(200).json(posts);
    } catch (error) {
      return response.status(400).json({ message: "Unexpected error, sorry" });
    }
    return;
  }

  async handleFindPost(
    request: Request,
    response: Response
  ): Promise<Response> {
    return;
  }
}
