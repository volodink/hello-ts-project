function foo() {
    let a = 'foo';
    return a;
}

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  let result = foo()
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `${result} count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(1)
}
