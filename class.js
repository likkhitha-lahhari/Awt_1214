class Student
{
    constructor(name,age) //parameterized 
    {
        this.name = name;
        this.age = age;
    }
    display()
    {
        console.log("name of the student is :  "+this.name+" and his/her age is "+this.age);
    }
}
let s1 = new Student("Likkhitha",18); //object creation
let s2 = new Student("Lahhari",19);

s1.display();
s2.display();