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
  let mycohoice = [];
  let myId = [];
  let checkwin = [];
  let wintime = [];
  let losstime = [];

  const checkEvent = (i, imgContainer, randomCard) => {
    checkwin.includes(randomCard[i].id) ? alert('already used') : flipcard(i, imgContainer, randomCard);
  }
  const flipcard = (i, imgContainer, randomCard) => {
    console.log(i);
    checkwin.push(randomCard[i].id);
    imgContainer.setAttribute('src', `${randomCard[i].img}`);
    const card = document.querySelectorAll('img');
    mycohoice.push(randomCard[i].name);
    myId.push(`${i}`);
    console.log(
      mycohoice.length
    )
    if (mycohoice.length > 1) {
      if (mycohoice[0] == mycohoice[1]) {
        setTimeout(() => {
          wintime.push(i);
          document.getElementById('win').innerHTML = wintime.length;
          card[myId[0]].setAttribute('src', 'src/img/right.png');
          card[myId[1]].setAttribute('src', 'src/img/right.png');
          mycohoice = [];
          myId = [];
        }, 100);
      }
      else if (mycohoice.length > 0 && mycohoice[0] != mycohoice[1]) {
        losstime.push(i);
        document.getElementById('loss').innerHTML = losstime.length;
        card[myId[0]].setAttribute('src', 'src/img/wrong.png');
        card[myId[1]].setAttribute('src', 'src/img/wrong.png');
        mycohoice = [];
        myId = [];
      }
    }
    if (checkwin.length == 12) {
      if (wintime.length / losstime.length > 1) {
        setTimeout(() => {
          document.getElementById('cardContainerId').innerHTML = '';
          document.getElementById('win').innerHTML = '0';
          document.getElementById('loss').innerHTML = '0';
          myId = [];
          mycohoice = [];
          checkwin = [];
          wintime = [];
          losstime = [];
          alert('You Win');
          gamereload();
        }, 200)
      }
      else if (wintime.length / losstime.length < 1) {
        setTimeout(() => {

          document.getElementById('win').innerHTML = '0';
          document.getElementById('loss').innerHTML = '0';
          document.getElementById('cardContainerId').innerHTML = '';
          myId = [];
          mycohoice = [];
          checkwin = [];
          wintime = [];
          losstime = [];
          alert('You Lose');
          gamereload();
        }, 200)

      }
      else if (wintime.length / losstime.length == 1) {
        setTimeout(() => {


          document.getElementById('win').innerHTML = '0';
          document.getElementById('loss').innerHTML = '0';
          document.getElementById('cardContainerId').innerHTML = '';
          myId = [];
          mycohoice = [];
          checkwin = [];
          wintime = [];
          losstime = [];
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

      const imgContainer = document.createElement('img');
      imgContainer.setAttribute('class', 'cardIcon disabled');
      imgContainer.setAttribute('src', `${randomCard[i].img}`);
      imgContainer.setAttribute('id', i);
      let timeleft = 9;
      const closetimeout = setInterval(() => {
        if (timeleft <= 0) {
          clearInterval(closetimeout)
        }
        document.getElementById('timerguess').innerHTML = `0${timeleft}`;
        timeleft -= 1;
      }, 1000);
      setTimeout(() => {
        imgContainer.setAttribute('src', 'src/img/eye.png');
        imgContainer.setAttribute('data-id', i);
        imgContainer.classList.remove('disabled');
        imgContainer.addEventListener('click', () => checkEvent(i, imgContainer, randomCard))

      }

        , 10000);
      cardContainer.appendChild(imgContainer);

    };
  }
  gamereload();
})
