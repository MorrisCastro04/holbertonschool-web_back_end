export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // This variable is not in use
    const task = true;
    // This variable is not in use
    const task2 = false;
  }

  return [task, task2];
}
