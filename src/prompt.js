import readlineSync from 'readline-sync';

export default function setPrompt() {
  readlineSync.setDefaultOptions({ prompt: 'Your answer: ' });
}
