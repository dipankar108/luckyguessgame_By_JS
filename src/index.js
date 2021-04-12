//check if the dom content already loaded or not
document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
    {
      id: 1,
      name: 'css',
      img: 'src/img/css.png'
    },
    {
      id: 2,
      name: 'graphql',
      img: 'src/img/graphql.png'
    },
    {
      id: 3,
      name: 'html',
      img: 'src/img/html.png'
    },
    {
      id: 4,
      name: 'java',
      img: 'src/img/java.png'
    },
    {
      id: 5,
      name: 'reactjs',
      img: 'src/img/reactjs.png'
    },
    {
      id: 6,
      name: 'sql',
      img: 'src/img/sql.png'
    },
    {
      id: 7,
      name: 'css',
      img: 'src/img/css.png'
    },
    {
      id: 8,
      name: 'graphql',
      img: 'src/img/graphql.png'
    },
    {
      id: 9,
      name: 'html',
      img: 'src/img/html.png'
    },
    {
      id: 10,
      name: 'java',
      img: 'src/img/java.png'
    },
    {
      id: 11,
      name: 'reactjs',
      img: 'src/img/reactjs.png'
    },
    {
      id: 12,
      name: 'sql',
      img: 'src/img/sql.png'
    },
  ];

  //declare some array for control dataflow
  //mychoice is going to store name of each card
  let myChoice = [];
  //tempid is going store temp id for change attribute after click a card
  let tempId = [];
  //total flip get count of our all flip card sothat we can know when I flip the card
  let totalFlip = [];
  //winScore store winscore
  let winScore = [];
  //lostScore store winscore
  let lostScore = [];

  //Check if I already clicked or not so We can remove the duplicate click

  const checkEvent = (i, imdCard, randomCard) => {
    totalFlip.includes(randomCard[i].id) ? alert('already used') : flipcard(i, imdCard, randomCard);
  }
  const flipcard = (i, imdCard, randomCard) => {
    totalFlip.push(randomCard[i].id);
    imdCard.setAttribute('src', `${randomCard[i].img}`);
    const card = document.querySelectorAll('img');
    myChoice.push(randomCard[i].name);
    tempId.push(`${i}`);

    if (myChoice.length > 1) {
      if (myChoice[0] == myChoice[1]) {
        setTimeout(() => {
          winScore.push(i);
          document.getElementById('win').innerHTML = winScore.length;
          card[tempId[0]].setAttribute('src', 'src/img/right.png');
          card[tempId[1]].setAttribute('src', 'src/img/right.png');
          myChoice = [];
          tempId = [];
        }, 100);
      }
      else if (myChoice.length > 0 && myChoice[0] != myChoice[1]) {
        lostScore.push(i);
        document.getElementById('loss').innerHTML = lostScore.length;
        card[tempId[0]].setAttribute('src', 'src/img/wrong.png');
        card[tempId[1]].setAttribute('src', 'src/img/wrong.png');
        myChoice = [];
        tempId = [];
      }
    }
    if (totalFlip.length == 12) {
      if (winScore.length / lostScore.length > 1) {
        setTimeout(() => {
          document.getElementById('cardContainerId').innerHTML = '';
          document.getElementById('win').innerHTML = '0';
          document.getElementById('loss').innerHTML = '0';
          tempId = [];
          myChoice = [];
          totalFlip = [];
          winScore = [];
          lostScore = [];
          alert('You Win');
          gamereload();
        }, 200)
      }
      else if (winScore.length / lostScore.length < 1) {
        setTimeout(() => {

          document.getElementById('win').innerHTML = '0';
          document.getElementById('loss').innerHTML = '0';
          document.getElementById('cardContainerId').innerHTML = '';
          tempId = [];
          myChoice = [];
          totalFlip = [];
          winScore = [];
          lostScore = [];
          alert('You Lose');
          gamereload();
        }, 200)

      }
      else if (winScore.length / lostScore.length == 1) {
        setTimeout(() => {


          document.getElementById('win').innerHTML = '0';
          document.getElementById('loss').innerHTML = '0';
          document.getElementById('cardContainerId').innerHTML = '';
          tempId = [];
          myChoice = [];
          totalFlip = [];
          winScore = [];
          lostScore = [];
          alert('Drawn');
          gamereload();

        }, 200)
      }
    }
  }

  function gamereload() {

    let randomCard = cardArray.sort((a, b) => 0.5 - Math.random());
    const cardContainer = document.querySelector('.index__cardContainer');
    for (let i = 0; i < randomCard.length; i++) {

      const imdCard = document.createElement('img');
      imdCard.setAttribute('class', 'cardIcon disabled');
      imdCard.setAttribute('src', `${randomCard[i].img}`);
      imdCard.setAttribute('id', i);
      let timeleft = 9;
      const closetimeout = setInterval(() => {
        if (timeleft <= 0) {
          clearInterval(closetimeout)
        }
        document.getElementById('timerguess').innerHTML = `0${timeleft}`;
        timeleft -= 1;
      }, 1000);
      setTimeout(() => {
        imdCard.setAttribute('src', 'src/img/eye.png');
        imdCard.setAttribute('data-id', i);
        imdCard.classList.remove('disabled');
        imdCard.addEventListener('click', () => checkEvent(i, imdCard, randomCard))

      }

        , 10000);
      cardContainer.appendChild(imdCard);

    };
  }
  gamereload();
})
