document.getElementById('go-button').addEventListener('click', function() {
    const url = document.getElementById('url-input').value;
    if (url) {
        document.getElementById('webview').src = url;
    }
});
