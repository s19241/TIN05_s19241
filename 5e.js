class Student {
constructor(first, last, id, grades){
 this.firstName = first;
  this.lastName = last;
  this.id = id;
  this.grades = grades;

}
get fullName(){
 return this.firstName+" "+this.lastName;
}
set fullName(value){
    var words = value.split(" ");
        this.firstName= words[0]||"";
        this.lastName = words[1]||"";
}
get getAverageGrade(){
  return this.AverageGrade();
}

  printFullName() {
  console.log(this.firstName+" "+this.lastName);
  }
 AverageGrade(){
  var total = 0;
for(var i = 0; i < this.grades.length; i++) {
    total += this.grades[i];
}
var avg = total / this.grades.length;
return avg;
  }


}


var s1 = new Student("Nuraiza", "Maruf kyzy","s19241",[3.9,4.0,4.5,5.0,3.8,4.6]);
console.log(s1);
s1.printFullName();
s1.fullName = "Cristina Aqualera";
s1.printFullName();
console.log(s1.fullName);
console.log(s1.getAverageGrade);



