export const websiteProjects = [
    {
        "title": "MovieBites",
        "description": `Utilizing Laravel and the TMDB API, I've crafted a platform 
                        focused on movie trailers. Optimizing performance with Redis and achieving an elegant 
                        design through Tailwind CSS.`,
        "src": "/images/moviebites.jpg",
        "href": "https://github.com/jiahow99/Movie-App-Tailwind",
        "link": "/project/moviebites",
        "youtube": "https://drive.google.com/file/d/1LfHodyOy_HQza4VYGzn0Jif4JuPYMRjc/view",
        "techstacks" : ['Laravel','TailwindCSS','Redis','Livewire']
    },
    {
        "title": "DreamBid",
        "description": `Revolutionizing online bidding with a Laravel and Vue.js powerhouse. 
                        Seamlessly integrating Inertia.js for a dynamic frontend experience and incorporating 
                        features like real-time payment calculations and Google Maps integration.`,
        "src": "/images/dreambid.jpg",
        "href": "https://github.com/jiahow99/Vue-Listing-App",
        "link": "/project/dreambid",
        "youtube": "https://www.youtube.com/watch?v=-whHhK3ceSc",
        "techstacks" : ['Laravel','Vue','Inertia','GoogleMaps','TailwindCSS']
    },
    {
        "title": "BIOLINK",
        "description": `Technical odyssey during university—crafted "BIOLINK" with .NET 7, REST API, 
                        NextJS SSR, ReactJS, and Tailwind CSS. Explore the depths of Web 3 technologies!`,        
        "src": "/images/biolink.png",
        "href": "https://github.com/jiahow99/Reactivities-Net7React",
        "link": "/project/biolink",
        "youtube": "https://www.youtube.com/watch?v=eZ95euAsrPA",
        "techstacks" : ['.NET7','NextJs','React','TailwindCSS']
    },
    {
        "title": "Weavify",
        "description": `A chat app revolutionizing group communication with Laravel WebSocket and Echo for 
        seamless real-time collaboration.`,        
        "src": "/images/websocket.png",
        "href": "https://github.com/jiahow99/Larave-Echo-Group-Chat",
        "link": "/project/weavify",
        "youtube": "https://www.youtube.com/watch?v=Ft6ZwrjFRN8",
        "techstacks" : ['Laravel','Websocket','Echo','TailwindCSS']
    }
]

export const mobileProjects = [
    {
        "title": "Location-Based App",
        "description": `A React Native app using Google Maps API, Firebase, and Laravel to connect drivers 
                        with nearby mechanics. Real-time updates and easy spare parts purchase redefine 
                        the car repair experience.`,
        "src": "/images/carrepairapp.jpg",
        "href": [
            "https://github.com/jiahow99/FYP-APP",
            "https://github.com/jiahow99/FYP-API"
        ],
        "link": "project/location-based-app",
        "youtube": "https://youtu.be/M4nKKFzqvms",
        "techstacks" : ['ReactNative','Firebase','Laravel','GoogleMaps']
    }
]

export const allProjects = [...websiteProjects, ...mobileProjects]