// import { Colors, Coefficients } from '../../services/constants';

// export class RangeSlider {
//   sliders: NodeListOf<HTMLInputElement>;
//   displayValueOne: HTMLInputElement;
//   displayValueTwo: HTMLInputElement;
//   displayValueThree: HTMLInputElement;
//   displayValueFour: HTMLInputElement;
//   sliderTracks: NodeListOf<HTMLInputElement>;
//   sliderOneMaxValue: string;
//   sliderOneMinValue: string;
//   sliderTwoMaxValue: string;
//   sliderTwoMinValue: string;

//   constructor() {
//     this.sliders = document.querySelectorAll('.range__input');
//     this.displayValueOne = document.querySelector('#range1') as HTMLInputElement;
//     this.displayValueTwo = document.querySelector('#range2') as HTMLInputElement;
//     this.displayValueThree = document.querySelector('#range3') as HTMLInputElement;
//     this.displayValueFour = document.querySelector('#range4') as HTMLInputElement;
//     this.sliderTracks = document.querySelectorAll('.range__input');
//     this.sliderOneMaxValue = this.sliderTracks[0].max;
//     this.sliderOneMinValue = this.sliderTracks[0].min;
//     this.sliderTwoMaxValue = this.sliderTracks[2].max;
//     this.sliderTwoMinValue = this.sliderTracks[2].min;
//   }

//   public setRangeSliders(sliders: NodeListOf<HTMLInputElement>) {
//     this.sliders = sliders;

//     this.colorSlider(this.sliders);

//     this.sliders[0].addEventListener('input', () => {
//       if (parseInt(this.sliders[1].value) - parseInt(this.sliders[0].value) <= 0){
//         this.sliders[0].value = `${parseInt(this.sliders[1].value)}`;
//       }
//       this.colorSlider(this.sliders);
//     });
     
//     this.sliders[1].addEventListener('input', () => {
//       if (parseInt(this.sliders[1].value) - parseInt(this.sliders[0].value) <= 0){
//         this.sliders[1].value = `${parseInt(this.sliders[0].value)}`;
//       }
//       this.colorSlider(this.sliders);
//     });

//     this.sliders[2].addEventListener('input', () => {
//       if (parseInt(this.sliders[3].value) - parseInt(this.sliders[2].value) <= 0){
//         this.sliders[2].value = `${parseInt(this.sliders[3].value)}`;
//       }
//       this.colorSlider(this.sliders);
//     });

//     this.sliders[3].addEventListener('input', () => {
//       if (parseInt(this.sliders[3].value) - parseInt(this.sliders[2].value) <= 0){
//         this.sliders[3].value = `${parseInt(this.sliders[2].value)}`;
//       }
//       this.colorSlider(this.sliders);
//     });
//   }

//   private colorSlider(sliders: NodeListOf<HTMLInputElement>) {
//     (this.displayValueOne as HTMLElement).textContent = sliders[0].value;
//     (this.displayValueTwo as HTMLElement).textContent = sliders[1].value;
//     (this.displayValueThree as HTMLElement).textContent = sliders[2].value;
//     (this.displayValueFour as HTMLElement).textContent = sliders[3].value;
//     const percent1 = ((parseInt(sliders[0].value) - parseInt(this.sliderOneMinValue)) / (parseInt(this.sliderOneMaxValue) - parseInt(this.sliderOneMinValue))) * Coefficients.percent;
//     const percent2 = ((parseInt(sliders[1].value) - parseInt(this.sliderOneMinValue)) / (parseInt(this.sliderOneMaxValue) - parseInt(this.sliderOneMinValue))) * Coefficients.percent;
//     const percent3 = ((parseInt(sliders[2].value) - parseInt(this.sliderTwoMinValue)) / (parseInt(this.sliderTwoMaxValue) - parseInt(this.sliderTwoMinValue))) * Coefficients.percent;
//     const percent4 = ((parseInt(sliders[3].value) - parseInt(this.sliderTwoMinValue)) / (parseInt(this.sliderTwoMaxValue) - parseInt(this.sliderTwoMinValue))) * Coefficients.percent;

//     this.sliderTracks[0].style.background = `linear-gradient(to right, ${Colors.white} ${percent1}% , ${Colors.main} ${percent1}% , ${Colors.main} ${percent2}%, ${Colors.white} ${percent2}%)`;
//     this.sliderTracks[2].style.background = `linear-gradient(to right, ${Colors.white} ${percent3}% , ${Colors.main} ${percent3}% , ${Colors.main} ${percent4}%, ${Colors.white} ${percent4}%)`;
//   }
// }

// export default new RangeSlider();