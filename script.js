import { testSelection } from "./test-selection.js";

setSelection(testSelection);

/*************************************************************************************************/

/**
 * Sets a selection for the "Selection" sreen. It expects an object formatted as follows:
 * @param {*} selection {
 *    title: Title of the Selection,
 *    choose: 1, (number of choices to be made)
 *    options: [ (array of options to be shown, each as an object as follows)
 *      {
 *        title: Title of the Option,
 *        text: text to be shown in the option,
 *        effects: effects (a string describing the effects)
 *      }
 *    ]
 * }
 */
function setSelection(selection) {
  const selectorBlockTitle = document.querySelector('#selector-block>#selection-title');
  selectorBlockTitle.innerText = selection.title;

  // TODO add support for the "choose" parameter

  selection.options.forEach(opt => addOption(opt.title, opt.text, opt.effects));
}

/*
 * Adds an option to the selection screen.
 */
function addOption(title, content, effects) {
  const optionsElement = document.querySelector('div#selector-block>div#option-list');

  optionsElement.appendChild(createOption(title, content, effects));
  processReadMoreOptions();
}

/**
 * Creates an option element, to be added in the selection screen.
 */
function createOption(title, content, effects) {
  const option = document.createElement('div');
  option.classList.add('option');

  const header = document.createElement('h2');
  header.classList.add('option-title');
  header.innerHTML = title;
  option.appendChild(header);

  const text = document.createElement('div');
  text.classList.add('option-text');
  text.innerHTML = content;
  option.appendChild(text);

  const readMore = document.createElement('a');
  readMore.classList.add('read-more');
  readMore.innerHTML = 'read more';
  text.appendChild(readMore);

  option.onclick = () => addEffects(effects);

  return option;
}

/**
 * Adds a class that makes the "read more" button visible.
 */
function processReadMoreOptions() {
  const optionTexts = Array.from(document.querySelectorAll('div.option>div.option-text'));

  optionTexts.forEach(
    textElement => {
      if (textElement.scrollHeight > textElement.clientHeight) {
        textElement.classList.add('clipped');
      } else {
        textElement.classList.remove('clipped');
      }
    }
  );
}

function addEffects(effects) {
  // TODO Add support to adding the effects in the right panel.
  console.log('Effects:', effects);
};