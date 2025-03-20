const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. As they walked, they came upon :inserty:, they stared in awe for a few moments so they decided to walk around more. Then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: carries a purse that weighs 300 pounds, and it was a hot day and emotional time to be alive."

let insertX = ["My 'Roommate'", "Jane Lynch", "John Mulaney"]

let insertY = ["the barn", "the high school", "Las Vegas"]

let insertZ = ["absolutely and entirely blew up", "dissipated", "transformed into a unicorn and flew around the entire region"]

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' stone'; // Convert pounds to stone
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade'; // Convert Fahrenheit to Centigrade

    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
