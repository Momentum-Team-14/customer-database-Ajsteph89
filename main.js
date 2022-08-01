const container = document.querySelector(".container")
console.log(customers);
function showCustomerName(customerArray) {
    for (let customer of customerArray){
        let customerDiv = document.createElement('div')
        customerDiv.classList.add('customer')
//make a div named nameDiv
        let nameDiv = document.createElement('div')
//added class of name to nameDiv
        nameDiv.classList.add('name')
//add name text into name dive .name.first comes from other JS
        nameDiv.innerText = `${customer.name.first} ${customer.name.last}`
// image
        let picImg = document.createElement('img')
        picImg.classList.add('pic')
        picImg.src = `${customer.picture.large}`
//email
        let emailDiv = document.createElement('div')
        emailDiv.classList.add('email')
        emailDiv.innerText = `${customer.email}`
//street
        let locationDiv = document.createElement('div')
        locationDiv.innerText = `${customer.location.street.number} ${customer.location.street.name}`
//city,state,zip
        let stateAbbrev = nameToAbbr (`${customer.location.state}`)
        let stateDiv = document.createElement('div')
        stateDiv.innerText = `${customer.location.city} ${stateAbbrev} ${customer.location.postcode}` 
//DOB
        let birthDate = new Date(`${customer.dob.date}`).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})
        
        let dobDiv = document.createElement('div')
        dobDiv.innerText = `DOB: ${birthDate}`
//Member since
        let signUpDate = new Date(`${customer.registered.date}`).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})

        let signUpDiv = document.createElement('div')
        signUpDiv.innerText = `Customer since: ${signUpDate}`
//add divs to overall customer box
        customerDiv.appendChild(picImg)
        customerDiv.appendChild(nameDiv)
        customerDiv.appendChild(emailDiv)
        customerDiv.appendChild(locationDiv)
        customerDiv.appendChild(stateDiv)
        customerDiv.appendChild(dobDiv)
        customerDiv.appendChild(signUpDiv)
        container.appendChild(customerDiv)
        // name: {
        //     title: 'dr',
        //     first: 'sophia',
        //     last: 'burns'
    }
}

showCustomerName(customers);