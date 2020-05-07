class Chain{
    constructor(){
        var options = {
            stiffness: 0.08,
            length: 10
        }

        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
                
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,15);
               

        }

 }

        

            
        
    
    


