import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProMegaEnergie';
  changeLiActive(li:string){
    const allLi = document.querySelectorAll("li a")
    const liActive = document.getElementById(li);
    for (let i = 0; i < allLi.length; i++) {
      allLi[i].setAttribute('class', 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent')
    }
   liActive?.setAttribute('class','block py-2 px-3 text-white bg-green-600 rounded md:bg-transparent md:text-green-600 md:p-0 dark:text-white md:dark:text-green-500')
  }
}
