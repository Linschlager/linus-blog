# Dark Mode via System Setting
Starting with Chrome 76 (Currently Canary) 
```css
:root {
  --primary-fg-color: black;
  --primary-bg-color: white;
}
@media(prefers-color-scheme: dark) {
  :root {
    --primary-fg-color: white;
    --primary-bg-color: black;
  }
}
```