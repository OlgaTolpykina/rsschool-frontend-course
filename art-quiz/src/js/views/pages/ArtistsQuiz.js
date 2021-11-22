const ArtistsQuizPage = {
  render: () => {
    let template = '';
    template += `
          <div class="container container-question">
            <div class="header">
                <button class="exit categories-route" id="artists"></button>
                <input type="range" class="timer-input" value='0.3' min='0' max='1' step='0.1'>
                <div>
                    <span>0</span>
                    <span>:</span>
                    <span>20</span>
                </div>
            </div>
            <div class="content">
                <p class="question-text">Кто автор картины?</p>
                <div class="artists-picture">
                  <ul class="pagination">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div class="artists-answers">
                    <div class="artists-answer">А</div>
                    <div class="artists-answer">Б</div>
                    <div class="artists-answer">В</div>
                    <div class="artists-answer">Г</div>
                </div>
            </div>
          </div>
        `;

    return template;
  },
};

export default ArtistsQuizPage;
