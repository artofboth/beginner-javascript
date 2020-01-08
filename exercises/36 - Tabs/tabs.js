const tabs = document.querySelector('.tabs');
const buttons = tabs.querySelectorAll('[role="tab"]');
const panels = tabs.querySelectorAll('[role="tabpanel"]');

console.log(panels);

function handleClick(e) {
  // Hide all tab panels
  buttons.forEach(function(button) {
    button.setAttribute('aria-selected', 'false');
  });
  // Mark all tabs as unselected
  panels.forEach(function(panel) {
    panel.setAttribute('hidden', '');
  });
  // Mark the clicked tab as selected
  const clickedButton = e.target;
  clickedButton.setAttribute('aria-selected', 'true');

  // Find the associated tabPanel and show it.
  const buttonID = e.target.getAttribute('id');
  panels.forEach(panel => {
    const label = panel.getAttribute('aria-labelledby');
    if (label === buttonID) {
      panel.removeAttribute('hidden');
    }
  });
}
// Add event listeners to tabs
buttons.forEach(button => button.addEventListener('click', handleClick));
