const valid = () => {

    const phones = document.querySelectorAll('[name="phone"]')
    const nameUsers = document.querySelectorAll('[name="fio"]')

    const re = /([^0-9\+])/
    const re1 = /[^A-Z-a-z-А-Я-а-я\s]+$/i


    nameUsers.forEach(nameUser => {
        nameUser.addEventListener('input', (e => {
            e.target.value = e.target.value.replace(re1, "")
        }))
    })
    phones.forEach(phone => {
        phone.addEventListener('input', (e => {
            e.target.value = e.target.value.replace(re, "")
        }))
    })


}
export default valid