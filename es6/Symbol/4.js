// > 10
const spread = [12, 5, 8, 130, 44]
const gt10 = spread.filter((item) => item > 10);
console.log(gt10);

const users = [
    {
        'user': 'barney',
        'age': 36,
        'active': true
    },
    {
        'user': 'fred',
        'age': 40,
        'active': false
    },
    {
        'user': 'ared',
        'age': 24,
        'active': false
    },
    {
        'user': 'ered',
        'age': 80,
        'active': false
    },
    {
        'user': 'abc',
        'age': 80,
        'active': false
    },
]

const filterUsers = users.filter(user => user.age == 24 || user.age == 40)
console.log(filterUsers)