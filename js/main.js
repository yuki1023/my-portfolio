const display = document.getElementById("display")
const plusButton = document.getElementById("like+1")

let count = 0

plusButton.onclick = function() {
    // count を更新
  count += 1

  console.log(count)
  // count を表示
  display.textContent = count

  }