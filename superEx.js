class Species{
    constructor(name)
    {
        this.aname = name;
    }
    display()
    {
        console.log(" animal name : "+this.aname);
    }
}
class Animal extends Species{
    constructor(name,b)
    {
        super(name);
        this.extinct = b;
    }
    display()
    {
        super.display();
        if(this.extinct===true)
        console.log("  they are extinct");
        else
        console.log("  they are not extinct");
            
    }
}
let a1 =new Animal("dog",false);
a1.display();
let a2 =new Animal("dinosaurs",true);
a2.display();
