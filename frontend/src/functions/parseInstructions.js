export function parseInstructions(instruction) {
  let result = [];
  let pivot = 0;

  for (let i = 2; i < instruction.length - 1; i++) {
    if (
      (typeof instruction[i] === "number" ||
        (typeof instruction[i] === "string" &&
          instruction[i].trim() !== "" &&
          !isNaN(instruction[i]))) &&
      instruction[i + 1] === "."
    ) {
      result.push(instruction.slice(pivot, i));
      pivot = i;
    }
  }

  return result;
}
