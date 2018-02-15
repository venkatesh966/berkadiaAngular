import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service:MovieService) { }

  modelschema=new Movie();

    
  adding()
  {
    this.service.addMovie(this.modelschema).subscribe();
    console.log("in adding")
  }

  ngOnInit() {
  }

}
