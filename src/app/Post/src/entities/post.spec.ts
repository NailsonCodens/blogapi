import { test, expect, describe } from "vitest";
import { Post } from "./Post";

describe("Post tests", () => {
  test("Should be able instanciate", () => {
    const post = new Post({
      title: "Novo 1",
      detail: "novo 1",
      description: "",
      category: "",
      content: "",
      metatitle: "",
      metadescription: "",
      metakeywords: "",
      metarobots: "",
    });

    expect(post).toBeInstanceOf(Post);
  });
});
