 function sayHello() {
            for (var i = 0; i < 5; i++) {
                console.log(i)
            }
        }
        sayHello()

        const preson = {
            name: 'Moiz',
            walk() {},
            talk() {}
        }

        person.talk();
        person.name = '';

        const targetMember = 'name';
        person[targetMember.value] = 'Hussain' // reassigning.