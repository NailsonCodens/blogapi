import { v4 as uuidv4 } from "uuid";

export class Post {
  public readonly id: string;
  public title: string;
  public detail: string;
  public description: string;
  public category: string;
  public content: string;
  public metatitle: string;
  public metadescription: string;
  public metakeywords: string;
  public metarobots: string;

  constructor(props: Omit<Post, "id">, id?: string) {
    //this.title = props.title; or
    Object.assign(this, props);

    if (!id) {
      this.id = uuidv4();
    }
  }
}
