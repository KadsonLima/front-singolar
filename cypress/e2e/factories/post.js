import {faker} from '@faker-js/faker';

export async function createPost(){

    return {
        title:faker.random.word(),
        body:faker.random.words(10)
    }
}