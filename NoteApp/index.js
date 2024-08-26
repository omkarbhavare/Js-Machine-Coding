const addNewNoteBtn = document.getElementById("addNewNoteBtn");

addNewNoteBtn.addEventListener("click", function () {
  addNote();
});

function saveNote() {
  const notes = document.querySelectorAll(".note textarea");

  const data = [];

  notes.forEach((note) => data.push(note.value));

  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
}

function addNote(text = "") {
  const note = document.createElement("div");
  //   note.classList.add("note");
  note.innerHTML = `<div class="note">
  <div class="headerTool">
    <i class="fa fa-save saveBtn" style="font-size: 24px"></i>
    <i class="fa fa-trash-o deleteBtn" style="font-size: 24px"></i>
    
  </div>
  <textarea>${text}</textarea
  >
</div>`;

  note.querySelector(".saveBtn").addEventListener("click", function () {
    saveNote();
  });

  note.querySelector(".deleteBtn").addEventListener("click", function () {
    note.remove();
    saveNote();
  });

  note.addEventListener("mouseout", function () {
    saveNote();
  });

  notesContainer.appendChild(note);
}

(function () {
  const lsNotes = JSON.parse(localStorage.getItem("notes"));

  if (lsNotes === null) {
    addNote();
  } else {
    lsNotes.forEach((note) => {
      addNote(note);
    });
  }
})();
