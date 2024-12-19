let userInfo = {
    name: 'Єва.',
    surname: 'Коротка.',
    age: 20,
    location: 'Дніпро, Україна.',
    profession: 'UI/UX Дезайнер.',
    hoddy: 'Баскетбол.',

    getInfo () {
        return `Ім'я: ${this.name}\nФамилія: ${this.surname}\nВік: ${this.age}\nМісце проживання: ${this.location}\nПрофесія: ${this.profession}\nХобі: ${this.hoddy}`;
    }
};

console.log(userInfo.getInfo());
