'use strict'

const URL =
    'http://www.filltext.com/?rows=20&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone%7Cformat%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState%7Cabbr%7d&zip=%7bzip%7d&pretty=true'

function getContacts(onSuccess) {
    const xhr = new XMLHttpRequest()
    /** old way */
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const res = JSON.parse(xhr.responseText)
            // console.log(res);
            onSuccess(res)
        }
    }

    /** another option: */
    // xhr.onload = () => {
    //     if (xhr.status === 200) {
    //         const res = JSON.parse(xhr.responseText)
    //         onSuccess(res)
    //     }
    // }

    xhr.open('GET', URL, true)
    xhr.send()
}
