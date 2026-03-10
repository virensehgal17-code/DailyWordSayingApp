// App State
let tallyItems = [];
let currentTheme = 'theme-midnight';

// Predefined catalog of items with detailed types and icons
const ITEM_CATALOG = [
    { name: 'Beer', icon: '🍺', type: 'Drink', isDrink: true },
    { name: 'IPA', icon: '🍻', type: 'Drink', isDrink: true },
    { name: 'Stout', icon: '🏺', type: 'Drink', isDrink: true },
    { name: 'Vodka Shot', icon: '🧊', type: 'Drink', isDrink: true },
    { name: 'Tequila Shot', icon: '🌵', type: 'Drink', isDrink: true },
    { name: 'Whiskey', icon: '🥃', type: 'Drink', isDrink: true },
    { name: 'Seltzer', icon: '🥤', type: 'Drink', isDrink: true },
    { name: 'White Claw', icon: '🥫', type: 'Drink', isDrink: true },
    { name: 'Wine (Red)', icon: '🍷', type: 'Drink', isDrink: true },
    { name: 'Wine (White)', icon: '🥂', type: 'Drink', isDrink: true },
    { name: 'Cocktail', icon: '🍸', type: 'Drink', isDrink: true },
    { name: 'Margarita', icon: '🍹', type: 'Drink', isDrink: true },
    { name: 'Sake', icon: '🍶', type: 'Drink', isDrink: true },
    { name: 'Water', icon: '💧', type: 'Non-Drink', isDrink: false },
    { name: 'Soda', icon: '🥤', type: 'Non-Drink', isDrink: false },
    { name: 'Coffee', icon: '☕', type: 'Non-Drink', isDrink: false },
    { name: 'Energy Drink', icon: '⚡', type: 'Non-Drink', isDrink: false },
    { name: 'Cigarette', icon: '🚬', type: 'Non-Drink', isDrink: false },
    { name: 'Vape Hit', icon: '💨', type: 'Non-Drink', isDrink: false },
    { name: 'Joint', icon: '🌿', type: 'Non-Drink', isDrink: false },
    { name: 'Slice of Pizza', icon: '🍕', type: 'Non-Drink', isDrink: false },
    { name: 'Tacos', icon: '🌮', type: 'Non-Drink', isDrink: false },
    { name: 'Fries', icon: '🍟', type: 'Non-Drink', isDrink: false }
];

const DEFAULT_ITEMS = [
    { id: 'item_1', name: 'Beer', count: 0, icon: '🍺', isDrink: true },
    { id: 'item_2', name: 'Vodka Shot', count: 0, icon: '🧊', isDrink: true },
    { id: 'item_3', name: 'Water', count: 0, icon: '💧', isDrink: false }
];

// DOM Elements
const tallyGrid = document.getElementById('tally-grid');
const totalDrinksDisplay = document.getElementById('total-drinks-count');
const addModal = document.getElementById('add-modal');
const addItemBtn = document.getElementById('add-item-btn');
const cancelAddBtn = document.getElementById('cancel-add-btn');
const confirmAddBtn = document.getElementById('confirm-add-btn');
const themeDropdown = document.getElementById('theme-dropdown');
const refreshAppBtn = document.getElementById('refresh-app-btn');

// Modal Elements
const searchInput = document.getElementById('item-search');
const catalogList = document.getElementById('catalog-list');
const customItemContainer = document.getElementById('custom-item-container');
const customTermSpan = document.getElementById('custom-term');
const isDrinkInput = document.getElementById('is-drink');

// Initialize
function init() {
    loadTheme();
    loadData();
    renderApp();
    setupEventListeners();
}

function loadTheme() {
    const savedTheme = localStorage.getItem('nightTallyTheme');
    if (savedTheme) {
        currentTheme = savedTheme;
    }
    applyTheme(currentTheme);
    themeDropdown.value = currentTheme;
}

function applyTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('nightTallyTheme', theme);
}

function loadData() {
    const saved = localStorage.getItem('nightTallyItems');
    if (saved) {
        try {
            tallyItems = JSON.parse(saved);
            
            // Migrate image items back to icon items gracefully
            tallyItems = tallyItems.map(item => {
                if (!item.icon) {
                    // Try to find matching icon in catalog or default to pin
                    const catalogMatch = ITEM_CATALOG.find(c => c.name.toLowerCase() === item.name.toLowerCase());
                    item.icon = catalogMatch ? catalogMatch.icon : '📌';
                }
                return item;
            });
            
        } catch (e) {
            console.error('Failed to parse saved items', e);
            tallyItems = [...DEFAULT_ITEMS];
        }
    } else {
        tallyItems = JSON.parse(JSON.stringify(DEFAULT_ITEMS));
    }
}

function saveData() {
    localStorage.setItem('nightTallyItems', JSON.stringify(tallyItems));
    updateTotalDrinks();
}

function setupEventListeners() {
    addItemBtn.addEventListener('click', openModal);
    cancelAddBtn.addEventListener('click', closeModal);
    confirmAddBtn.addEventListener('click', handleAddCustomItem);
    
    // Theme Switcher
    themeDropdown.addEventListener('change', (e) => applyTheme(e.target.value));
    
    // Search Filtering
    searchInput.addEventListener('input', handleSearch);
    
    // Close modal on outside click
    addModal.addEventListener('click', (e) => {
        if (e.target === addModal) closeModal();
    });

    // Refresh App / Force Update
    refreshAppBtn.addEventListener('click', () => {
        if (confirm('Force update the app? This will reload the latest version from the server.')) {
            // Unregister all service workers and reload
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(registrations => {
                    for (let registration of registrations) {
                        registration.unregister();
                    }
                    window.location.reload(true);
                });
            } else {
                window.location.reload(true);
            }
        }
    });

    // Enter key to add custom if no exact match
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const term = searchInput.value.trim();
            const exactMatch = ITEM_CATALOG.find(c => c.name.toLowerCase() === term.toLowerCase());
            if (exactMatch) {
                // If typed exactly, add that item
                addItemFromCatalog(exactMatch);
            } else if (term.length > 0) {
                // Otherwise add custom
                handleAddCustomItem();
            }
        }
    });
}

