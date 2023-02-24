class TextEditor {
  constructor() {
    this.editor = document.getElementById('editor');
    this.editor.addEventListener('change', this.addToLocalStorage.bind(this));

    this.getFromLocalStorage();

    this.clearBtn = document.querySelector('button');
    this.clearBtn.addEventListener('click', this.clearText.bind(this));
  }

  addToLocalStorage() {
    localStorage.setItem('editor', this.editor.value)
  }

  getFromLocalStorage() {
    if (localStorage.editor) {
      this.editor.value = localStorage.editor;
    }
  }

  clearText() {
    if (this.editor.value) {
      this.editor.value = '';
      delete localStorage.editor;
    }
  }
}

const textEditor = new TextEditor();

