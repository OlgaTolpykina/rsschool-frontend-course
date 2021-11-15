const HomePage = {
    render: () => {
        return `
            <div class="header">
            <div class="settings"></div>
            </div>
            <div class="content">
                <div class="logo"></div>
                <div class="button-wrapper">
                    <button class="button artists-quiz">Artist quiz</button>
                    <button class="button picture-quiz">Pictures quiz</button>
                </div>
            </div>
        `;
    }
}

export default HomePage;