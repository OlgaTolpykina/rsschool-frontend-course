const SettingsPage = {
    render: () => {
        return `
        <div class="container">
            <div class="header">
                <p class="setting-title home-route click">Setting</p>
                <div class="exit home-route click"></div>
            </div>
            <div class="content content-settings">
                <div>
                    <p class="subsetting-title">Volume</p>
                    <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="0.3">
                    <div class="setting-volume">
                        <button class="mute"></button>
                        <button class="sound click"></button>
                    </div> 
                </div>
                <div>
                    <p class="subsetting-title">Time game</p>
                    <div class="setting-timer-wrapper">
                        <span id="on" class="hidden">On</span>
                        <label>
                            <div class="setting-timer">
                                <input id="timer" type="checkbox" class="hidden">
                                <span class="slider off"></span>
                            </div>
                        </label>        
                        <span id="off">Off</span>
                    </div>
                </div>
                <div>
                    <p class="subsetting-title">Time to answer</p>
                    <div class="setting-time">
                        <button class="click">
                            <span class="less-time">-</span>
                        </button>
                        <input id="time-input" type="number" min="5" max="30" value="20" readonly>
                        <span class="time-input-value"></span>
                        <button class="click">
                            <span class="more-time">+</span>
                        </button>
                    </div>
                </div>
                <div class="setting-buttons">
                    <button class="button button_element click">Default</button>
                    <button class="button button_colored save-button home-route click">Save</button>
                </div>
            </div>
        </div>`;
    }
}

export default SettingsPage;