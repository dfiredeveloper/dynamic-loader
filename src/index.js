class DynamicLoader {
    constructor(containerId = "content") {
        this.contentContainer = document.getElementById(containerId);
        this.cache = {};

        this.initialize();
    }

    initialize() {
        const navLinks = document.querySelectorAll(".nav-link");

        // Preload all linked pages
        navLinks.forEach(link => {
            const url = link.href;
            this.preloadContent(url);
        });

        // Set up click event listeners
        navLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const url = event.target.href;
                this.loadContent(url);
            });
        });

        // Handle browser back/forward navigation
        window.addEventListener("popstate", (event) => {
            if (event.state && event.state.path) {
                this.loadContent(event.state.path, false);
            }
        });
    }

    async preloadContent(url) {
        if (!this.cache[url]) {
            try {
                const response = await fetch(url, { cache: "force-cache" });
                if (!response.ok) throw new Error(`Failed to fetch ${url}`);
                const data = await response.text();
                const parser = new DOMParser();
                const newDocument = parser.parseFromString(data, "text/html");
                const newContent = newDocument.getElementById("content").innerHTML;
                this.cache[url] = newContent;
            } catch (error) {
                console.error('Error preloading page:', error);
            }
        }
    }

    loadContent(url, pushState = true) {
        if (this.cache[url]) {
            this.updateContent(this.cache[url], url, pushState);
        } else {
            this.showError(`Content for ${url} is not cached`);
        }
    }

    updateContent(content, url, pushState) {
        this.contentContainer.innerHTML = content;

        if (pushState) {
            try {
                history.pushState({ path: url }, '', url);
            } catch (error) {
                console.error('Failed to push state:', error);
            }
        }
    }

    showError(message) {
        this.contentContainer.innerHTML = `<div class="error">${message}</div>`;
    }
}

// Polyfill for fetch in older browsers
(function() {
    if (!window.fetch) {
        console.log('Fetch API not found, adding polyfill');
        var script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.4/fetch.min.js';
        document.head.appendChild(script);
    }
})();

export default DynamicLoader;
