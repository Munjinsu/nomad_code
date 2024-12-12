const colors = [
    '#ef5777',
    '#575fcf',
    '#4bcffa',
    '#34e7e4',
    '#0be881',
    '#f53b57',
    '#3c40c6',
    '#0fbcf9',
    '#00d8d6',
    '#05c46b',
    '#ffc048',
    '#ffdd59',
    '#ff5e57',
    '#d2dae2',
    '#485460',
    '#ffa801',
    '#ffd32a',
    '#ff3f34',
  ];
  
  const btn = document.querySelector('button');
  let newNnm = [];
  function randomNunmArray() {
    for (let i = 0; i < 2; i++) {
      let rendomNum = Math.floor(Math.random() * colors.length);
      newNnm.push(colors[rendomNum]);
    }
  }
  function changeBg() {
    newNnm = []; //초기화
    randomNunmArray();
    document.body.style.background = `linear-gradient(${newNnm[0]}, ${newNnm[1]})`;
  }
  
  btn.addEventListener('click', changeBg);