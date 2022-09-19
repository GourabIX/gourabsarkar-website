import { Component, OnInit } from '@angular/core';
import { Project } from '../entities/Project';
import { ProjectSkillsService } from '../services/project-skills.service';

@Component({
  selector: 'app-project-skills',
  templateUrl: './project-skills.component.html',
  styleUrls: ['./project-skills.component.css'],
})
export class ProjectSkillsComponent implements OnInit {
  projectList: Project[] = [];
  projectsLoading: boolean = true;

  constructor(private _projectService: ProjectSkillsService) {}

  ngOnInit() {
    this.retrieveAllProjects();
  }

  retrieveAllProjects() {
    this.projectList = [];
    this._projectService.retrieveProjects().subscribe((data) => {
      this.projectsLoading = true;
      data.forEach((project) => {
        this.projectList.push(
          new Project(
            project.title,
            project.subtitle,
            project.description,
            project.techStack,
            project.demoUrl,
            project.urlText,
            project.completedYear
          )
        );
      });
      this.projectsLoading = false;
    });
  }
}
