'use strict'

const URL =
    'https://mrjson.com/api?fname={firstName}&lname={lastName}&email={email}&tel={phone|area3}&address={streetAddress}&city={city}&state={usState|abbr}'

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
