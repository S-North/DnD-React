# DnD React
 2.0 of my DnD React app. 
 I'm a novice programmer and this project is a learn-as-you-go effort, so please concider it alpha-as-f$%k.

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
        * Copy monster (creating custom monsters)
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
     
 ## Data
 The state for this app is stored in json https://www.w3schools.com/whatis/whatis_json.asp

The state will be served by json-server using Javascript fetch requests. https://www.npmjs.com/package/json-server

cUrl for testing e.g.;
* curl -X POST -H "Content-Type: application/json" -d '{"campaign":"1","name":"curl","description":"put this on the server with Curl"}' http://localhost:8001/adventures
*  curl -X DELETE http://localhost:8001/adventures/${id}
*  curl -X GET -i http://localhost:8001/adventures/${id}
*  curl -X  GET -i http://192.168.1.200:8001/adventures/2?_embed=npcs

The structure for the data is as follows (this will be updated as features are added and the data structure grows & changes);
```json
{
    "monsters": [
        {
            "id": 1,
            "name": "",
            "description": "",
            "type": "monster",
            "ac": "",
            "hp": "",
            "cr": "",
            "str": "",
            "dex": "",
            "etc": "..."
        }
    ],
    "campaigns": [
        {
            "id": "1",
            "name": "",
            "description": "",
            "pcs": [
                {
                    "id": 1,
                    "name": "",
                    "description": "",
                    "type": "player",
                    "ac": "",
                    "hp": "",
                    "cr": "",
                    "str": "",
                    "dex": "",
                    "etc": "..."
                }
            ],
            "npcs": [
                {
                    "id": "1",
                    "name": "",
                    "description": "",
                    "type": "npc",
                    "notes": ["array of notes"],
                    "stats, like PC/monster stats": "etc"
                }
            ],
            "adventures": [
                {
                    "id": "1",
                    "name": "",
                    "description": "",
                    "notes": ["array of notes"],
                    "npcs": ["Like in the campaigns. An array of NPC objects", "That can be copied from the campaign state"],
                    "encounters": [
                        {
                        "id": "1",
                        "name": "",
                        "description": "",
                        "notes": ["array of notes"],
                        "combatants": [
                            "A list of objects containing monsters, npcs & player characters",
                            {
                                "type": "npc",
                                "type": "monster",
                                "type": "player",
                            }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
```
