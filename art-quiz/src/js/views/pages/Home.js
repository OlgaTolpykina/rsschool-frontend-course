const HomePage = {
    render: () => {
        return `
        <div class="container container-main">
            <div class="header">
                <div class="settings settings-route"></div>
            </div>
            <div class="content">
                <div class="logo"></div>
                <div class="button-wrapper">
                    <button class="button artists-quiz categories-route">Artist quiz</button>
                    <button class="button picture-quiz categories-route">Pictures quiz</button>
                </div>
            </div>
        </div>    
        `;
    }
}

export default HomePage;