import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

firstName=signal("Daksh");
lastName=signal("Sharma");
fullName=computed(()=>this.firstName()+ " "+ this.lastName())

// courseName : string ="Java";


cityList= signal(["Pune","Mumbai"]);

internObj=signal({
  name:'Daksh',
  city:'Solan'

})



rollNo=signal<number>(123);

constructor(){
  // const Fname=this.firstName();
  setTimeout(()=> {
    // this.firstName.set("dotnet");
    // this.courseName="Html"
  },5000);
}

changeName(){
  this.firstName.set("Sai");
  // this.rollNo.set(14);
}
changeLastName(){
  this.lastName.set("Vikas");
}

addCity(){
  this.cityList.set([...this.cityList(),"Nagpur"])
}
changeInternCity(){
  this.internObj.set({...this.internObj(),city:'Kasauli'})
}
}

const count = signal(10);
count.set(9);
count.update(value=>value+1);


const doublecount =computed(()=>count() *2);


const showCount = signal(false);

const conditionalCount = computed(() => {
  if (showCount()) {
    return `The count is ${doublecount()}.`;
  } else {
    return 'Nothing to see here!';
  }
});
console.log(conditionalCount()); 







