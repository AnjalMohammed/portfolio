const toggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const applyTheme = (theme) => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Swap icon and color
    themeIcon.className = isDark
        ? "fas fa-sun text-xs text-yellow-900"
        : "fas fa-moon text-xs text-gray-800";
};

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

toggleBtn.addEventListener("click", () => {
    const newTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
});

function outsideClickToClose(e) {
    const modal = document.getElementById("demoModal");
    if (e.target === modal) {
        closeDemoModal();
    }
}

function showDemoCredentials(app) {
    const creds = {
        cartvana: { email: 'public@test.com', password: '123123' }
    };

    const { email, password } = creds[app] || { email: 'demo@example.com', password: 'password' };

    document.getElementById("demoEmail").textContent = email;
    document.getElementById("demoPassword").textContent = password;
    document.getElementById("demoModal").classList.remove("hidden");

    // Add the event listener
    document.getElementById("demoModal").addEventListener("click", outsideClickToClose);
}

function closeDemoModal() {
    document.getElementById("demoModal").classList.add("hidden");

    // Remove the event listener (call this when you want to disable it)
    document.getElementById("demoModal").removeEventListener("click", outsideClickToClose);
}

function copyToClipboard(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        const original = document.getElementById(id).innerText;
        const button = document.querySelector(`button[onclick*="${id}"] i`);
        const originalIcon = button.className;
        button.className = "fas fa-check text-green-500 text-xs";

        setTimeout(() => {
            button.className = originalIcon;
        }, 1500);
    });
}