import { describe, test, expect, beforeAll } from "vitest";
import { MongoPostRepository } from "./MongoPostRepository";

describe("Test mongo repository methods", () => {
  let mongo: MongoPostRepository;

  beforeAll(() => {
    mongo = new MongoPostRepository();
  });

  test("Should be Instantied interface repository mongo", () => {
    expect(mongo).toBeInstanceOf(MongoPostRepository);
  });

  test("Should be return empty posts", async () => {
    const mongorepository = await new MongoPostRepository().all();
    expect(mongorepository).toEqual([]);
  });

  test("Should be return all posts", async () => {
    let data = {
      title: "Novo titulo 2",
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

    const mongorepository = await new MongoPostRepository();
    //we do not using data base yet, therefore we needed to save some data to show later
    const save = mongorepository.save(data);
    const all = mongorepository.all();

    expect(all).toBeTruthy();
  });

  test("Should be save the post", async () => {
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

    const mongorepository = await new MongoPostRepository().save(data);
    expect(mongorepository).toBeFalsy();
  });
});
