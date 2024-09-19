const DUMMY_VIDEOS = [
    {
        thumbnail:
            "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "JavaScript Fundamentals: Variables and Data Types",
        duration: "20:45",
        channelProfile:
            "https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        views: "10.3k Views",
        publishedAt: "44 minutes ago",
        channelName: "Code Master",
    },
    {
        thumbnail:
            "https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Getting Started with Express.js",
        duration: "22:18",
        channelProfile:
            "https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        views: "11.k Views",
        publishedAt: "5 hours ago",
        channelName: "Express Learner",
    },
    {
        thumbnail:
            "https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Building a RESTful API with Node.js and Express",
        duration: "24:33",
        channelProfile:
            "https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        views: "14.5k Views",
        publishedAt: "7 hours ago",
        channelName: "API Builder",
    },
    {
        thumbnail:
            "https://images.pexels.com/photos/1739854/pexels-photo-1739854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Introduction to React Native",
        duration: "19:58",
        channelProfile:
            "https://images.pexels.com/photos/1739856/pexels-photo-1739856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        views: "10.9k Views",
        publishedAt: "8 hours ago",
        channelName: "React Native Dev",
    },
    {
        thumbnail:
            "https://images.pexels.com/photos/1144256/pexels-photo-1144256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Creating Custom Hooks in React",
        duration: "16:37",
        channelProfile:
            "https://images.pexels.com/photos/1144257/pexels-photo-1144257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        views: "9.3k Views",
        publishedAt: "9 hours ago",
        channelName: "Hook Master",
    },
    {
        thumbnail:
            "https://images.pexels.com/photos/1144260/pexels-photo-1144260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Building Scalable Web Applications with Django",
        duration: "32:18",
        channelProfile:
            "https://images.pexels.com/photos/1144269/pexels-photo-1144269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        views: "18.9M Views",
        publishedAt: "12 hours ago",
        channelName: "Django Master",
    },
    {
        thumbnail:
            "https://images.pexels.com/photos/1144276/pexels-photo-1144276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Creating Interactive UIs with React and D3",
        duration: "29:30",
        channelProfile:
            "https://images.pexels.com/photos/1144277/pexels-photo-1144277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        views: "20.1k Views",
        publishedAt: "14 hours ago",
        channelName: "ReactD3",
    },
    {
        thumbnail:
            "https://images.pexels.com/photos/1144274/pexels-photo-1144274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Node.js Authentication with Passport.js",
        duration: "26:58",
        channelProfile:
            "https://images.pexels.com/photos/1144270/pexels-photo-1144270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        views: "21.2k Views",
        publishedAt: "15 hours ago",
        channelName: "Passport Pro",
    },
    {
        thumbnail:
            "https://images.pexels.com/photos/1144231/pexels-photo-1144231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Data Visualization with Tableau",
        duration: "32:14",
        channelProfile:
            "https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        views: "24.5k Views",
        publishedAt: "18 hours ago",
        channelName: "Tableau Master",
    },
    {
        thumbnail:
            "https://images.pexels.com/photos/1144250/pexels-photo-1144250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Building Real-Time Applications with Socket.IO",
        duration: "27:37",
        channelProfile:
            "https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        views: "25.6k Views",
        publishedAt: "19 hours ago",
        channelName: "Socket.IO Expert",
    },
    {
        thumbnail:
            "https://images.pexels.com/photos/1115824/pexels-photo-1115824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Advanced CSS: Animations and Transitions",
        duration: "31:55",
        channelProfile:
            "https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        views: "28.9k Views",
        publishedAt: "22 hours ago",
        channelName: "CSS Animations",
    },
    {
        thumbnail:
            "https://images.pexels.com/photos/1115808/pexels-photo-1115808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Advanced React Patterns",
        duration: "30:25",
        channelProfile:
            "https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        views: "30.1k Views",
        publishedAt: "1 day ago",
        channelName: "React Patterns",
    },
];

export { DUMMY_VIDEOS };
