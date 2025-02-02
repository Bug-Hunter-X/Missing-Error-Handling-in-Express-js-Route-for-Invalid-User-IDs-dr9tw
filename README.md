# Missing Error Handling in Express.js Route for Invalid User IDs

This repository demonstrates a common error in Express.js routes: the lack of error handling for invalid input parameters. Specifically, the route `/users/:id` does not handle cases where `:id` is not a valid user ID, leading to potential crashes or unexpected behavior.

The `bug.js` file contains the buggy code. The `bugSolution.js` file shows the corrected code with proper error handling.

## How to reproduce the bug

1. Clone this repository.
2. Run `npm install express`.
3. Run `node bug.js`.
4. Send a request to `/users/abc` (or any other non-numeric ID). The server will likely crash or behave unexpectedly because no validation is performed on the userId.

## How to fix the bug

The solution involves adding error handling to validate the userId, and return a proper error response in case of invalid ID.  This is demonstrated in `bugSolution.js`