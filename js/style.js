// //Export par défaut
// export function hi(){
//     console.log("hello");
// }
console.log("hello")
let variable = "hello"

class Heros {
    constructor(pseudo, classe, sante, attaque , niveau=1) {
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = niveau ;
}
        evoluer(){
            console.log("bravo vous aves gagne niveau");
            this.niveau ++

        }
        verifieSante(){
            if ( this.sante<=0) {
                this.sante=0
              console.log('vous avez perdu');
            }else{
                console.log("tout va bien")
            }
        }
        
        information() {
            return this.pseudo + " " + this.classe+ " "+this.sante+ " "+
            this.attaque+" "+this.niveau; 
        }

    }         
class magicien extends Heros{
    constructor(pseudo,magicien,sante,attaque){
    super(pseudo,"magicien",170,90);
  
    }
    attack(lennemi){
        console.log("attaque=" + this.attaque + " sante=" + this.sante );
    
          lennemi.sante -= gandalf.attaque;
          console.log(lennemi.pseudo + " vous avez subis une attak de " + gandalf.attaque+ " il vous reste " + lennemi.sante + " de point de vie" );
    
         lennemi.verifieSante(); 
      }


      coupSpecial(lennemi){
        console.log("attaque=" + this.attaque + " sante=" + this.sante );
        let dega =gandalf.attaque**5;  
        lennemi.sante -= dega
        console.log(lennemi.pseudo + " vous avez subis une attak de " + dega+ " il vous reste " + lennemi.sante + " de point de vie" );
  
       lennemi.verifieSante(); 
    }

}

let superWalo =new Heros("SuperWalo","guerrier",170,90);
let gandalf = new magicien("gardalf")
let merlin = new magicien("merlin");

gandalf.attack (superWalo)
gandalf.attack (merlin)

gandalf.pseudo 






   

   
























































    

    
   
      
    
       
            


