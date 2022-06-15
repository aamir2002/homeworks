async function f() {
  const result = await promiseFunction()

  console.log(`Промис ${typeof result === 'string' ? '' : 'НЕ'} работает ${typeof result === 'string' ? result : ''}`)
}

f()
