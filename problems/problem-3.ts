{
    // problem 3 : count Word Occurrences 

    const countWordOccurrences = (sentence: string, world: string) : number => {

        const lowSentence = sentence.toLocaleLowerCase();
        const lowWord = world.toLocaleLowerCase();
        const sentenceToWordArray = lowSentence.split(' ');

        return sentenceToWordArray.filter((w) => w === lowWord).length;

    }

    // console.log(countWordOccurrences('The function should return the number of times the word appears in the sentence', 'the'));



    //
}