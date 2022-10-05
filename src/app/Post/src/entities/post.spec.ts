import { test, expect, describe } from "vitest";
import { Post } from "./Post";

describe("Post tests", () => {
  test("Create an Post", () => {
    const post = new Post({
      title: "teste",
      detail: "treste",
      description: "sadasdsa",
      category: "teste",
      content: "teste",
      metatitle: "aasdd",
      metadescription: "asdasd",
      metakeywords: "sadsad",
      metarobots: "sad",
    });

    expect(post).toBeInstanceOf(Post);
  });

  test("", () => {});
});
