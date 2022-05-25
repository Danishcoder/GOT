// Jon's Stats
let jonSnowAttack = 25;
let jonSnowHealth = 100;
let jonSnowDefense = 0;
// Jamie Stats 
let jamieLannisterAttack = 25;

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Victory for Jon Snow!!")
} else if (jonSnowAttack < jamieLannisterAttack) {
    console.log("Victory for Jamie Lannister!")
} else {
    console.log("Jon Snow and Jamie Lannister are Tied!")
}

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow is dead");
  }  else {
        //jonSnowHealth = jonSnowHealth - jamieLannisterAttack
      jonSnowHealth -= jamieLannisterAttack
        console.log(`Jon Snow's Health is down to ${jonSnowHealth}`)
        
}