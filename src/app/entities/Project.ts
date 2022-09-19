export class Project {
  title: string;
  subtitle: string;
  description: string;
  techStack: string;
  demoUrl: string | undefined;
  urlText: string | undefined;
  completedYear: number | undefined;

  constructor(
    title: string,
    subtitle: string,
    description: string,
    techStack: string,
    demoUrl?: string,
    urlText?: string,
    completedYear?: number
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.techStack = techStack;
    if (demoUrl) this.demoUrl = demoUrl;
    if (urlText) this.urlText = urlText;
    if (completedYear) this.completedYear = completedYear;
  }
}
