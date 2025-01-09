'use strict'

function onInit() {
  getContacts(contacts => {
    renderContacts(contacts)
    const csvContent = getAsCSV(contacts)

    const elLink = document.querySelector('.btn-download')
    elLink.href = 'data:text/csv;charset=utf-8,' + csvContent
  })
}

function renderContacts(contacts) {
  const strHTMLs = contacts.map(
    (contact) => `
      <article class="card">
        <div class="image">
          <img src="https://robohash.org/${contact.fname}?set=set4">
        </div>
        <div class="description">
          <p class="name">${contact.fname} ${contact.lname}</p>
          <p class="tel">${contact.tel}</p>
          <p class="address">${contact.address}</p>
          <p class="city">${contact.city}</p>
        </div>
      </article>`
  )

  document.querySelector('.contacts-container').innerHTML = strHTMLs.join('')
}

function getAsCSV(contacts) {
  var str = 'Name,Tel\n'

  contacts.forEach(contact => {
      str += `${contact.fname} ${contact.lname},${contact.tel}\n`
  })
  return str
}