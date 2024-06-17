let names = [ "김준일" , "김준이", "김준삼" ];

console.log(names);

names = names.map(name => {return name + "님"});

console.log(names);

names = names.filter((name, index) => index !== 1); // 필터의 리턴에는 조건이 들어감
console.log(names);