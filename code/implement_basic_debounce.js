/* Debounce is a common technique used in Web Application, in most cases using lodash solution would be a good choice.

could you implement your own version of basic debounce()?

In case you forgot, debounce(func, delay) will returned a debounced function, which delays the invoke.

Here is an example.

Before debouncing we have a series of calling like

─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G 
After debouncing at wait time of 3 dashes

─ ─ ─ ─ ─ ─ ─ ─ D ─ ─ ─ ─ ─ ─ ─ ─ ─ G 
notes

please follow above spec. the behavior might not be exactly the same as lodash.debounce()

because window.setTimeout and window.clearTimeout are not accurate in browser environment, they are replaced to other implementation when judging your code. They still have the same interface, and internally keep track of the timing for testing purpose. */

function debounce(func, wait) {
  let cancel = null;
  return (args) => {
    clearTimeout(cancel);
    cancel = setTimeout(() => func(...args), wait);
  };
}
