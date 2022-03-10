import storageManager from './storageManager';
import snowflakeImg from '../../assets/img/svg/snowflake_blue.svg';

class Settings {
  private snowBtn: HTMLElement;
  private isSnowing: boolean;
  private intervalId: NodeJS.Timer | null;
  private rootNode: HTMLElement;
  private musicBtn: HTMLElement;
  private isPlay: boolean;
  private audio: HTMLAudioElement;

  constructor() {
    this.rootNode = <HTMLElement>document.getElementById('app');
    this.snowBtn = <HTMLElement>document.querySelector('.theme');
    this.musicBtn = <HTMLElement>document.querySelector('.volume');

    this.isSnowing = false;
    this.isPlay = false;
    this.intervalId = null;

    this.audio = new Audio();
    this.audio.src = './assets/audio/audio.mp3';
    this.audio.volume = 0.3;
  }

  public init(): void {
    this.initMusic();
    this.initSnowing();
  }

  private initMusic(): void {
    this.isPlay = <boolean>storageManager.getItem('music', 'local');
    this.musicBtn = <HTMLElement>document.querySelector('.volume');
    this.playMusicOnLoad();
    if (this.musicBtn) {
      this.handleMusicBtnClick();
    }
  }

  private handleMusicBtnClick() {
    this.musicBtn.onclick = () => this.playAudio();
  }

  private initSnowing(): void {
    this.isSnowing = <boolean>storageManager.getItem('snow', 'local');
    this.snowBtn = <HTMLElement>document.querySelector('.theme');
    this.isSnowOnLoad();
    if (this.snowBtn) {
      this.handleSnowBtnClick();
    }
  }

  private handleSnowBtnClick() {
    this.snowBtn.onclick = () => this.runAndStopSnow();
  }

  private isSnowOnLoad() {
    if (this.isSnowing) {
      this.intervalId = setInterval(this.createSnowFlake, 100);
      if (this.snowBtn) {
        this.snowBtn.classList.add('active');
      }
    }
  }

  private playMusicOnLoad() {
    if (this.isPlay) {
      this.audio.play();
      if (this.musicBtn) {
        this.musicBtn.classList.remove('volume');
        this.musicBtn.classList.add('mute');
      }
    }
  }

  private playAudio(): void {
    if (!this.isPlay) {
      this.audio.play();
      this.isPlay = true;
    } else {
      this.audio.pause();
      this.isPlay = false;
    }
    this.musicBtn.classList.toggle('volume');
    this.musicBtn.classList.toggle('mute');
    storageManager.addItem('music', this.isPlay, 'local');
  }

  private runAndStopSnow() {
    if (!this.isSnowing) {
      this.intervalId = setInterval(this.createSnowFlake, 500);
      this.snowBtn.classList.add('active');
      this.isSnowing = true;
    } else {
      clearInterval(this.intervalId!);
      this.snowBtn.classList.remove('active');
      this.isSnowing = false;
    }
    storageManager.addItem('snow', this.isSnowing, 'local');
  }

  private createSnowFlake(): void {
    this.rootNode = <HTMLElement>document.getElementById('app');
    const snowflake: HTMLElement = document.createElement('span');
    snowflake.classList.add('snowflake_falling');
    snowflake.style.backgroundImage = `url("${snowflakeImg}")`;
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 5 + 3 + 's';
    snowflake.style.width = Math.random() * 10 + 20 + 'px';
    snowflake.style.height = snowflake.style.width;
    snowflake.style.opacity = `${Math.random()}`;
    this.rootNode.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 3000);
  }
}

export default new Settings();
