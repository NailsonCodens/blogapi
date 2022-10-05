import { describe, test, beforeAll, expect } from "vitest";
import { UpdatePostCase } from "./UpdatePostCase";
import { inMemoryMongoPost } from "../../../../../../test/repositories/inMemoryMongoPost";

describe("Test implementation UpdatePostCase", () => {
  let updatePostCase: UpdatePostCase;
  let mongoInMemory: inMemoryMongoPost;
  let id = "1";
  let nonExistentId = "400";
  let post = {
    title: "New Content update",
    detail: "New Content update",
    description: "New Description",
    category: "Cateory",
    content: "<p>Content</p>",
    metatitle: "post content",
    metadescription: "post description",
    metakeywords: "post, content, date",
    metarobots: "robot",
  };

  beforeAll(() => {
    mongoInMemory = new inMemoryMongoPost();
    updatePostCase = new UpdatePostCase(mongoInMemory);
  });

  test("Should be return error when not finding post with id", async () => {
    await expect(() =>
      updatePostCase.execute(nonExistentId, post)
    ).rejects.toThrowError(
      new Error("Ops, não achamos nenhum post com este id")
    );
  });

  test("Should not be update specfic post without id", async () => {
    post.title = "New title without id";
    await expect(() => updatePostCase.execute("", post)).rejects.toThrowError(
      Error
    );
  });

  test("Should be able updated specific post", async () => {
    const update = await updatePostCase.execute(id, post);
    expect(update).toEqual(
      expect.objectContaining({
        title: expect.any(String),
      })
    );
  });
});
