## Description

An API created to receive and store GPS data from external devices. \
Created using Nestjs, database with MongoDB.

## Installation

```bash
# Clone this repository
$ git clone https://github.com/martinsvitor/gpsService.git

# Move into the folder
$ cd gpsService

# Install the dependencies
$ npm install
```

## Running the app

```bash
# run jest tests and start development
$ npm run start

# run watch mode
$ npm run start:dev

# run production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Usage

The API has three working endpoints:

- **/coordinates**            for **Post** requests sending json data
- **/coordinates/all**        for **Get** requests, returning all stored coordinates
- **/coordinates/sample**     for **Get** requests, receiving and storing the coordinates from [wheretheiss](https://wheretheiss.at/)
