function isTouching(object_1,object_2) {
    if(object_1.x - object_2.x < object_2.width/2 + object_1.width/2 && 
      object_2.x - object_1.x < object_2.width/2 + object_1.width/2 &&
      object_1.y - object_2.y < object_2.height/2 + object_1.height/2 &&
      object_2.y - object_1.y < object_2.height/2 + object_1.height/2) {
        return true
    } else{
      return false
    }
  }
  
  function bounceOff(object_1,object_2) {
    if(object_1.x - object_2.x < object_2.width/2 + object_1.width/2 && 
      object_2.x - object_1.x < object_2.width/2 + object_1.width/2) {
        object_1.velocityX = object_1.velocityX * (-1);
        object_2.velocityX = object_2.velocityX * (-1);
      }
  
    if(object_1.y - object_2.y < object_2.height/2 + object_1.height/2 &&
      object_2.y - object_1.y < object_2.height/2 + object_1.height/2) {
        object_1.velocityY = object_1.velocityY * (-1);
        object_2.velocityY = object_2.velocityY * (-1); 
      }
  }