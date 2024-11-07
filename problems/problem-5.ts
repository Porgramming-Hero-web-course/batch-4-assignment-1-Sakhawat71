{
    // problem 5 : get Property 

    const getProperty = <T, K extends keyof T>(object: T, key: K): T[K] => {
        return object[key];
    }


    const person = { name: "Mr xyz", age: 30 , id: 15};
    // console.log(getProperty(person, "name"));

    //
}