import { describe, test, beforeAll, expect } from "vitest";
import { Post } from "../entities/Post";
import { IPostRepository } from "./IPostRepository";

describe("Test implementation interface IpostRepository", () => {
  class TesteImplementationIpostRepository implements IPostRepository {
    findById(id: string): Promise<Post> {
      return;
    }
    private posts: Post[] = [];

    async findByTitle(title: string): Promise<Post> {
      return;
    }

    async all(): Promise<Post[]> {
      return this.posts;
    }
    async save(post: Post): Promise<void> {
      this.posts.push(post);
    }

    async update(id: string, post: Post): Promise<Post> {
      throw new Error("Method not implemented.");
    }

    async delete(id: string): Promise<void> {
      throw new Error("Method not implemented.");
    }
  }

  let testeImplementationiPostRepository: TesteImplementationIpostRepository;

  let data = {
    title: "Novo titulo",
    detail: "teste",
    description: "teste",
    category: "teste",
    content: "teste",
    metatitle: "teste",
    metadescription: "teste",
    metakeywords: "",
    metarobots: "",
    id: "",
  };

  beforeAll(() => {
    testeImplementationiPostRepository =
      new TesteImplementationIpostRepository();
  });

  test("Should be instantied interface", () => {
    expect(testeImplementationiPostRepository).toBeInstanceOf(
      TesteImplementationIpostRepository
    );
  });

  test("Should be return empty posts", async () => {
    const all = await testeImplementationiPostRepository.all();
    expect(all).toEqual([]);
  });

  test("Should be save the post", async () => {
    data.content = "Novo conteúdo de teste";
    const save = await testeImplementationiPostRepository.save(data);

    expect(save).toBeFalsy();
  });
});
