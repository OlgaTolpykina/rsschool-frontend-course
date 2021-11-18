const SettingsPage = {
    render: () => {
        return `
        <div class="container">
            <div class="header">
                <p class="setting-title home-route">Setting</p>
                <div class="exit home-route"></div>
            </div>
            <div class="content content-settings">
                <div>
                    <p class="subsetting-title">Volume</p>
                    <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="0.3">
                    <div class="setting-volume">
                        <button class="mute"></button>
                        <button class="sound"></button>
                    </div> 
                </div>
                <div>
                    <p class="subsetting-title">Time game</p>
                    <div class="setting-timer-wrapper">
                        <span id="on">On</span>
                        <div class="setting-timer">
                            <input type="checkbox" class="hidden">
                            <span class="slider"></span>
                        </div>    
                        <span id="off" class="hidden">Off</span>
                    </div>
                </div>
                <div>
                    <p class="subsetting-title">Time to answer</p>
                    <div class="setting-time">
                        <button>
                            <span>-</span>
                        </button>
                        <input id="time-input" type="number" min="1" max="30" value="20" readonly>
                        <span class="time-input-value">20</span>
                        <button>
                            <span>+</span>
                        </button>
                    </div>
                </div>
                <div class="setting-buttons">
                    <button class="button button_element">Default</button>
                    <button class="button button_colored home-route">Save</button>
                </div>
            </div>
        </div>`;
    }
}

export default SettingsPage;