const HomePage = {
  render: () => {
    return `
        <div class="container container-main">
            <div class="header">
                <div class="settings settings-route click"></div>
            </div>
            <div class="content">
                <div class="logo"></div>
                <div class="button-wrapper">
                    <button class="button button-category categories-route click" data-type="artists">Художники</button>
                    <button class="button button-category categories-route click" data-type="pictures">Картины</button>
                </div>
            </div>
        </div>    
        `;
  },
};

export default HomePage;
