// THIS FILE CONTAINS THE ATOMIC DB FUNCTIONS FOR THE 'profiles' TABLE ONLY. IT IS DRAWN IN BY THE 'index.js' FILE IN THIS SAME FOLDER. UNLIKE THE OTHER CONTROLLER FILES, THIS ONE WAS GIVEN BY THE REPO, NOT AUTHORED BY THE TESSELL8 TEAM. IT IS LARGELY UNCHANGED, AND SERVED AS THE TEMPLATE FOR THE OTHER CONTROLLER FILES.
const knex = require('knex')(require('../../knexfile'));
const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  models.Profile.fetchAll()
    .then(profiles => {
      res.status(200).send(profiles);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};

// WHY IS THIS COMMENTED OUT? BECAUSE REDIS IS HANDLING IT?

// module.exports.create = (req, res) => {
//   models.Profile.forge({ username: req.body.username, password: req.body.password })
//     .save()
//     .then(result => {
//       res.status(201).send(result.omit('password'));
//     })
//     .catch(err => {
//       if (err.constraint === 'users_username_unique') {
//         return res.status(403);
//       }
//       res.status(500).send(err);
//     });
// };


module.exports.getOne = (req, res) => {
  models.Profile.where({ id: req.params.id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      res.status(200).send(profile);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};


module.exports.getOneByDisplay = (req, res) => {
  console.log('parrrr', req.params);
  res.send('hihi');
  // models.Profile.where({ display: req.params.display }).fetch()
  //   .then(profile => {
  //     if (!profile) {
  //       throw profile;
  //     }
  //     res.status(200).send(profile);
  //   })
  //   .error(err => {
  //     res.status(500).send(err);
  //   })
  //   .catch(() => {
  //     res.sendStatus(404);
  //   });
};


module.exports.update = (req, res) => {
  models.Profile.where({ id: req.params.id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      return profile.save(req.body, { method: 'update' });
    })
    .then(() => {
      res.sendStatus(201);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};


module.exports.getProfilesByList2 = (req, res) => {
//  knex.raw('SELECT profiles.* FROM (SELECT ? AS user UNION ALL SELECT ? UNION ALL SELECT ? UNION ALL SELECT ? UNION ALL SELECT ? UNION ALL SELECT ? UNION ALL SELECT ? UNION ALL SELECT ? UNION ALL SELECT ? UNION ALL SELECT ?) list LEFT JOIN profiles ON list.user = profiles.id;', [7,3,1,3,5,2,5,2,8,8])
  knex.raw('SELECT * FROM (SELECT 1 AS user UNION ALL SELECT 3 UNION ALL SELECT 3 UNION ALL SELECT 5 UNION ALL SELECT 5 UNION ALL SELECT 2 UNION ALL SELECT 4 UNION ALL SELECT 6 UNION ALL SELECT 8 UNION ALL SELECT 8) list LEFT JOIN profiles ON list.user = profiles.id;')
    .then(profiles => {
      res.status(200).send(profiles);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

module.exports.getProfilesByList = (req, res) => {
  console.log('bodyyyy---', req.body);
  models.Profile.where('id', 'IN', (req.body.profileIds))
    .fetchAll()
    .then(profiles => {

      res.status(200).send(profiles);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};


// AGAIN, IS THIS COMMENTED OUT BECAUSE REDIS IS HANDLING THIS FUNCTION?

// module.exports.deleteOne = (req, res) => {
//   models.Profile.where({ id: req.params.id }).fetch()
//     .then(profile => {
//       if (!profile) {
//         throw profile;
//       }
//       return profile.destroy();
//     })
//     .then(() => {
//       res.sendStatus(200);
//     })
//     .error(err => {
//       res.status(503).send(err);
//     })
//     .catch(() => {
//       res.sendStatus(404);
//     });
// };

////////////////////////////////////////////////////////////////////
////////////////  TEST FUNCTION FOR DB QUERIES  ////////////////////
////////////////////////////////////////////////////////////////////


module.exports.testAll = (req, res) => {
  models.Profile.fetchAll()
    .then(profiles => {
      res.status(200).send(profiles);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};



