const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute('link');
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied to clipboard: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))