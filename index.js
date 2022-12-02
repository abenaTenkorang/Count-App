let count = 0;
const countEl = document.getElementById('count-el');
function increment() {
  count += 1;
  countEl.innerHTML = count;
}
