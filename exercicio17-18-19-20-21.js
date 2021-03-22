let estilos = ['Rock', 'Pagode']
//18
estilos.push('Funk')
//19
const midReplace = (arr, value) => {
  const mid = Math.round(arr.length / 2);
  arr[mid] = value;
};
midReplace(arr, "Axé");
//20
estilos.shift
//21
estilos.unshift("Rap");
estilos.unshift("Reggae");