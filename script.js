// made by coleman maxwell

// each attack type has their own separate functions, in order to confine the dmgValue not changing and spilling over into the other attack types.

// sorry i gave up trying to look for an answer. I was trying to fix it for about 3 hours and I legit could not find a way. I redefined the variables so that they were specific to each attackType parameter, but somehow it still was messing up, even though the variables were all redefinied into their own separate and completely independent variables. im convinced its codepen that's messing it up, or maybe im still not used to javascript.
// ive coded many functions similar to this in LUA and it works first try, like a charm, i guess i dont fully understand the laws and rules of javascript. i guess thats what im here for.

// the outcome variable/div was used for testing purposes.

var wrap = document.body.querySelector(".wrapper")
var dragonTotalDmg = document.body.querySelector(".dragonDamage")
var output = document.body.querySelector(".userOutput")
var outcome = document.body.querySelector(".outcome")

dragonHealth = 10

function fireAttack(damageValue)
{
  var dmgValue = Number(damageValue)
  dmgValue = dmgValue - 1
  
  dragonHealth = dragonHealth - dmgValue
  outcome.innerHTML = "You did " +dmgValue+ " damage!"

  dragonTotalDmg.innerHTML = "Dragon health: " +dragonHealth  
  
  if(dragonHealth <= 0)
    {
     outcome.innerHTML = "You win!"
     dragonTotalDmg.innerHTML = "Dragon health: 0"
     dragonHealth = 10
    }
}
function iceAttack(damageValue)
{
  var dmgValue = Number(damageValue)
  dmgValue = dmgValue + 1
  
  dragonHealth = dragonHealth - dmgValue
  outcome.innerHTML = "You did " +dmgValue+ " damage!"
     
  dragonTotalDmg.innerHTML = "Dragon health: " +dragonHealth  
  
  if(dragonHealth <= 0)
    {
     outcome.innerHTML = "You win!"
     dragonTotalDmg.innerHTML = "Dragon health: 0"
     dragonHealth = 10
    }
}

function poisonAttack(damageValue)
{
  var dmgValue = Number(damageValue)
  
  dragonHealth = dragonHealth - dmgValue
  outcome.innerHTML = "You did " +dmgValue+ " damage!"
  
  dragonTotalDmg.innerHTML = "Dragon health: " +dragonHealth  
  
  if(dragonHealth <= 0)
    {
     outcome.innerHTML = "You win!"
     dragonTotalDmg.innerHTML = "Dragon health: 0"
     dragonHealth = 10
    }
}

document.body.querySelector(".fireAttack").addEventListener("click", function()
{
 fireAttack(3)
})

document.body.querySelector(".iceAttack").addEventListener("click", function()
{
 iceAttack(1)
})

document.body.querySelector(".poisonAttack").addEventListener("click", function()
{
 poisonAttack(4)
})