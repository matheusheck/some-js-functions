function createSong (count, lyrics1, lyrics2) {
  while (count > 1) {
    var firstPart = count.toString() + lyrics1
    console.log (firstPart + firstPart + lyrics2 + firstPart);
    count--;
  }
}
createSong(99, ' kilometros ', ' para um pouquinho, descansa um pouquinho ')
createSong(99, ' memecas ', ' para de mentir, memeca so tem uma ')
createSong(99, ' mensagens ', ' para de encher meu saco, eu ja te ajudei ')
