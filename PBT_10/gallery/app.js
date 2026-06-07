const gallery = document.getElementById("gallery");
const loading = document.getElementById("loading");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-btn");

let page = 1;
let isLoading = false;
const limit = 20;

// Load ảnh
async function loadMorePhotos() {

    if (isLoading) return;

    isLoading = true;
    loading.style.display = "block";

    try {

        const response = await fetch(
            `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
        );

        const photos = await response.json();

        renderPhotos(photos);

        page++;

    } catch (error) {

        console.error(error);

    } finally {

        loading.style.display = "none";
        isLoading = false;

    }
}

// Render ảnh
function renderPhotos(photos) {

    photos.forEach(photo => {

        const card = document.createElement("div");
        card.className = "photo-card";

        const img = document.createElement("img");

        // lazy loading
        img.dataset.src = photo.download_url;

        img.alt = photo.author;

        img.addEventListener("click", () => {
            openLightbox(photo.download_url);
        });

        card.appendChild(img);

        gallery.appendChild(card);

        imageObserver.observe(img);

    });

}

// Lightbox
function openLightbox(src) {

    lightbox.style.display = "flex";

    lightboxImg.src = src;

}

function closeLightbox() {

    lightbox.style.display = "none";

}

closeBtn.addEventListener(
    "click",
    closeLightbox
);

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {
        closeLightbox();
    }

});

// Lazy Loading Images
const imageObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const img = entry.target;

                img.src = img.dataset.src;

                imageObserver.unobserve(img);

            }

        });

    },
    {
        threshold: 0.1
    }
);

// Infinite Scroll
const trigger = document.querySelector("#load-trigger");

const observer = new IntersectionObserver(entries => {

    if (entries[0].isIntersecting) {

        loadMorePhotos();

    }

});

observer.observe(trigger);

// Load lần đầu
loadMorePhotos();