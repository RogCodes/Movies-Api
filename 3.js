let string = ['D', 'U', 'M', 'B', 'W', 'A', 'Y', 'S', 'I', 'D']
let s = ''

function cetakGambar () {
  // enter satu kali
  s += '\n'
  // banyak perulangan untuk baris
  for (let i = 1; i <= string.length; i++) {
    // banyak perulangan untuk string yang dicetak
    for (let j = 1; j <= string.length; j++) {
      if ((i == 1 && j == 1) || (i == 1 && j == string.length)) {
        s += string[0] + ' '
      } else if ((i == 2 && j == 2) || (i == 2 && j == string.length - 1)) {
        s += string[1] + ' '
      } else if ((i == 3 && j == 3) || (i == 3 && j == string.length - 2)) {
        s += string[2] + ' '
      } else if ((i == 4 && j == 4) || (i == 4 && j == string.length - 3)) {
        s += string[3] + ' '
      } else if ((i == 5 && j == 5) || (i == 5 && j == string.length - 4)) {
        s += string[4] + ' '
      } else if ((i == 6 && j == 6) || (i == 6 && j == string.length - 5)) {
        s += string[5] + ' '
      } else if ((i == 7 && j == 7) || (i == 7 && j == string.length - 6)) {
        s += string[6] + ' '
      } else if ((i == 8 && j == 8) || (i == 8 && j == string.length - 7)) {
        s += string[7] + ' '
      } else if ((i == 9 && j == 9) || (i == 9 && j == string.length - 8)) {
        s += string[8] + ' '
      } else if ((i == 10 && j == 10) || (i == 10 && j == string.length - 9)) {
        s += string[9] + ' '
      } else {
        s += '= '
      }
    }
    s += '\n'
  }
  let hasil = s
  return hasil
}
console.log(hasil)
