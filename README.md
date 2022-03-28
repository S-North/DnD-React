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
    * Search feature
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
        * Add, edit & remove notes and npcs for the campaign 
        * View adventure. Shows the list of encounters, notes & campaign NPCs in the adventure.
            * Edit adventure
            * Delete adventure
            * Add, edit & remove notes and npcs for the adventure 
            * View encounter. Shows the list of combatants (PC's, NPCs and monsters) in the adventure.
                * Edit encounter (add remove combatants, notes, treasure, etc)
                * Delete encounter
                * Run encounter: lots of functionality. Tracking rounds & turns, hit points, conditions, dice rolling for actions, etc
     
 ## Completed
 
 ## To Do
 * Refactor the add new monster to compendium form into a more general monster edit form. To be used for adding & editing monsters in the compendium & in encounters. Add all attributes in the current data model (senses, languages, resistances, etc currently missiong from form).
 * Fix the initiative order in the running encounter. PCs appear grouped & in alphabetical order, regardless of their actual init.

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
    "players": [
        {
            "id": generated by json-server,
            "campaignId": generated by json-server,
            "name": string,
            "npc": true | false,
            "strength": number,
            "dexterity": number,
            "constitution": number,
            "inteligence": number,
            "wisdom": number,
            "charisma": number,
            "xp": number,
            "level": number,
            "proficiency": number,

        }
    ],
    "notes": [
        {
            "id": generated by json-server,
            "campaignId": from-campaign,
            "adventureId": from-adventure,
            "name": string,
            "description": string
        }
    ],
    "monsters": [
        {
            "id": generated by uuidv4(),
            "name": string,
            "description": string,
            "type": string,
            "size": string,
            "ac": int,
            "hp": {
                "average": int,
                "hitDice": ["number", "dice", "bonus"]
            },
            "speed": int,
            "strength": int,
            "dexterity": int,
            "constitution": int,
            "inteligence": int,
            "wisdom": int,
            "charisma": int,
            "saving-throws": {
                "strength": int,
                "dexterity": int,
                "constitution": int,
                "inteligence": int,
                "wisdom": int,
            },
            "skills": {
                "acrobatics": string,
                "animal-handling": string,
                "athletics": string,
                "arcana": string,
                "deception": string,
                "history": string,
                "insight": string,
                "intimidation": string,
                "investigation": string,
                "medicine": string,
                "nature": string,
                "perception": string,
                "performance": string,
                "persuasion": string,
                "religion": string,
                "sleight-of-hand": string,
                "stealth": string,
                "survival": string,
            },
            "vulnerabilities": [string, string],
            "resistances": [string, string],
            "damageImmunity": [string, string],
            "conditionImmunity": [string, string],
            "senses": string,
            "languages" string,
            "cr": float,
            "traits": [],
            "actions": [],
            "legendary": {},
        }
    ],
    "campaigns": [
        {
            "id": generated by json-server,
            "name": string,
            "description": string,
            "state": pending | active | complete,
            "favorite": true | false
        }
    ],
    "adventures": [
        {
            "id": generated by json-server,
            "campaignId": generated by json-server,
            "name": string,
            "description": string,
            "state": pending | active | complete,
            "favorite": true | false
        }
    ],
    "encounters": [
        {
            "id": generated by json-server,
            "campaignId": from-campaign,
            "adventureId": from-adventure,
            "name": string,
            "description": string,
            "favorite": true | false
        }
    ]
}
```
