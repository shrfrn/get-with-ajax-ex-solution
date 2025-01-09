'use strict'

function getData(url, cb) {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText)
            cb(ans)
        }
    }

    xhr.open('GET', url, true)
    xhr.send()
}