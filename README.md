# Dynamic Loader

A library to dynamically load content for static HTML websites, providing smooth transitions and improved user experience.

## Installation

You can include Dynamic Loader in your project via npm:

```sh
npm install dynamic-loader
```

Or by including the script directly in your HTML:

```
<script src="https://unpkg.com/dynamic-loader/dist/dynamic-loader.min.js"></script>
```
## Usage

HTML Structure
```
<nav>
    <a href="home.html" class="nav-link">Home</a>
    <a href="about.html" class="nav-link">About</a>
    <a href="contact.html" class="nav-link">Contact</a>
</nav>
<div id="content">
    <!-- Initial content here -->
</div>
```

Javascript
```
import DynamicLoader from 'dynamic-loader';

// Initialize the loader
document.addEventListener("DOMContentLoaded", () => {
    new DynamicLoader('content');
});
```

CSS
Include the provided CSS for transitions and error handling.
```
#content {
    transition: opacity 0.3s;
}

.error {
    color: red;
    font-weight: bold;
}
```

## Example
Here's an example of a simple website using Dynamic Loader:

Create index.html with navigation links and a content container.
Create additional HTML files (home.html, about.html, contact.html) with content for each page.
Add the above JavaScript to your main script file.
Include the CSS for smooth transitions and error handling.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.