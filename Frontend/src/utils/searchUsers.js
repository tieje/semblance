const http = require('http');

function SearchUsers (gender, archetypes, distance, location) {
  /**
  * Return a JSON list of user account data which match the filters.
  *
  * Arguments that are not desired may be set to `undefined`. Undefined
  * arguments will not filter the search.
  *
  * Arguments:
  * archetypes: A list of archetype names the searcher has synergy with. A
  * result must `identifyAs` at least one of these, but does not need to match
  * all synergies. Spelling must be exact.
  * e.g. ['The Warrior', 'The Idealist']
  *
  * distance: Maximum distance in miles away from `location` that a result can
  * be. Must be passed with `location`.
  * e.g. 50
  *
  * gender: One of the following strings: 'MALE', 'FEMALE', 'NONBINARY'.
  * e.g. 'NONBINARY'
  *
  * location: A point in WKT format: 'POINT(longitude latitue)'. Must be passed
  * with `distance`.
  * e.g. 'POINT(-10.45 30.3499)'
  */

  const SEARCH_USERS = `
  query SearchUsers (
    $archetypes: [String],
    $distance: Int,
    $gender: String,
    $location: String
  ) {
    accounts(
      archetypes: $archetypes,
      distance: $distance,
      gender: $gender,
      location: $location
    ) {
      username
      id
      location
    }
  }`;

  const data = JSON.stringify({
    operationName: 'SearchUsers',
    query: SEARCH_USERS,
    variables: {
      archetypes: archetypes,
      distance: distance,
      gender: gender,
      location: location
    }

  });

  // Connection options
  const options = {
    hostname: 'backend',
    path: '/graphql',
    port: 8000,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'User-Agent': 'Node'
    }
  };

  const req = http.request(options, (res) => {
    let data = '';
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', (d) => {
      data += d;
    });

    res.on('end', () => {
      console.log(JSON.parse(data).data);
    });
  });

  req.on('error', (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
}

// Example: SearchUsers('MALE', ['The Tester'], 100, 'POINT(-72 41)');
