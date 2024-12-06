function activateTab(tabId) {
    // Hide all tab content
    const contentSections = document.querySelectorAll('.tab-content');
    contentSections.forEach(section => {
        section.style.display = 'none';  // Hide all content
    });

    // Remove active styles from all buttons EXCEPT the location button and the pesan button
    const tabs = document.querySelectorAll('button');
    tabs.forEach(tab => {
        // Make sure we are not altering the location button or the pesan button
        if (tab.id !== 'locationButton' && tab.id !== 'ButtonPesan') {
            tab.classList.remove('bg-black', 'text-white');
            tab.classList.add('bg-white', 'text-gray-800');
        }
    });

    // Show content for the active tab
    const activeContent = document.getElementById('content-' + tabId);
    if (activeContent) {
        activeContent.style.display = 'block';  // Show the selected tab's content
    }

    // Set the clicked tab as active
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('bg-black', 'text-white');
    activeTab.classList.remove('bg-white', 'text-gray-800');
}

// Optional: If you want to handle location button clicks via JS

// Prevent color change for the Pesan button when clicked
const pesanButton = document.getElementById("ButtonPesan");
pesanButton.addEventListener("click", function(event) {
    event.preventDefault();  // Prevent default action (like page reload)
    // Optionally, you can open the link or handle the logic as needed.
    window.open("https://www.instagram.com/p/C075kMYB2ay/", "_blank");  // Open the Instagram link
});
