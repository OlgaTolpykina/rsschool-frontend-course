export class RangeSlider {

  setRangeSliders() {
    const sliders: NodeListOf<HTMLInputElement> = document.querySelectorAll('.range__input');
    let displayValueOne: HTMLInputElement = document.querySelector('#range1') as HTMLInputElement;
    let displayValueTwo: HTMLInputElement = document.querySelector('#range2') as HTMLInputElement;
    let displayValueThree: HTMLInputElement = document.querySelector('#range3') as HTMLInputElement;
    let displayValueFour: HTMLInputElement = document.querySelector('#range4') as HTMLInputElement;
    let sliderTracks: NodeListOf<HTMLInputElement> = document.querySelectorAll('.range__input');
    let sliderOneMaxValue = sliderTracks[0].max;
    let sliderOneMinValue = sliderTracks[0].min;
    let sliderTwoMaxValue = sliderTracks[2].max;
    let sliderTwoMinValue = sliderTracks[2].min;


    sliders[0].addEventListener('input', (e) => {
      if(parseInt(sliders[1].value) - parseInt(sliders[0].value) <= 0){
        sliders[0].value = `${parseInt(sliders[1].value)}`;
      }
      (displayValueOne as HTMLElement).textContent = sliders[0].value;
      let percent1 = ((parseInt(sliders[0].value) - parseInt(sliderOneMinValue)) / (parseInt(sliderOneMaxValue) - parseInt(sliderOneMinValue))) * 100;
      let percent2 = ((parseInt(sliders[1].value) - parseInt(sliderOneMinValue)) / (parseInt(sliderOneMaxValue) - parseInt(sliderOneMinValue))) * 100;
      sliderTracks[0].style.background = `linear-gradient(to right, #fff ${percent1}% , #278D9F ${percent1}% , #278D9F ${percent2}%, #fff ${percent2}%)`;
    });
     
     sliders[1].addEventListener('input', (e) => {
      if(parseInt(sliders[1].value) - parseInt(sliders[0].value) <= 0){
        sliders[1].value = `${parseInt(sliders[0].value)}`;
      }
      (displayValueTwo as HTMLElement).textContent = sliders[1].value;
      let percent1 = ((parseInt(sliders[0].value) - parseInt(sliderOneMinValue)) / (parseInt(sliderOneMaxValue) - parseInt(sliderOneMinValue))) * 100;
      let percent2 = ((parseInt(sliders[1].value) - parseInt(sliderOneMinValue)) / (parseInt(sliderOneMaxValue) - parseInt(sliderOneMinValue))) * 100;
      sliderTracks[0].style.background = `linear-gradient(to right, #fff ${percent1}% , #278D9F ${percent1}% , #278D9F ${percent2}%, #fff ${percent2}%)`;
     });

     sliders[2].addEventListener('input', (e) => {
      if(parseInt(sliders[3].value) - parseInt(sliders[2].value) <= 0){
        sliders[2].value = `${parseInt(sliders[3].value)}`;
      }
      (displayValueThree as HTMLElement).textContent = sliders[2].value;
      let percent3 = ((parseInt(sliders[2].value) - parseInt(sliderTwoMinValue)) / (parseInt(sliderTwoMaxValue) - parseInt(sliderTwoMinValue))) * 100;
      let percent4 = ((parseInt(sliders[3].value) - parseInt(sliderTwoMinValue)) / (parseInt(sliderTwoMaxValue) - parseInt(sliderTwoMinValue))) * 100;
      sliderTracks[2].style.background = `linear-gradient(to right, #fff ${percent3}% , #278D9F ${percent3}% , #278D9F ${percent4}%, #fff ${percent4}%)`;
    });

    sliders[3].addEventListener('input', (e) => {
      if(parseInt(sliders[3].value) - parseInt(sliders[2].value) <= 0){
        sliders[3].value = `${parseInt(sliders[2].value)}`;
      }
      (displayValueFour as HTMLElement).textContent = sliders[3].value;
      let percent3 = ((parseInt(sliders[2].value) - parseInt(sliderTwoMinValue)) / (parseInt(sliderTwoMaxValue) - parseInt(sliderTwoMinValue))) * 100;
      let percent4 = ((parseInt(sliders[3].value) - parseInt(sliderTwoMinValue)) / (parseInt(sliderTwoMaxValue) - parseInt(sliderTwoMinValue))) * 100;
      sliderTracks[2].style.background = `linear-gradient(to right, #fff ${percent3}% , #278D9F ${percent3}% , #278D9F ${percent4}%, #fff ${percent4}%)`;
     });
  }
}