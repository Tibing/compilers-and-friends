debugger;
console.log('Im at the root scope');

export function sum(a, b) {

  if (true) {
    console.log('Im inside if');
    debugger;
  }

  debugger;

  return a + b;
}
