document.addEventListener('DOMContentLoaded', () => {
    // We could handle the click here, but using direct href="prank.html" is simpler.
    // Keeping this for potential future enhancements (e.g. analytics or delay).
    console.log("McDonald's Careers Mirror Loaded");
    
    // Rotate favicon 180 degrees
    const rotateFavicon = () => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            const ctx = canvas.getContext('2d');
            
            // Move to center, rotate, then draw
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(Math.PI); // 180 degrees
            ctx.drawImage(this, -this.width / 2, -this.height / 2);
            
            // Set as favicon
            const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.type = 'image/png';
            link.rel = 'icon';
            link.href = canvas.toDataURL();
            document.getElementsByTagName('head')[0].appendChild(link);
        };
        img.src = 'McDonalds-Logo.png';
    };
    
    rotateFavicon();
    
    // Optional: Make the search button do a fake search alert
    const searchBtn = document.querySelector('.search-btn');
    if(searchBtn) {
        searchBtn.addEventListener('click', () => {
            alert('Searching... just kidding, pick a job below!');
        });
    }
});
