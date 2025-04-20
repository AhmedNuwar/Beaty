function openTab(evt, tabId) {
    // Hide all tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(c => c.classList.remove('active'));
  
    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(b => b.classList.remove('active'));
  
    // Show selected tab and activate its button
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
  }
  