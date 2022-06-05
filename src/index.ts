import InFileMeetupRepository from '@infrastructure/adapters/InFileMeetupRepository';
import MeetupApplication from '@application/meetup/MeetupApplication';
import MeetupApi from '@userInterface/adapters/MeetupApi';

const meetupRepository = new InFileMeetupRepository();
const meetupApplication = new MeetupApplication(meetupRepository);
export const meetupApi = new MeetupApi(meetupApplication);
