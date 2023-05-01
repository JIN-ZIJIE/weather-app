// MAKE TITLE TEXT
    const title = document.createElement('h1');
    title.classList.add('h1');
    title.innerHTML = 'My Images';

    // MAKE A DIV TO HOLD THE IMG AND BTN
    const helper = document.createElement('div');
    helper.classList.add('flex');

    // MAKE IMAGE CONTAINER
    const imgContainer = document.createElement('img');
    imgContainer.setAttribute('id', 'img-box');

    // MAKE BUTTON
    const btn = document.createElement('a');
    btn.innerHTML = 'Change Image';
    btn.setAttribute('id', 'btn');
    btn.setAttribute('onclick', 'changeImg()');

    // ADD ELEMENTS INTO HTML
    document.body.appendChild(title);
    document.body.appendChild(helper);
    helper.appendChild(imgContainer);
    helper.appendChild(btn);

    // VARIABLES + ARRAYS
    imgContainer.src = 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
    let i = 0;
    const imageArray = [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      'https://images.unsplash.com/photo-1614597396930-cd6760b99f7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      'https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      'https://images.unsplash.com/photo-1530569673472-307dc017a82d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
      'https://images.unsplash.com/photo-1505764761634-1d77b57e1966?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    ];

    // STYLES
    let style = document.createElement('style');
    document.head.appendChild(style);

    style.sheet.insertRule(`
    * {
      box-sizing: border-box;
      font-size: 10px;
      margin: 0;
      padding: 0;
      font-family: 'Poiret One', cursive;
      transition: all 300ms;
    }`
    );

    style.sheet.insertRule(`
    html {
      background-image: linear-gradient(#1864ab, #1971c2, #1c7ed6, #228be6, #1c7ed6, #1971c2, #1864ab);
    }`);

    style.sheet.insertRule(`
    h1 {
      font-size: 7.2rem;
      text-align: center;
      color: white;
      font-family: 'Cutive Mono', monospace;
    }`);

    style.sheet.insertRule(`
    a {
      padding: 2rem 4rem;
      font-size: 2.4rem;
      background-color: #c92a2a;
      cursor: pointer;
      color: white;
      border-radius: 2rem;
      text-decoration: none;
      font-weight: 800;
    }`);

    style.sheet.insertRule(`
    a:hover {
      background-color: #ff6b6b;
      color: black;
      border-radius: 1.5rem;
      transform: scale(1.04);
    }`);

    style.sheet.insertRule(`
    img {
      width: 30rem;
      height: 45rem;
      border-radius: 1rem;
      cursor: pointer;
    }`);

    style.sheet.insertRule(`
    img:hover {
      border-radius: 3rem;
      transform: scale(1.08);
    }`);

    style.sheet.insertRule(`
    .flex {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;
    }`);

    const changeImg = () => {
      i++;
      if (i === imageArray.length) {
        i = 0;
      }
      imgContainer.src = imageArray[i];
    }
