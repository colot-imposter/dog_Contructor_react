//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, status, color, hungry, owner) {
  this.name= name;
  this.status= status;
  this.color=color;
  this.hungry= hungry;
  this.owner= owner;

}




// Instances of Dog
let sadie = new Dog('Sadie', 'normal', 'black', false, 'mason')
let moonshine = new Dog('Moonshine', 'normal', 'black', true )
let atticus = new Dog('Atticus', 'normal', 'black', true )


// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name,cool) {

  this.name=name
  this.cool=cool
  this.pet= function(dogname){
    dogname.status = 'happy';
    return 'should make '+dogname+' '+ dogname.status+ 'when Mason pets her'
}
  this.feed= function(dogname){
    dogname.hungry= false
  }
}

// Instances of Human
let mason = new Human('mason',false)
let julia = new Human('julia', true)
// Needed: mason, julia
