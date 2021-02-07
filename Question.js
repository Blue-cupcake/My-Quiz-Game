class Question{
    
    constructor(){
        this.input = createInput("Name");
        this.input1 = createInput("Enter the correct option");
       

    }
    hide(){
       
        this.input.hide();
        this.input1.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question:- What goes up but never comes down?")
        this.question.position(150,80);
        this.option1.html("1: stairs");
        this.option1.position(150,100);
        this.option2.html("2: age");
        this.option2.position(150,120);
        this.option3.html("3: height of a person");
        this.option3.position(150,140);
        this.option4.html("3: both 2 and 3");
        this.option4.position(150,160);

        this.input1.position(150,230);
        this.input.position(150,260);


        
    }
}