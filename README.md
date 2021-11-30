# Polish COVID-19 stats API

## API service in Firebase Functions to return Polish daily COVID-19 data by regions from MongoDB database


### Endpoints
Return all data from database
```/stats```

Return data by day
```/stats/date/2021-11-30```

Return data by Document ID
```/stats/:id```




Setting up env variables needed
```firebase functions:config:set database.url="your_url"```

Deployment
```firebase deploy --only functions```