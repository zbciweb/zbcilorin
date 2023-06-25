export function selectRandomMembers(array, count) {
    const shuffled = array.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
  export function removeHyphen(text) {
    return text.replace(/-/g, ' ');
  }
 