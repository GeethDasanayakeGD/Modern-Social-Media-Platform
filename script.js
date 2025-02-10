// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Sample posts data
    const posts = [
        {
            id: 1,
            username: 'johndoe',
            image: 'assets/post-images/post1.jpg',
            caption: 'Beautiful sunset! 🌅',
            likes: 123,
            comments: [],
            timestamp: '2h ago'
        },
        {
            id: 2,
            username: 'alicej',
            image: 'assets/post-images/post2.jpg',
            caption: 'Exploring new places! 🌍',
            likes: 98,
            comments: [],
            timestamp: '5h ago'
        },
        {
            id: 3,
            username: 'bobsmith',
            image: 'assets/post-images/post3.jpg',
            caption: 'Coffee and code! ☕💻',
            likes: 76,
            comments: [],
            timestamp: '1d ago'
        },
        {
            id: 4,
            username: 'charlieb',
            image: 'assets/post-images/post4.jpg',
            caption: 'Weekend vibes! 🏖️',
            likes: 210,
            comments: [],
            timestamp: '3d ago'
        },
        {
            id: 5,
            username: 'dianap',
            image: 'assets/post-images/post5.jpg',
            caption: 'Nature is healing. 🌿',
            likes: 150,
            comments: [],
            timestamp: '4d ago'
        },
        {
            id: 6,
            username: 'ethanh',
            image: 'assets/post-images/post6.jpg',
            caption: 'Mission accomplished! 🎯',
            likes: 300,
            comments: [],
            timestamp: '1w ago'
        },
        {
            id: 7,
            username: 'frankm',
            image: 'assets/post-images/post7.jpg',
            caption: 'Throwback to this moment! 📸',
            likes: 89,
            comments: [],
            timestamp: '2w ago'
        },
        {
            id: 8,
            username: 'gracek',
            image: 'assets/post-images/post8.jpg',
            caption: 'Dream big! 🌌',
            likes: 120,
            comments: [],
            timestamp: '3w ago'
        },
        {
            id: 9,
            username: 'henryl',
            image: 'assets/post-images/post9.jpg',
            caption: 'New beginnings! 🌱',
            likes: 95,
            comments: [],
            timestamp: '1mo ago'
        },
        {
            id: 10,
            username: 'isabellag',
            image: 'assets/post-images/post10.jpg',
            caption: 'Chasing dreams! ✨',
            likes: 200,
            comments: [],
            timestamp: '2mo ago'
        }
    ];

    // Render posts
    const postsContainer = document.getElementById('posts');
    
    posts.forEach(post => {
        const postHTML = `
            <div class="card post">
                <div class="post-header">
                    <img src="assets/profile-pics/${post.username}.jpg" alt="User" class="user-pic">
                    <span>${post.username}</span>
                </div>
                <img src="${post.image}" alt="Post">
                <div class="post-actions">
                    <button class="like-btn">❤️ ${post.likes}</button>
                    <button class="comment-btn">💬 Comment</button>
                </div>
                <p>${post.caption}</p>
                <small>${post.timestamp}</small>
            </div>
        `;
        postsContainer.innerHTML += postHTML;
    });

    // File input functionality
    const fileInput = document.getElementById('file-input');
    const fileNameDisplay = document.querySelector('.file-name');

    fileInput.addEventListener('change', (e) => {
        const fileName = e.target.files[0].name;
        fileNameDisplay.textContent = fileName;
    });

    // Follow button functionality
    document.querySelectorAll('.follow-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = button.textContent === 'Follow' ? 'Following' : 'Follow';
            button.classList.toggle('following');
        });
    });
});