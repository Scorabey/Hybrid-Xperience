function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
}
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.toggle-btn');

    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});