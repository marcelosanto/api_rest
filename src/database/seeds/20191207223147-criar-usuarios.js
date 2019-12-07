const bcryptjs = require('bcryptjs')

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'John Doe',
        email: 'john@lols.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        nome: 'Ezequias Rocha',
        email: 'zeca@lols.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        nome: 'Magdalena Santos',
        email: 'magda@lols.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        update_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },

}
