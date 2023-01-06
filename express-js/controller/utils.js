export function sleep(millSeconds, toReturn = null) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(toReturn);
    }, millSeconds);
  });
}