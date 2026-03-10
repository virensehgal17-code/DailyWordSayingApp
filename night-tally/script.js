// App State
let tallyItems = [];
let currentTheme = 'theme-midnight';

// Premium high-quality image URLs for default items
const DEFAULT_ITEMS = [
    { 
        id: 'item_1', 
        name: 'Beer', 
        count: 0, 
        image: 'https://images.unsplash.com/photo-1614316346936-aa8ffdcbe5da?auto=format&fit=crop&q=80&w=600', 
        isDrink: true 
    },
    { 
        id: 'item_2', 
        name: 'Shot', 
        count: 0, 
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600', 
        isDrink: true 
    },
    { 
        id: 'item_3', 
        name: 'Cigarette', 
        count: 0, 
        image: 'https://images.unsplash.com/photo-1628191081698-3a95f7470659?auto=format&fit=crop&q=80&w=600', 
        isDrink: false 
    }
];

// DOM Elements
const tallyGrid = document.getElementById('tally-grid');
const totalDrinksDisplay = document.getElementById('total-drinks-count');
const addModal = document.getElementById('add-modal');
const addItemBtn = document.getElementById('add-item-btn');
const cancelAddBtn = document.getElementById('cancel-add-btn');
const confirmAddBtn = document.getElementById('confirm-add-btn');
const itemNameInput = document.getElementById('item-name');
const isDrinkInput = document.getElementById('is-drink');
const themeDropdown = document.getElementById('theme-dropdown');

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
            
            // Migrate legacy (emoji) items to image items
            tallyItems = tallyItems.map(item => {
                if (!item.image) item.image = guessImage(item.name);
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
    confirmAddBtn.addEventListener('click', handleAddItem);
    
    // Theme Switcher
    themeDropdown.addEventListener('change', (e) => {
        applyTheme(e.target.value);
    });
    
    // Close modal on outside click
    addModal.addEventListener('click', (e) => {
        if (e.target === addModal) closeModal();
    });

    // Enter key to add
    itemNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAddItem();
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

// Map keywords to high-quality deterministic images using Picsum based on item name string
function guessImage(name) {
    name = name.toLowerCase().trim().replace(/\s+/g, '-');
    return `https://picsum.photos/seed/${name}/600/400`;
}

function handleAddItem() {
    const name = itemNameInput.value.trim();
    if (!name) {
        itemNameInput.focus();
        return;
    }

    const isDrink = isDrinkInput.checked;
    
    const newItem = {
        id: 'item_' + Date.now().toString(36),
        name: name,
        count: 0,
        image: guessImage(name),
        isDrink: isDrink
    };

    tallyItems.push(newItem);
    saveData();
    renderApp();
    closeModal();
}

function openModal() {
    itemNameInput.value = '';
    isDrinkInput.checked = true;
    addModal.classList.add('active');
    setTimeout(() => itemNameInput.focus(), 100);
}

function closeModal() {
    addModal.classList.remove('active');
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
            <div class="card-image-wrapper">
                <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy">
            </div>
            <div class="card-content">
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
