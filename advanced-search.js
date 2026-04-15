// advanced-search.js

// Functionality: Site-wide search, autocomplete suggestions, and tag/category filtering

class AdvancedSearch {
    constructor(data) {
        this.data = data;
        this.searchBox = document.getElementById('searchBox');
        this.suggestionsBox = document.getElementById('suggestions');
        this.bindEvents();
    }

    bindEvents() {
        this.searchBox.addEventListener('input', (e) => this.onInput(e));
        this.searchBox.addEventListener('focus', () => this.showSuggestions());
        document.addEventListener('click', () => this.hideSuggestions());
    }

    onInput(event) {
        const query = event.target.value;
        if (query.length > 2) {
            this.showSuggestions(this.getSuggestions(query));
        } else {
            this.hideSuggestions();
        }
    }

    getSuggestions(query) {
        // Autocomplete logic
        return this.data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    }

    showSuggestions(suggestions = []) {
        this.suggestionsBox.innerHTML = suggestions.map(item => `<div class='suggestion'>${item.title}</div>`).join('');
        this.suggestionsBox.style.display = suggestions.length ? 'block' : 'none';
    }

    hideSuggestions() {
        this.suggestionsBox.style.display = 'none';
    }

    filterByTag(tag) {
        // Filter visibility based on selected tag
        this.data.forEach(item => {
            item.visible = item.tags.includes(tag);
        });
        this.renderResults();
    }

    renderResults() {
        // Display filtered results
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = this.data.filter(item => item.visible).map(item => `<div>${item.title}</div>`).join('');
    }
}

// Usage Example
// const search = new AdvancedSearch(data);

