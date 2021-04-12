//card options
document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
    {
      name: 'css',
      img: 'img/css.png'
    },
    {
      name: 'graphql',
      img: 'img/graphql.png'
    },
    {
      name: 'html',
      img: 'img/html.png'
    },
    {
      name: 'java',
      img: 'img/java.png'
    },
    {
      name: 'reactjs',
      img: 'img/reactjs.png'
    },
    {
      name: 'sql',
      img: 'img/sql.png'
    },
    {
      name: 'css',
      img: 'img/css.png'
    },
    {
      name: 'graphql',
      img: 'img/graphql.png'
    },
    {
      name: 'html',
      img: 'img/html.png'
    },
    {
      name: 'java',
      img: 'img/java.png'
    },
    {
      name: 'reactjs',
      img: 'img/reactjs.png'
    },
    {
      name: 'sql',
      img: 'img/sql.png'
    },
  ];
  let mycohoice = [];
  let myId = [];
  let checkwin = [];
  let wintime = [];
  let losstime = [];
  const flipcard = (i, imgContainer, randomCard) => {
    console.log(randomCard);
    checkwin.push(i);
    imgContainer.setAttribute('src', `${randomCard[i].img}`);
    const card = document.querySelectorAll('img');
    mycohoice.push(randomCard[i].name);
    myId.push(`${i}`);
    console.log(
      mycohoice.length
    )
    if (mycohoice.length > 1) {

      if (myId[0] == myId[1]) {
        alert('same id')
        document.getElementById('cardContainerId').innerHTML = '';
        myId = [];
        mycohoice = [];
        //gamereload();
      } else if (mycohoice[0] == mycohoice[1]) {
        setTimeout(() => {
          wintime.push(i);
          card[myId[0]].style.transition = 'all 2s linear;'
          document.getElementById('win').innerHTML = wintime.length;
          card[myId[0]].setAttribute('src', 'img/right.png');
          card[myId[1]].setAttribute('src', 'img/right.png');
          mycohoice = [];
          myId = [];
        }, 10);
      }
      else if (mycohoice.length > 0 && mycohoice[0] != mycohoice[1]) {
        losstime.push(i);
        document.getElementById('loss').innerHTML = losstime.length;
        card[myId[0]].setAttribute('src', 'img/wrong.png');
        card[myId[1]].setAttribute('src', 'img/wrong.png');
        mycohoice = [];
        myId = [];
      }
    }
    if (checkwin.length == 12) {
      if (wintime.length / losstime.length > 1) {
        setTimeout(() => {

          myId = [];
          mycohoice = [];
          checkwin = [];
          wintime = [];
          losstime = [];
          document.getElementById('cardContainerId').innerHTML = '';
          document.getElementById('win').innerHTML = '0';
          document.getElementById('loss').innerHTML = '0';
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

          myId = [];
          mycohoice = [];
          checkwin = [];
          wintime = [];
          losstime = [];
          document.getElementById('win').innerHTML = '0';
          document.getElementById('loss').innerHTML = '0';
          document.getElementById('cardContainerId').innerHTML = '';
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
        imgContainer.setAttribute('src', 'img/eye.png');
        imgContainer.setAttribute('data-id', i);
        imgContainer.classList.remove('disabled')
        imgContainer.addEventListener('click', () => flipcard(i, imgContainer, randomCard))

      }

        , 10000);
      cardContainer.appendChild(imgContainer);

    };
  }
  gamereload();
})
