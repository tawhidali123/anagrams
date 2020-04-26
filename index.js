// Given two strings write a function to determine if the second string is a anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another such as cinema, formed from iceman.

// example: 
// validAnagram('aaz', 'zza') //false
// validAnagram('anagram', 'nagaram') //true


let validAnagram = function(str1, str2){
  if(str1.length !== str2.length){
    return false
  }
  if(str1 === '' && str2 === ''){
    return true
  }

  let objectString1 ={}
  let objectString2 = {}

  for(let char of str1){
    if(objectString1[char]){
      objectString1[char] += 1
    } else {
      objectString1[char] = 1
    } 
  }

  for(let char of str2){
    if(objectString2[char]){
      objectString2[char] += 1
    } else {
      objectString2[char] = 1
    } 
  }

  console.log(objectString1)
  console.log(objectString2)

  for (let key in objectString1){
    if(!(key in objectString2)){
      return false
    } 
    if(objectString1[key] !== objectString2[key]){
      return false
    }
  }

  return true

  

}


// validAnagram('anagram', 'nagaram')
// validAnagram('anagramaa', 'nagaram')

// validAnagram('anagramzzs', 'nagaram')
// validAnagram('cinemaa', 'icemaan')
validAnagram('cart', 'carr')