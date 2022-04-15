// const refs = {
//     controls: document.querySelector(`#tabs-1 [data-controls]`),
//     panes: document.querySelector(`#tabs-1 [data-panes]`),
// }


// refs.controls.addEventListener('click', onControlsClick);

// function onControlsClick(e) {
//     if (e.target.nodeName != 'A') {
//         return;
//     }
    
//     const currentActiveControlItem = refs.controls.querySelector('.controls__item--active');
    
//     if (currentActiveControlItem) {
//         currentActiveControlItem.classList.remove('controls__item--active');
//         const paneID = getPaneId(currentActiveControlItem);
//         const pane = getPaneById(paneID);
//         pane.classList.remove('pane--active');
//     }

//     const controlItem = e.target;
//     controlItem.classList.add('controls__item--active');
   
//     const paneID = getPaneId(controlItem);

//     const pane = getPaneById(paneID)
//     pane.classList.add('pane--active'); 
//     console.log(pane);
// }

// function getPaneId(control) {
//     return control.getAttribute.getAttribute('href').slice(1);
// }

// function getPaneById(id) {
//     return refs.panes.querySelector(`#${id}`);
// }