function forLoop(array) {
  for (i=0; i < array.length; i++) {
    return `I am ${i} strange loop${i === 0 ? '' : 's'}.`;
  }
}