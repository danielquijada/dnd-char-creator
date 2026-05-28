import { testSelections } from "./test-selection.js";

const selections = [];
let currentSelection;

const chosenOptions = [];

testSelections.forEach(testSelection => addSelection(testSelection));
startSelections();

/*************************************************************************************************/

/**
 * Adds a new selection to the array of selections. Specifically, adds it after its master selection (the selection that made this selection necessary)
 * so it comes right after that one.
 */
function addSelection(selection, masterIndex = null) {
  if (masterIndex == null) {
    selections.push(selection);
  } else {
    selections.splice(masterIndex + 1, 0, selection);
  }
}

/**
 * Starts the selections from the first one.
 */
function startSelections() {
  currentSelection = -1;
  nextSelection();
}

/**
 * Sets the next selection, if any. If there isn't any left, just say so and don't show anything.
 */
function nextSelection() {
  const nextSelection = selections[++currentSelection];
  setSelection(nextSelection || { title: "No more selections, your job here is done! :)" });
}

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

  clearOptions();
  selection.options.forEach((opt, index) => addOption(opt.title, opt.text, index));
}

/**
 * Clears the existing options from the screen.
 */
function clearOptions() {
  const optionsElement = document.querySelector('div#selector-block>div#option-list');
  optionsElement.replaceChildren();
}

/*
 * Adds an option to the selection screen.
 */
function addOption(title, content, index) {
  const optionsElement = document.querySelector('div#selector-block>div#option-list');

  optionsElement.appendChild(createOption(title, content, index));
  processReadMoreOptions();
}

/**
 * Creates an option element, to be added in the selection screen.
 */
function createOption(title, content, index) {
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

  option.onclick = () => toggleOptionSelection(index);

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

/**
 * Toggles the selection for an option in the current selection
 */
function toggleOptionSelection(index) {
  // TODO Remove console log.
  console.log('Effects:', selections[currentSelection].options[index].effects);

  if (chosenOptions[currentSelection] == null) {
    chosenOptions[currentSelection] = [];
  }
  const chosen = chosenOptions[currentSelection];
  if (!chosen.includes(index)) {
    chosen.push(index);
  } else {
    chosen.splice(chosen.indexOf(index));
  }

  toggleSelectedClass(index);

  if (selections[currentSelection].choose <= chosenOptions[currentSelection].length) {
    nextSelection();
  }

  // TODO add "update results" or similar, to show all effects on the right panel.
};

/**
 * Toggles the selected class for the option in the specified index.
 */
function toggleSelectedClass(index) {
  const optionsElement = document.querySelector('div#selector-block>div#option-list');

  optionsElement.children[index].classList.toggle('selected');
}

