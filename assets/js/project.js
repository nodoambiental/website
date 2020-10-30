// Deletes references section if there are no references.
// The timeout is there because the content pseudo-lazy loads and is not available at once
const comprobation = setInterval(() => {
    const references = document.getElementById("references")
    if (references !== null) {
        const bibliographyElements = references.children[0].children

        if (bibliographyElements.length === 0) {
            document.body.removeChild(references)
        }

        clearTimeout(comprobation)
    }
}, 5)
