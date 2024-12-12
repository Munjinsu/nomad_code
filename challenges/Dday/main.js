const clockTitle = document.querySelector('.js-clock');

function getDate() {
  const today = new Date();
  const christamsDay = new Date('2024-12-24');
  const DdayCalc = christamsDay - today;
  const Dday = Math.floor(DdayCalc / (1000 * 60 * 60 * 24));
  const DdayHour = Math.floor((DdayCalc / (1000 * 60 * 60)) % 24);
  const DdayMin = Math.floor((DdayCalc / (1000 * 60)) % 60);
  const DdaySec = Math.floor((DdayCalc / 1000) % 60);

  clockTitle.innerText = `
    크리스마스 이브까지
    ${Dday}일 ${DdayHour}시간 ${DdayMin}분 ${DdaySec}초 
    남았습니다.
  `;
}

getDate();
setInterval(getDate, 1000);