// Logic
function increment(id) {
    const item = tallyItems.find(i => i.id === id);
    if (item) {
        item.count++;
        saveData();
        updateCardDisplay(id);
    }
}

function decrement(id) {
    const item = tallyItems.find(i => i.id === id);
    if (item && item.count > 0) {
        item.count--;
        saveData();
        updateCardDisplay(id);
    }
}

function removeItem(id) {
    tallyItems = tallyItems.filter(i => i.id !== id);
    saveData();
    renderApp();
}

function updateTotalDrinks() {
    const total = tallyItems
        .filter(item => item.isDrink)
        .reduce((sum, item) => sum + item.count, 0);
    
    const oldTotal = parseInt(totalDrinksDisplay.textContent || '0');
    totalDrinksDisplay.textContent = total;
    
    if (total !== oldTotal) {
        totalDrinksDisplay.classList.remove('pop-anim');
        void totalDrinksDisplay.offsetWidth;
        totalDrinksDisplay.classList.add('pop-anim');
    }
}

// Modal Search Logic
function openModal() {
    searchInput.value = '';
    isDrinkInput.checked = true;
    renderCatalog(ITEM_CATALOG);
    addModal.classList.add('active');
    setTimeout(() => searchInput.focus(), 100);
}

function closeModal() {
    addModal.classList.remove('active');
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (query === '') {
        renderCatalog(ITEM_CATALOG);
        customItemContainer.classList.add('hidden');
        return;
    }
    
    const filtered = ITEM_CATALOG.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.type.toLowerCase().includes(query)
    );
    
    renderCatalog(filtered);
    
    // Check if query is an exact match for an existing catalog item
    const exactMatch = filtered.find(item => item.name.toLowerCase() === query);
    
    if (filtered.length === 0 || !exactMatch) {
        // Show custom add
        customTermSpan.textContent = e.target.value;
        customItemContainer.classList.remove('hidden');
    } else {
        customItemContainer.classList.add('hidden');
    }
}

function renderCatalog(items) {
    catalogList.innerHTML = '';
    
    if (items.length === 0) {
        catalogList.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 10px;">No matches found in dictionary.</p>';
        return;
    }
    
    items.forEach(item => {
        const el = document.createElement('div');
        el.className = 'catalog-item';
        el.innerHTML = `
            <div class="item-icon">${item.icon}</div>
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-type">${item.type}</div>
            </div>
        `;
        el.addEventListener('click', () => addItemFromCatalog(item));
        catalogList.appendChild(el);
    });
}

function addItemFromCatalog(catalogItem) {
    const newItem = {
        id: 'item_' + Date.now().toString(36),
        name: catalogItem.name,
        count: 0,
        icon: catalogItem.icon,
        isDrink: catalogItem.isDrink
    };

    tallyItems.push(newItem);
    saveData();
    renderApp();
    closeModal();
}

function handleAddCustomItem() {
    const name = searchInput.value.trim();
    if (!name) return;

    const isDrink = isDrinkInput.checked;
    
    // Try to guess an icon for abstract words like "Water" or "Wine" if they somehow bypass catalog
    let icon = '📌';
    const lowerName = name.toLowerCase();
    if (lowerName.includes('water')) icon = '💧';
    else if (lowerName.includes('wine')) icon = '🍷';
    else if (lowerName.includes('coffee')) icon = '☕';
    else if (lowerName.includes('pizza')) icon = '🍕';
    else if (isDrink) icon = '🍹';
    
    const newItem = {
        id: 'item_' + Date.now().toString(36),
        name: name,
        count: 0,
        icon: icon,
        isDrink: isDrink
    };

    tallyItems.push(newItem);
    saveData();
    renderApp();
    closeModal();
}

// Rendering
function updateCardDisplay(id) {
    const item = tallyItems.find(i => i.id === id);
    if (item) {
        const countSpan = document.getElementById(`count-${id}`);
        if (countSpan) {
            countSpan.textContent = item.count;
            countSpan.classList.remove('pop-anim');
            void countSpan.offsetWidth; 
            countSpan.classList.add('pop-anim');
        }
    }
}

function renderApp() {
    tallyGrid.innerHTML = '';
    
    tallyItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'tally-card glass-panel';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <button class="delete-btn" onclick="removeItem('${item.id}')" aria-label="Delete ${item.name}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div class="card-content">
                <span class="item-icon">${item.icon}</span>
                <h3 class="item-name">${item.name}</h3>
                <div class="counter-controls">
                    <button class="control-btn minus" onclick="decrement('${item.id}')" aria-label="Decrease ${item.name}">-</button>
                    <span class="count-display" id="count-${item.id}">${item.count}</span>
                    <button class="control-btn plus" onclick="increment('${item.id}')" aria-label="Increase ${item.name}">+</button>
                </div>
            </div>
        `;
        
        tallyGrid.appendChild(card);
    });
    
    updateTotalDrinks();
}

// Start app
document.addEventListener('DOMContentLoaded', init);
