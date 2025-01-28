import { Capsule, User } from '../models/index.js';
import process from 'process';

const cleanDB = async (): Promise<void> => {
  try {
    // Delete documents from THought collection
    await Capsule.deleteMany({});
    console.log('Thought collection cleaned.');

    // Delete documents from User collection
    await User.deleteMany({});
    console.log('Capsule collection cleaned.');

  } catch (err) {
    console.error('Error cleaning collections:', err);
    process.exit(1);
  }
};

export default cleanDB;
