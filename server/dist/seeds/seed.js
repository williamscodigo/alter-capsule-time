import db from '../config/connection.js';
import { Capsule, User } from '../models/index.js';
import cleanDB from './cleanDB.js';
import userData from './userData.json' with { type: 'json' };
import capsuleData from './capsuleData.json' with { type: 'json' };
const seedDatabase = async () => {
    try {
        await db();
        await cleanDB();
        await Capsule.insertMany(capsuleData);
        await User.create(userData);
        console.log('Seeding completed successfully!');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};
seedDatabase();
