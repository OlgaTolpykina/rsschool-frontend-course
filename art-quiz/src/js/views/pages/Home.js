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
                    <button class="button button-category categories-route click" id="artists">Artists quiz</button>
                    <button class="button button-category categories-route click" id="pictures">Pictures quiz</button>
                </div>
            </div>
        </div>    
        `;
  },
};

export default HomePage;
