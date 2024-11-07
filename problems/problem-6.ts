{
    // problem 6: update profile

    interface IProfile {
        name: string;
        age: number;
        email: string;
    };

    const profile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    }

    const updateProfile = (profile: IProfile, objForUpdate: Partial<IProfile>) => {
        return { ...profile, ...objForUpdate };
    }

    // console.log(updateProfile(profile, { age: 51 }));


    //
}