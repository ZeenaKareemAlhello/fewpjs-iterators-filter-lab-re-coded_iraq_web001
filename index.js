// Code your solution here
function findMatching(drivers,str){
    let arr=[]
  arr=drivers.filter((driver) => driver.toLowerCase()===str.toLowerCase(),str)
  return arr
  }
