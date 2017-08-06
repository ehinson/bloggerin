export default [
  {
    route: ['login'],
    call: (callPath, args) => {
      const { username, password } = args[0];
      const userStatementQuery = {
        $and: [{ username: username }, { password: password }]
      };
    }
  }
];
