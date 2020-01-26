import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'public';
  goldCount = 0;
  activities = [];

  gold(place: string): void {
    if (place === 'Farm') {
      // console.log(`Clicked ${place} button`);
      var temp = random(2, 5);
      this.goldCount += temp;
    } else if (place === 'Cave') {
      // console.log(`Clicked ${place} button`);
      var temp = random(5, 10);
      this.goldCount += temp;
    } else if (place === 'Casino') {
      // console.log(`Clicked ${place} button`);
      var temp = random(-100, 100);
      this.goldCount += temp;
    } else {
      // console.log(`Clicked ${place} button`);
      var temp = random(7, 15);
      this.goldCount += temp;
    }

    if (temp < 0) {
      temp = Math.abs(temp);
      this.activities.push(`You lost ${temp} gold at the ${place}`);
    } else {
      this.activities.push(`You've earned ${temp} gold at the ${place}`);
    }
    console.log(this.goldCount);
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
