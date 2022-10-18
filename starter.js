let day = new Date();
console.log(day)
day = day.getDay()
console.log(day)
// 0 is Sunday // 6 is Saturday

let literalDay = new Date().toString()
console.log(literalDay)
console.log(literalDay.split(' '))
literalDay= literalDay.split(' ')[0]
console.log(literalDay)

day = 2

switch(day){
    case 0:
        console.log('Go To Church!');
        break;
    case 1:
        console.log('Write Code... Its Monday Madness');
        break;
    case 2:
        console.log('Testing Tuesday go Test your code!');
        break;
    case 3:
        console.log("Testing more code because is Hummp Day");
        break;    
    case 4:
        console.log("Write a feature for our app on Thurday");
        break;
    case 5: 
        console.log("Test Feature for Feature Friday");
        break;
    case 6:
        console.log("Sleep All Day");
        break;
    default:
        console.log("You are making up Days!!");
}

switch(literalDay){
    case 'Sun':
        console.log('Go To Church!');
        break;
    case 'Mon':
        console.log('Write Code... Its Monday Madness');
        break;
    case 'Tue':
        console.log('Testing Tuesday go Test your code!');
        break;
    case 'Wed':
        console.log("Testing more code because is Hummp Day");
        break;    
    case 'Thu':
        console.log("Write a feature for our app on Thurday");
        break;
    case 'Fri': 
        console.log("Test Feature for Feature Friday");
        break;
    case 'Sat':
        console.log("Sleep All Day");
        break;
    default:
        console.log("You are making up Days!!");
}


switch (['a'][0]){
    case 'a':
        console.log('Yes it can')
        break;
    default:
        console.log('No it can\'t') // <--- nope
    }
