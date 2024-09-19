const DUMMY_COMMENTS = [
    {
        id: 1,
        username: "Sarah Johnson",
        handle: "@sarahjv",
        publishedAt: "17 hours ago",
        avatar: "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        comment:
            "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
    },
    {
        id: 2,
        username: "Michael Rodriguez",
        handle: "@mikerod",
        publishedAt: "5 minutes ago",
        avatar: "https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        comment:
            "Render props have always been a bit tricky for me. Can't wait to see how this series breaks it down. Thanks for sharing!",
    },
    {
        id: 3,
        username: "Emily Turner",
        handle: "@emilyt",
        publishedAt: "1 hour ago",
        avatar: "https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        comment:
            "Higher-order components have been a mystery to me for far too long. Looking forward to demystifying them with this series. Thanks!",
    },
    {
        id: 4,
        username: "David Chen",
        handle: "@davidc",
        publishedAt: "3 hours ago",
        avatar: "https://images.pexels.com/photos/18094275/pexels-photo-18094275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        comment:
            "Compound components are a game-changer for UI development. Can't wait to learn more about them. Great work on this series!",
    },
    {
        id: 5,
        username: "Alex Parker",
        handle: "@alex_p",
        publishedAt: "12 hours ago",
        avatar: "https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        comment:
            "Controlled vs. uncontrolled components - finally! This topic has always confused me. Thanks for breaking it down!",
    },
    {
        id: 6,
        username: "Jessica Lee",
        handle: "@jessicalee",
        publishedAt: "5 hours ago",
        avatar: "https://images.pexels.com/photos/7775637/pexels-photo-7775637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        comment:
            "This series is a goldmine for React developers! Compound components are something I've been eager to master. Thanks for this!",
    },
    {
        id: 7,
        username: "Ryan Jackson",
        handle: "@ryanjax",
        publishedAt: "Just now",
        avatar: "https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        comment:
            "This is exactly what I needed to take my React skills to the next level. Looking forward to diving into the render props section!",
    },
    {
        id: 8,
        username: "Laura Williams",
        handle: "@lauraw",
        publishedAt: "1 minute ago",
        avatar: "https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        comment:
            "This series looks amazing! I'm especially excited to learn more about controlled vs. uncontrolled components. Thanks for sharing!",
    },
];

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
        description:
            "Learn the basics of JavaScript, including variables, data types, and how to use them in your programs.",
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
        description:
            "Learn the basics of building web applications with Node.js and Express.js framework.",
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
        description:
            "Learn how to create a RESTful API using Node.js and the Express framework for building web applications.",
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
        description:
            "Discover how to build mobile applications using React Native for both Android and iOS platforms.",
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
        description:
            "Learn how to create and use custom hooks to share logic across multiple React components.",
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
        description:
            "Learn how to build robust and scalable web applications using the Django framework for Python.",
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
        description:
            "Learn how to build dynamic and interactive user interfaces with React and the D3.js data visualization library.",
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
        description:
            "Learn how to implement user authentication in Node.js applications using the Passport.js middleware.",
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
        description:
            "Learn how to create stunning visualizations and dashboards using Tableau for data analysis.",
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
        description:
            "Learn how to create real-time applications using Socket.IO for seamless communication between clients and servers.",
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
        description:
            "Learn how to create captivating animations and transitions using CSS for dynamic web experiences.",
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
        description:
            "Explore advanced patterns and techniques for building scalable and maintainable React applications.",
    },
];

const DUMMY_PLAYLISTS = [
    { id: "collections", label: "Collections" },
    { id: "javascript-basics", label: "JavaScript Basics" },
    { id: "cpp-tuts", label: "C++ Tuts" },
    { id: "feel-good-music", label: "Feel Good Music" },
    { id: "ed-sheeran", label: "Ed Sheeran" },
    { id: "python", label: "Python" },
];
export { DUMMY_VIDEOS, DUMMY_COMMENTS, DUMMY_PLAYLISTS };
