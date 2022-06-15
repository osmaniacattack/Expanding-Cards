// Get all panels as a nodeList array

const panels = document.querySelectorAll('.panel');

// Iterate through panels and add the event listener 'click' that removes the active class 
// and then adds it to the specific panel that was clicked.

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach( (panel) => {
        panel.classList.remove('active');
    });
};