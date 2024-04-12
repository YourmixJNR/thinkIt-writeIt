// pages/_middleware.js
import { withAuth } from './middleware/auth';

export default withAuth({
 matcher: ['/dashboard', '/protected-route'],
});
