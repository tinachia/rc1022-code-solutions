/* exported defaults */
function defaults(target, source) {
  for (const i in source) {
    if (!(i in target)) {
      target[i] = source[i];
    }
  }
}
