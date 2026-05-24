const images = [
    "https://placehold.co/600x350?text=Image+1",
    "https://placehold.co/600x350?text=Image+2",
    "https://placehold.co/600x350?text=Image+3",
    "https://placehold.co/600x350?text=Image+4",
    "https://placehold.co/600x350?text=Image+5"
];

const mainImage = document.querySelector("#mainImage");
const imageInfo = document.querySelector("#imageInfo");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const openModalBtn = document.querySelector("#openModalBtn");
const commandBtn = document.querySelector("#commandBtn");

let currentIndex = 0;
let slideshow = null;

const commands = [
    { name: "Ảnh tiếp theo", action: nextImage },
    { name: "Ảnh trước", action: prevImage },
    { name: "Mở ảnh lớn", action: openImageModal },
    { name: "Play hoặc Pause slideshow", action: toggleSlideshow }
];

function updateImage() {
    mainImage.src = images[currentIndex];
    mainImage.alt = `Gallery image ${currentIndex + 1}`;
    imageInfo.textContent = `Ảnh ${currentIndex + 1} / ${images.length}`;
}

function nextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    updateImage();
}

function prevImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    updateImage();
}

function goToImage(index) {
    if (index >= 0 && index < images.length) {
        currentIndex = index;
        updateImage();
    }
}

function toggleSlideshow() {
    if (slideshow) {
        clearInterval(slideshow);
        slideshow = null;
        alert("Đã pause slideshow");
    } else {
        slideshow = setInterval(nextImage, 1500);
        alert("Đã play slideshow");
    }
}

function openImageModal() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.setAttribute("role", "dialog");

    const content = document.createElement("div");
    content.className = "modal-content";

    const img = document.createElement("img");
    img.src = images[currentIndex];
    img.alt = "Ảnh lớn";

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Đóng";
    closeBtn.setAttribute("aria-label", "Đóng modal ảnh");
    closeBtn.addEventListener("click", () => modal.remove());

    content.appendChild(img);
    content.appendChild(closeBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);

    closeBtn.focus();
}

function openCommandPalette() {
    const palette = document.createElement("div");
    palette.className = "palette";
    palette.setAttribute("role", "dialog");

    const content = document.createElement("div");
    content.className = "palette-content";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Gõ command...";
    input.setAttribute("aria-label", "Tìm kiếm command");

    const list = document.createElement("ul");
    list.className = "command-list";

    content.appendChild(input);
    content.appendChild(list);
    palette.appendChild(content);
    document.body.appendChild(palette);

    function renderCommands(keyword = "") {
        list.textContent = "";

        const filtered = commands.filter(command =>
            command.name.toLowerCase().includes(keyword.toLowerCase())
        );

        filtered.forEach(command => {
            const li = document.createElement("li");
            li.className = "command-item";
            li.textContent = command.name;
            li.tabIndex = 0;

            li.addEventListener("click", () => {
                command.action();
                palette.remove();
            });

            list.appendChild(li);
        });
    }

    input.addEventListener("input", () => {
        renderCommands(input.value);
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const firstCommand = list.querySelector(".command-item");

            if (firstCommand) {
                firstCommand.click();
            }
        }

        if (e.key === "Escape") {
            palette.remove();
        }
    });

    renderCommands();
    input.focus();
}

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
openModalBtn.addEventListener("click", openImageModal);
commandBtn.addEventListener("click", openCommandPalette);

document.addEventListener("keydown", (e) => {
    const isTyping = e.target.tagName === "INPUT";

    if (isTyping) return;

    if (e.key === "ArrowRight") {
        nextImage();
    }

    if (e.key === "ArrowLeft") {
        prevImage();
    }

    if (e.key >= "1" && e.key <= "9") {
        const index = Number(e.key) - 1;
        goToImage(index);
    }

    if (e.code === "Space") {
        e.preventDefault();
        toggleSlideshow();
    }

    if (e.key === "Escape") {
        const modal = document.querySelector(".modal");
        const palette = document.querySelector(".palette");

        if (modal) modal.remove();
        if (palette) palette.remove();
    }

    if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openCommandPalette();
    }
});

updateImage();