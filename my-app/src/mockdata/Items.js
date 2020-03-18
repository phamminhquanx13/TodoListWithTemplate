import uuidv4 from 'uuid/v4';

const Items = [
    {
        id: uuidv4(),
        name: "pq1",
        level: 2 // high
    },
    {
        id: uuidv4(),
        name: "pq2",
        level: 0 // low
    },
    {
        id: uuidv4(),
        name: "pq3",
        level: 1 // medium
    },
    {
        id: uuidv4(),
        name: "pq4",
        level: 0 // low
    },
    {
        id: uuidv4(),
        name: "pq5",
        level: 2 // high
    },
    {
        id: uuidv4(),
        name: "pq6",
        level: 1 // medium
    }
];

export default Items;