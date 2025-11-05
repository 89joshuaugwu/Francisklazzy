# Jesse Scentique — Landing Page

Simple single-page perfume advert website built with HTML5, CSS3, Bootstrap 5 and vanilla JavaScript.

Files:
- `index.html` — main single-page markup
- `css/style.css` — custom styles
- `js/script.js` — small JS enhancements (smooth scroll, lightbox, back-to-top, reveal)


How to run:
1. Open `index.html` directly in your browser (no server required).
2. For best results, open in a modern browser (Chrome, Edge, Firefox).

Downloading local images (optional but recommended for offline use):

1) Create an `images` folder inside the project root.
2) Download the image files listed in `images/unsplash-images.txt` and save them with the suggested filenames (e.g. `hero.jpg`, `oud-royale.jpg`, ...).

PowerShell one-liner (run from project root) to download the 8 images automatically:

```powershell
New-Item -ItemType Directory -Path .\images -Force
Invoke-WebRequest "https://media.istockphoto.com/id/1399637805/photo/top-view-flat-lay-of-a-set-of-perfume-bottles-on-a-beige-blank-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=jqspXAE3Ih5A39pn4DOp3w_5QjpxnpLs6FNtfzNPlgI=" -OutFile .\images\hero.jpg
# about.jpg is already included if you followed earlier steps
Invoke-WebRequest "https://images.unsplash.com/photo-1640869116016-93c00ba94b28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3VkJTJDcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" -OutFile .\images\oud-royale.jpg
Invoke-WebRequest "https://images.unsplash.com/photo-1600795871209-6c48b1e0e898?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvcmFsJTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" -OutFile .\images\coco-bloom.jpg
Invoke-WebRequest "https://images.unsplash.com/photo-1676923932066-058b1e94dc3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlnaHQlMjBwZXJmdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" -OutFile .\images\midnight-essence.jpg
Invoke-WebRequest "https://images.unsplash.com/photo-1737424065216-bc51dd626175?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1iZXIlMkNyb3NlJTJDcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" -OutFile .\images\amber-rose.jpg
Invoke-WebRequest "https://images.unsplash.com/photo-1608828201325-cfc4c1cc6ef9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJhYmlhbiUyQ291ZCUyQ3BlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" -OutFile .\images\dubai-oud.jpg
Invoke-WebRequest "https://images.unsplash.com/photo-1754578645612-850d520385a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyQ2x1eHVyeSUyQ3BlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" -OutFile .\images\gold-temptation.jpg
```

After downloading, open `index.html` and the page will use local images for faster load times and offline viewing.

Deployment:
- Ready to deploy to Netlify or Firebase Hosting by dragging the project folder or connecting a Git repo.

Notes:
- Images are loaded from Unsplash (placeholder/licensed for free use). Replace with your own assets as needed.
- WhatsApp contact links point to +2348089261879 as requested.

Designer: Angel Jesse
