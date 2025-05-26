// Global variables
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let myList = JSON.parse(localStorage.getItem('myList')) || [];
let currentSection = 'home';
let isSignUp = false;

// Movie data
const movies = {
    trending: [
        { id: 1, title: "The Matrix", year: 1999, rating: "R", poster: "https://i.pinimg.com/1200x/97/9d/60/979d6039593ae47af0ce2a0b0fc7ca7a.jpg", trailer: "vKQi3bBA1y8" },
        { id: 2, title: "Avengers Infinity", year: 2018, rating: "PG-13", poster: "https://i.pinimg.com/1200x/bd/75/e5/bd75e5e33d477b3e53d151adac14b822.jpg", trailer: "6ZfuNTqbHE8" },
        { id: 3, title: "Interstellar", year: 2024, rating: "PG-13", poster: "https://i.pinimg.com/1200x/32/c1/6b/32c16b008e7b765119daff796bea1364.jpg", trailer: "zSWdZVtXT7E" },
        { id: 4, title: "Dark Knight", year: 2008, rating: "R", poster: "https://i.pinimg.com/736x/2c/9d/e3/2c9de3e60b26d716d358de57484d61b5.jpg", trailer: "EXeTwQWrcwY" },
          { id: 5, title: "Final Destination 7 ", year: 2025, rating: "PG-13", poster: "https://i.pinimg.com/736x/29/a4/da/29a4da565e04e1a2d8fc459e1996f229.jpg", trailer: "UWMzKXsY9A4" }
    ],

    action: [
        { id: 6, title: "Mission Impossible Final Reckoning", year: 2025, rating: "PG-13", poster: "https://i.pinimg.com/736x/b7/5a/4a/b75a4a8478ec0b40c55545ffc4df56b7.jpg", trailer: "iJtkNz5wVUc" },
        { id: 7, title: "Extraction", year: 2023, rating: "R", poster: "https://i.pinimg.com/736x/fb/8c/41/fb8c4189e5acb804d7ae80b853a2aa06.jpg", trailer: "L6P3nI6VnlY" },
        { id: 8, title: "Extraction 2", year: 2023, rating: "PG-13", poster: "https://i.pinimg.com/1200x/fe/e7/06/fee706c0773a37e5f4c01a37af4706e5.jpg", trailer: "iWx_o5Iatpw" },
        { id: 9, title: "Fast And Furious 10", year: 2024, rating: "R", poster: "https://i.pinimg.com/736x/c8/01/81/c801810e72bf7add43ff85351d008854.jpg", trailer: "32RAq6JzY-w" },
        { id: 10, title: "Tokyo Drift", year: 2006, rating: "PG-13", poster: "https://i.pinimg.com/736x/3e/a4/33/3ea433e2657f9143fa342af1836be0af.jpg", trailer: "p8HQ2JLlc4E" }
    ],

    drama: [
        { id: 11, title: "Friends", year: 1994, rating: "R", poster: "https://i.pinimg.com/736x/26/31/d8/2631d8fcdca20c412e66a124079ca1df.jpg", trailer: "Zg2LCD5QOJs" },
        { id: 12, title: "Young Sheldon", year: 2017, rating: "PG-13", poster: "https://i.pinimg.com/736x/e2/c3/29/e2c3294d07c3234e9a22a3554585286e.jpg", trailer: "FStMMcj-RiA" },
        { id: 13, title: "How I Met Your Mother", year: 2005, rating: "PG", poster: "https://i.pinimg.com/736x/e1/ce/89/e1ce8903d2f9603cf8480fe7fb4b8a0f.jpg", trailer: "cjJLEYMzpjc" },
        { id: 14, title: "Phulpakharu", year: 2017, rating: "PG-13", poster: "https://m.media-amazon.com/images/M/MV5BYjkxOGEyOTQtY2E5YS00ZGM3LWExYzctYTc5ZjQzM2ViMzZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", trailer: "cgeoLEDyHuQ" },
        { id: 15, title: "Dil Dosti Duniyadari", year: 2023, rating: "R", poster: "https://i.pinimg.com/736x/4c/2c/42/4c2c4294a9cb49b78eeb1fc87cb190ec.jpg", trailer: "EFCsTiM1FmY" }
    ],

    tvshows: [
        { id: 21, title: "Stranger Things", year: 2024, rating: "TV-14", poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop", trailer: "b9EkMc79ZSU" },
        { id: 22, title: "The Crown", year: 2023, rating: "TV-MA", poster: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop", trailer: "vKQi3bBA1y8" },
        { id: 23, title: "Dark Matter", year: 2024, rating: "TV-14", poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop", trailer: "ScMzIvxBSi4" },
        { id: 24, title: "Ocean Deep", year: 2023, rating: "TV-PG", poster: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop", trailer: "6ZfuNTqbHE8" },
        { id: 25, title: "Space Odyssey", year: 2024, rating: "TV-14", poster: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=600&fit=crop", trailer: "QRJ38y4Jn6k" }
    ],

    comedy: [
        { id: 26, title: "Cosmic Comedy", year: 2024, rating: "TV-14", poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", trailer: "vKQi3bBA1y8" },
        { id: 27, title: "Laugh Track", year: 2023, rating: "TV-PG", poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop", trailer: "8X2kIfS6fb8" },
        { id: 28, title: "Comedy Central", year: 2024, rating: "TV-14", poster: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=600&fit=crop", trailer: "ScMzIvxBSi4" },
        { id: 29, title: "Funny Business", year: 2023, rating: "TV-PG", poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop", trailer: "6ZfuNTqbHE8" }
    ],

    latest: [
        { id: 31, title: "Future World", year: 2024, rating: "PG-13", poster: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=600&fit=crop", trailer: "QRJ38y4Jn6k" },
        { id: 32, title: "Time Traveler", year: 2024, rating: "PG-13", poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", trailer: "vKQi3bBA1y8" },
        { id: 33, title: "Galaxy Wars", year: 2024, rating: "PG-13", poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop", trailer: "8X2kIfS6fb8" },
        { id: 34, title: "Robot Revolution", year: 2024, rating: "R", poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop", trailer: "ScMzIvxBSi4" }
    ],

    scifi: [
        { id: 35, title: "Alien Contact", year: 2023, rating: "PG-13", poster: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=600&fit=crop", trailer: "QRJ38y4Jn6k" },
        { id: 36, title: "Mars Mission", year: 2024, rating: "PG-13", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop", trailer: "vKQi3bBA1y8" },
        { id: 37, title: "Quantum Realm", year: 2023, rating: "PG-13", poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop", trailer: "8X2kIfS6fb8" },
        { id: 38, title: "Cyber World", year: 2024, rating: "R", poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", trailer: "ScMzIvxBSi4" }
    ]
};

// DOM elements
const authModal = document.getElementById('authModal');
const mainApp = document.getElementById('mainApp');
const authForm = document.getElementById('authForm');
const authTitle = document.getElementById('authTitle');
const authButton = document.getElementById('authButton');
const authToggle = document.getElementById('authToggle');
const authToggleText = document.getElementById('authToggleText');
const confirmPassword = document.getElementById('confirmPassword');
const logoutBtn = document.getElementById('logoutBtn');
const searchToggle = document.getElementById('searchToggle');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const trailerModal = document.getElementById('trailerModal');
const trailerIframe = document.getElementById('trailerIframe');
const trailerTitle = document.getElementById('trailerTitle');
const closeTrailer = document.getElementById('closeTrailer');

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    // Check if user is logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showMainApp();
    } else {
        showAuthModal();
    }

    setupEventListeners();
    loadMovies();
});

function setupEventListeners() {
    // Auth form
    authForm.addEventListener('submit', handleAuth);
    authToggle.addEventListener('click', toggleAuthMode);

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const section = e.target.closest('.nav-item').dataset.section;
            navigateToSection(section);
        });
    });

    // Search
    searchToggle.addEventListener('click', toggleSearch);
    searchForm.addEventListener('submit', handleSearch);

    // Logout
    logoutBtn.addEventListener('click', logout);

    // Trailer modal
    closeTrailer.addEventListener('click', closeTrailerModal);
    trailerModal.addEventListener('click', (e) => {
        if (e.target === trailerModal) {
            closeTrailerModal();
        }
    });

    // Close modals on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeTrailerModal();
        }
    });
}

function showAuthModal() {
    authModal.style.display = 'flex';
    mainApp.style.display = 'none';
}

function showMainApp() {
    authModal.style.display = 'none';
    mainApp.style.display = 'block';
    updateMyListSection();
}
function handleAuth(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (isSignUp) {
      // Create account
      currentUser = { 
        email: email, 
        id: Date.now() 
      };
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      alert('Account created!');
      showMainApp();
    } else {
      // Login
      const storedUser = JSON.parse(localStorage.getItem('currentUser'));
      if (storedUser && storedUser.email === email) {
        currentUser = storedUser;
        showMainApp();
      } else {
        alert('No account found with that email');
      }
    }
  }


// function handleAuth(e) {
//     e.preventDefault();

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const confirmPass = document.getElementById('confirmPassword').value;

//     if (isSignUp && password !== confirmPass) {
//         alert('Passwords do not match!');
//         return;
//     }

    // Simulate authentication
    currentUser = { email, id: Date.now() };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Add loading effect
    authButton.textContent = 'Loading...';
    authButton.disabled = true;

    setTimeout(() => {
        showMainApp();
        authButton.textContent = isSignUp ? 'Sign Up' : 'Sign In';
        authButton.disabled = false;
    }, 1000);


function toggleAuthMode() {
    isSignUp = !isSignUp;

    if (isSignUp) {
        authTitle.textContent = 'Sign Up';
        authButton.textContent = 'Sign Up';
        authToggleText.innerHTML = 'Already have an account? <span id="authToggle">Sign In</span>';
        confirmPassword.style.display = 'block';
    } else {
        authTitle.textContent = 'Sign In';
        authButton.textContent = 'Sign In';
        authToggleText.innerHTML = "Don't have an account? <span id=\"authToggle\">Sign Up</span>";
        confirmPassword.style.display = 'none';
    }

    // Re-attach event listener
    document.getElementById('authToggle').addEventListener('click', toggleAuthMode);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showAuthModal();
    authForm.reset();
  }
// function logout() {
//     currentUser = null;
//     localStorage.removeItem('currentUser');
//     myList = [];
//     localStorage.removeItem('myList');
//     showAuthModal();

//     // Reset form
//     authForm.reset();
//     if (isSignUp) {
//         toggleAuthMode();
//     }
// }

function navigateToSection(section) {
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-section="${section}"]`).classList.add('active');

    // Show section
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(`${section}Section`).classList.add('active');

    currentSection = section;

    // Update My List if navigating to it
    if (section === 'mylist') {
        updateMyListSection();
    }
}

function toggleSearch() {
    searchForm.classList.toggle('active');
    if (searchForm.classList.contains('active')) {
        searchInput.focus();
    }
}

function handleSearch(e) {
    e.preventDefault();
    const query = searchInput.value.toLowerCase();

    if (query) {
        // Simple search implementation
        const allMovies = [...movies.trending, ...movies.action, ...movies.drama, ...movies.tvshows, ...movies.comedy, ...movies.latest, ...movies.scifi];
        const results = allMovies.filter(movie =>
            movie.title.toLowerCase().includes(query)
        );

        if (results.length > 0) {
            displaySearchResults(results);
        } else {
            alert('No movies found!');
        }
    }

    searchForm.classList.remove('active');
    searchInput.value = '';
}

function displaySearchResults(results) {
    // Create or update search results section
    let searchSection = document.getElementById('searchSection');
    if (!searchSection) {
        searchSection = document.createElement('section');
        searchSection.id = 'searchSection';
        searchSection.className = 'content-section';
        document.querySelector('.main-content').appendChild(searchSection);
    }

    searchSection.innerHTML = `
        <h1 class="section-title">Search Results</h1>
        <div class="my-list-grid">
            ${results.map(movie => createMovieCard(movie)).join('')}
        </div>
    `;

    // Navigate to search results
    navigateToSection('search');
}

function loadMovies() {
    // Load trending movies
    document.getElementById('trendingMovies').innerHTML =
        movies.trending.map(movie => createMovieCard(movie)).join('');

    // Load action movies
    document.getElementById('actionMovies').innerHTML =
        movies.action.map(movie => createMovieCard(movie)).join('');

    // Load drama movies
    document.getElementById('dramaMovies').innerHTML =
        movies.drama.map(movie => createMovieCard(movie)).join('');

    // Load TV shows
    document.getElementById('popularShows').innerHTML =
        movies.tvshows.map(movie => createMovieCard(movie)).join('');

    document.getElementById('comedyShows').innerHTML =
        movies.comedy.map(movie => createMovieCard(movie)).join('');

    // Load latest movies
    document.getElementById('latestMovies').innerHTML =
        movies.latest.map(movie => createMovieCard(movie)).join('');

    // Load sci-fi movies
    document.getElementById('scifiMovies').innerHTML =
        movies.scifi.map(movie => createMovieCard(movie)).join('');
}

function createMovieCard(movie) {
    const isInList = myList.includes(movie.id);

    return `
        <div class="movie-card animate-fade-in">
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-overlay">
                <div class="movie-actions">
                    <button class="action-btn play-btn" onclick="playTrailer('${movie.trailer}', '${movie.title}')">
                        <i class="fas fa-play"></i>
                    </button>
                    <button class="action-btn list-btn ${isInList ? 'in-list' : ''}" onclick="toggleMyList(${movie.id})">
                        <i class="fas ${isInList ? 'fa-check' : 'fa-plus'}"></i>
                    </button>
                </div>
            </div>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-meta">
                    <span class="movie-year">${movie.year}</span>
                    <span class="movie-rating">${movie.rating}</span>
                </div>
            </div>
        </div>
    `;
}

function playTrailer(trailerId, title) {
    trailerTitle.textContent = `${title} - Trailer`;
    trailerIframe.src = `https://www.youtube.com/embed/${trailerId}?autoplay=1&rel=0`;
    trailerModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeTrailerModal() {
    trailerModal.style.display = 'none';
    trailerIframe.src = '';
    document.body.style.overflow = 'auto';
}

function toggleMyList(movieId) {
    const index = myList.indexOf(movieId);

    if (index > -1) {
        myList.splice(index, 1);
    } else {
        myList.push(movieId);
    }

    localStorage.setItem('myList', JSON.stringify(myList));

    // Update UI
    loadMovies();
    if (currentSection === 'mylist') {
        updateMyListSection();
    }

    // Show feedback
    const movie = findMovieById(movieId);
    if (movie) {
        const action = index > -1 ? 'removed from' : 'added to';
        showNotification(`"${movie.title}" ${action} My List`);
    }
}

function findMovieById(id) {
    const allMovies = [...movies.trending, ...movies.action, ...movies.drama, ...movies.tvshows, ...movies.comedy, ...movies.latest, ...movies.scifi];
    return allMovies.find(movie => movie.id === id);
}

function updateMyListSection() {
    const myListContent = document.getElementById('myListContent');

    if (myList.length === 0) {
        myListContent.innerHTML = `
            <div class="empty-list animate-fade-in">
                <i class="fas fa-film"></i>
                <h2>Your list is empty</h2>
                <p>Add movies and shows you want to watch later!</p>
            </div>
        `;
    } else {
        const myListMovies = myList.map(id => findMovieById(id)).filter(Boolean);
        myListContent.innerHTML = myListMovies.map(movie => createMovieCard(movie)).join('');
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #8b4513, #d2691e);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 1001;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Add smooth scrolling for movie rows
document.addEventListener('DOMContentLoaded', function () {
    const movieRows = document.querySelectorAll('.movie-row');
    movieRows.forEach(row => {
        let isDown = false;
        let startX;
        let scrollLeft;

        row.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - row.offsetLeft;
            scrollLeft = row.scrollLeft;
        });

        row.addEventListener('mouseleave', () => {
            isDown = false;
        });

        row.addEventListener('mouseup', () => {
            isDown = false;
        });

        row.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - row.offsetLeft;
            const walk = (x - startX) * 2;
            row.scrollLeft = scrollLeft - walk;
        });
    });
});
