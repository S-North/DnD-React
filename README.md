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
## App layout
The app will make use of several pages, using React Router functionality. https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/

State will be passed through the app via the react-router-dom Link component. Then accessed using useLocation(). https://dev.to/maxcell/react-router-using-location-state-for-custom-ui-navigation-2ia9?utm_source=pocket_mylist

Home
* Tools page
    * Dice roller
    * Random tables (loot, injury, encounters, etc)
* Monsters List
    * Add monster
    * View monster
        * Edit monster
        * Delete monster
* Campaigns list
    * Add campaign
    * View campaign. Shows the list of adventures, notes & campaign NPCs in the campaign.
        * Edit campaign
        * Delete campaign
        * View adventure. Shows the list of encounters, notes & campaign NPCs in the adventure.
            * Edit adventure
            * Delete adventure
            * View encounter. Shows the list of combatants (PC's, NPCs and monsters) in the adventure.
                * Edit encounter (add remove combatants, notes, treasure, etc)
                * Delete encounter
     
    
