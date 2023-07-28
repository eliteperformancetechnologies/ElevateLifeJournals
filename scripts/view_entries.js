// view_entries_script.js

document.addEventListener("DOMContentLoaded", function () {
    const entriesList = document.getElementById("entriesList");

    viewEntries();

    function viewEntries() {
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
});
