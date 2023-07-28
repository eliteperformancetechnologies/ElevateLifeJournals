// script.js

document.addEventListener("DOMContentLoaded", function () {
    const journalForm = document.getElementById("journalForm");
    const entryDateInput = document.getElementById("entryDate");
    const journalEntry = document.getElementById("journalEntry");
    const userNameInput = document.getElementById("userName");
    const entriesDialog = document.getElementById("entriesDialog");
    const entriesTitle = document.getElementById("entriesTitle");
    const entriesList = document.getElementById("entriesList");

    journalForm.addEventListener("submit", function (event) {
        event.preventDefault();
        saveEntry();
    });

    function saveEntry() {
        const entryDate = entryDateInput.value;
        const entryText = journalEntry.value.trim();
        const userName = userNameInput.value.trim();

        if (entryText !== "" && userName !== "") {
            const entryKey = `${entryDate}-${new Date().getTime()}`;
            const entryData = {
                entryText,
                userName,
            };
            localStorage.setItem(entryKey, JSON.stringify(entryData));

            entryDateInput.value = "";
            journalEntry.value = "";
            userNameInput.value = "";

            alert("Journal entry saved successfully!");

            loadEntries(); // Reload the entries list
        }
    }

    function loadEntries() {
        entriesList.innerHTML = "";

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const entryData = JSON.parse(localStorage.getItem(key));
            const entryDate = key.split("-")[0];
            const entryText = entryData.entryText;
            const userName = entryData.userName;

            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${entryDate}</strong> by <em>${userName}</em>: ${entryText}`;
            entriesList.appendChild(listItem);
        }
    }

    function openDialog() {
        loadEntries();
        entriesTitle.innerText = "Your Entries";
        entriesDialog.style.display = "block";
    }

    function closeDialog() {
        entriesDialog.style.display = "none";
    }
});
