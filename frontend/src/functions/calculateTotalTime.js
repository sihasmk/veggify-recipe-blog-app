export function calculateTotalTime(item) {
  const prepTime = item.more.preptime;
  const cookTime = item.more.cooktime;

  const totalTime = parseInt(prepTime) + parseInt(cookTime);
  return totalTime;
}
