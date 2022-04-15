
class Tabs {
    constructor({ rootSelector, activeControlClass = 'active', activePaneClass = 'active', activeTab = 1 })
    {
        this._refs = this._getRefs(rootSelector);
        this._activeControlClass = activeControlClass;
        this._activePaneClass = activePaneClass;
        this._activeTabIdx = activeTab - 1;
        this._bindEvents();
        this._setActiveTab();
    }

    _getRefs(root) {
        const refs = {};
        refs.controls = document.querySelector(`${root} [data-controls]`);
        refs.panes = document.querySelector(`${root} [data-panes]`); 
        console.log(this._activeControlClass);
        return refs;
    }

    _bindEvents() {
        this._refs.controls.addEventListener('click', this._onControlsClick.bind(this));
    }

    _onControlsClick(e) {
        console.log(e.target);
        console.log(this);
        if (e.target.nodeName != 'A') {
            return;
        }
        const currentActiveControlItem = this._refs.controls.querySelector(`.${this._activeControlClass}`);
       
        if (currentActiveControlItem) {
            currentActiveControlItem.classList.remove(this._activeControlClass);
            
            const paneID = this._getPaneId(currentActiveControlItem);
            const pane = this._getPaneById(paneID);
            pane.classList.remove(this._activePaneClass);
        }

        const controlItem = e.target;
        controlItem.classList.add(this._activeControlClass);

        const paneID = this._getPaneId(controlItem);
        const pane = this._getPaneById(paneID)
        pane.classList.add(this._activePaneClass); 
    }

    _getPaneId(control) {
        return control.getAttribute('href').slice(1);
    }

    _getPaneById(id) {
        return this._refs.panes.querySelector(`#${id}`);
    }

    _setActiveTab() {
        const cotrolItems = this._refs.controls.querySelectorAll('a');
        const control = this._refs.controls.children[this._activeTabIdx];
        control.classList.add(this._activeControlClass);

        const paneID = this._getPaneId(control);
        const pane = this._getPaneById(paneID);
        pane.classList.add(this._activePaneClass);

    }

   
}

const tab1 = new Tabs({
    rootSelector: '#tabs-1',
    activeControlClass: 'controls__item--active',
    activePaneClass: 'pane--active',
    activeTab: 1,
});

tab1._onControlsClick
console.log(tab1)

