import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectSkillsService {
  constructor(private fireDatabase: AngularFireDatabase) {}

  retrieveProjects(): Observable<any[]> {
    return this.fireDatabase
      .list('projects')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((content) => ({
            key: content.payload.key,
            ...(content.payload.val() as {}), // treat content.payload.val() as an object.
          }))
        )
      );
  }
}
