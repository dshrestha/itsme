import Project from "itsme/interfaces/project";

export default interface Company {
  "id": number;
  "name": string;
  "roles": Array<string>;
  "projects": Array<Project>;
}
