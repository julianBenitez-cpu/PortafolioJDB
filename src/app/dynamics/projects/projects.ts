import { ChangeDetectorRef, Component } from '@angular/core';
import { Data } from '../../services/data';


@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  projects: any = []
  
  constructor(private getProjects:Data, private cdr:ChangeDetectorRef)
  {
    this.getProjects.getProjectsList().subscribe( {
      next: (data) => 
        {console.log(data);
          this.projects=data;
        },
      error: (error) => console.error(error),
      complete: () => {
        this.cdr.detectChanges()
      } 
    })
  }
}


