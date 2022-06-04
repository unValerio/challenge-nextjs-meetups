import postMeetup from '../../infrastructure/rest/postMeetup';
import getMeetups from '../../infrastructure/rest/getMeetups';

export default function handler(req, res) {
  if (req.method === 'POST') {
    postMeetup(req, res);
  } else {
    getMeetups(req, res);
  }
}
