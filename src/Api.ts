const conta = {
    email: 'mike@email.com',
    password: '123456',
    name: 'Mike Linder',
    balance: 2000.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})