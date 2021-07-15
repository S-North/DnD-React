# DnD React
 2.0 of the DnD react app.

 ## Data
 The state for this app is stored in json https://www.w3schools.com/whatis/whatis_json.asp
 The state will be served by json-server using Javascript fetch requests. https://www.npmjs.com/package/json-server
The structure for the data is as follows;
```json
{
  "monsters": [
    {
      "id": 1,
      "name": "",
      "ac": "",
      "hp": "",
      "cr": ""
    }
  ],
  "campaigns": [
    {
      "id": "1",
      "name": "",
      "npcs": [
        {
          "id": "1",
          "name": ""
        }
      ],
      "adventures": [
        {
          "id": "1",
          "name": "",
          "encounters": [
            {
              "id": "1",
              "name": ""
            }
          ]
        }
  ]
}
```

