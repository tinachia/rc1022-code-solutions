update "actors"
  set "firstName" = 'Baby',
      "lastName" = 'Yoda'
  where "actorId" = 1
  returning "firstName",
           "lastName"
