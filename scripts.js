document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');
    const urlInput = document.getElementById('url');
    const resultDiv = document.getElementById('result');

    downloadBtn.addEventListener('click', async () => {
        const url = urlInput.value.trim();
        if (!url) {
            alert('Please enter a valid Instagram URL.');
            return;
        }

        try {
            const response = await fetch(`https://api.example.com/download?url=${encodeURIComponent(url)}`);
            const data = await response.json();

            if (data.success) {
                resultDiv.innerHTML = `<a href="${data.downloadUrl}" target="_blank" download>Download Photo</a>`;
            } else {
                resultDiv.innerHTML = `<p>${data.error}</p>`;
            }
        } catch (error) {
            resultDiv.innerHTML = `<p>Error fetching photo. Please try again later.</p>`;
        }
    });
});
