let optionTexts = Array.from(document.querySelectorAll('div.option>div.option-text'));

optionTexts.forEach(
  textElement => {
    if (textElement.scrollHeight > textElement.clientHeight) {
      console.log('This option is clipped:', textElement);
      textElement.classList.add('clipped');
    }
  }
)