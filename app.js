let person = { name: "prem", age: 24 ,
contact : { phone: 9910885729 }
};

let address = { state: "Rajasthan", city: "jaipur", pin: 330251 };
let clg = { ClgName: "NSTI", clgcity: "bengalore" };
let details = { ...person,...address,...clg};

console.log(details);
