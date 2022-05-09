let one = 'Alex'
let two = 'George'
let three = 'Michael'

let nameAll = (one, two, three) => {
    let name_long = ''
    let www = []
    let www_all = []

    www_all.push(one, two, three)

    www.push(one.length, two.length, three.length)

    let maxLenght = Math.max(...www)
    

    www_all.filter(item => {
        if (maxLenght === item.length) console.log(item);
    })


   

}

nameAll(one, two, three)