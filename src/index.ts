// Main file for instantiation of the Hexagonal Architecture platform
import createStorageFiles from '@infrastructure/inFileStorage/createStorageFiles';

import InFileMeetupRepository from '@infrastructure/adapters/InFileMeetupRepository';
import MeetupApplication from '@application/meetup/MeetupApplication';
import MeetupApi from '@userInterface/adapters/MeetupApi';

// Storage initialization
await createStorageFiles();

// Meetup Service
const meetupRepository = new InFileMeetupRepository(); // Instantiate the Driven adapter
const meetupApplication = new MeetupApplication(meetupRepository); // Instantiate the Application
export const meetupApi = new MeetupApi(meetupApplication); // Instantiate the Driving adapter
