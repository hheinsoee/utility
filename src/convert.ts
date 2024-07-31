export function getUnitCharID() {
  const baseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; 
  const baseLength = baseChars.length;
  const timestamp = Date.now(); 
  const randomComponent = Math.floor(Math.random() * baseLength); 
  let num = timestamp + randomComponent; 
  let result = "";
  
  while (num > 0) {
    const remainder = num % baseLength;
    result = baseChars.charAt(remainder) + result;
    num = Math.floor(num / baseLength);
  }

  while (result.length < 6) {
    result = baseChars.charAt(0) + result; 
  }

  return result.slice(-6);
}
