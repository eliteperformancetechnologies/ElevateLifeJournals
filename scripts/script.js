// script.js

document.addEventListener("DOMContentLoaded", function () {
    const journalForm = document.getElementById("journalForm");
    const entryDateInput = document.getElementById("entryDate");
    const journalEntry = document.getElementById("journalEntry");
    const userNameInput = document.getElementById("userName");

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
        }
    }
});
