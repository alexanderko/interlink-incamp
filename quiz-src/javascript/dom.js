let list = document.getElementById('items')
function appendItem(itemText) {
    // your code here
}

function removeClass(element, className) {
    // your code here
}

function formHandler(event) {
    let contactListNode = document.getElementById('contacts')
    let contact = buildContactObject(event);

    // your code here to call createContact
    // and append it to contactListNode
    // using createContactNode function to build element for it 
}

function createContact(contact) {
    // your code here to send and handle async request 
    // to /contacts JSON REST API
}
