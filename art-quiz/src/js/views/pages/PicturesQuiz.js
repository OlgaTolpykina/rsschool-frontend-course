const PicturesQuizPage = {
  render: () => {
    let template = '';
    template += `
            <div class="container container-question">
              <div class="header">
                  <button class="exit categories-route" id="pictures"></button>
                  <input type="range" class="timer-input" value='0.3' min='0' max='1' step='0.1'>
                  <div>
                      <span>0</span>
                      <span>:</span>
                      <span>20</span>
                  </div>
              </div>
              <div class="content">
                  <p class="question-text">Какая картина принадлежит X?</p>
                  <div class="pictures-wrapper">
                      <div class="answer" id="variant1"></div>
                      <div class="answer" id="variant2"></div>
                      <div class="answer" id="variant3"></div>
                      <div class="answer" id="variant4"></div>
                  </div>
              </div>
            </div> 
        `;

    return template;
  },
};

export default PicturesQuizPage;
