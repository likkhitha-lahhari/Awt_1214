class Person{
 constructor(name)
 {
     this.name = name;
 }
}

class Student extends Person{
  constructor(sname,roll)
  {
      super(sname);
      this.roll = roll;
  }
  display()
  {
    console.log("Student name : "+this.name+" ,  Roll no : "+this.roll);
  }
}

class Employee extends Person{
    constructor(ename,salary)
    {
        super(ename);
        this.sal = salary;
    }
    display()
    {
      console.log("Employee name : "+this.name+" ,  Salary : "+this.sal);
    }
}

let s = new Student("Likkhitha",1214);
s.display();
let e = new Employee("Lahhari",200000);
e.display();