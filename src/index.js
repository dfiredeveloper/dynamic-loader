class DynamicLoader {
    constructor(containerId = "content") {
        this.contentContainer = document.getElementById(containerId);
        this.cache = {};

        this.initialize();
    }

    initialize() {
        const navLinks = document.querySelectorAll(".nav-link");

        navLinks.forEach(link => {
            const url = link.href;
            this.fetchContent(url);
        });

        navLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const url = event.target.href;
                this.loadContent(url);
            });
        });

        window.addEventListener("popstate", (event) => {
            if (event.state && event.state.path) {
                this.loadContent(event.state.path, false);
            }
        });
    }

    async fetchContent(url) {
        if (!this.cache[url]) {
            try {
                const response = await fetch(url);
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

    async loadContent(url, pushState = true) {
        if (this.cache[url]) {
            this.updateContent(this.cache[url], url, pushState);
        } else {
            try {
                await this.fetchContent(url);
                this.updateContent(this.cache[url], url, pushState);
            } catch (error) {
                this.showError(`Failed to load content: ${error.message}`);
            }
        }
    }

    updateContent(content, url, pushState) {
        this.contentContainer.style.opacity = 0;
        setTimeout(() => {
            this.contentContainer.innerHTML = content;
            this.contentContainer.style.opacity = 1;
        }, 300);

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
        this.contentContainer.style.opacity = 1;
    }
}



export default DynamicLoader;
