export const raceSelection = {
  "id": "race",
  "title": "races.race.title",
  "choose": 1,
  "options": [
    {
      "title": "races.dwarf.name",
      "text": "races.dwarf.description",
      "effects": [
        {
          "type": "narrative",
          "name": "races.dwarf.age.title",
          "details": "races.dwarf.age.description",
          "values": {
            "youngUntil": "50",
            "lifeExpectancy": "350"
          }
        },
        {
          "type": "narrative",
          "name": "races.dwarf.size.title",
          "details": "races.dwarf.size.description",
          "values": {
            "minHeight": "4 ft (122 cm)",
            "maxHeight": "5 ft (152 cm)",
            "averageWeight": "150 lb. (68 kg)"
          }
        }
        /* TODO add the rest
        {
          "type": "feature", // "feature", "stat-increase" , "skill-proficiency", "tool-proficiency", "language", "spellcasting". All the specific values and how they'll be processed is still to be defined in its own schema files.
          "modifier": "add", // "add", "remove", "set". Specific behaviour will be designed later.
          "name": "The Name of the Modification", // for features it'll be the feature name. For proficiencies, the proficiency itself. For stat increses, the stat that is increased or the name that is used for this.
          "details": "Description of the $effect", // Description of the effect if necessary. In features it'll be what the feature does, in proficiencies it can probably be skipped unless it's useful in the specific context.
          "values": { // Values of the effect. For stat increases maybe it has "con", "str", "dex", etc with it's values. For skill proficiencies, the skills that are increased, maybe without an associated value. For features, the calculated values (like "1d6", or "+10" or "+ proficiency bonus") that can be substituted in the description with a different formatting
            "effect": "Effect"
          }
        },
      ],
      "selections": [
        // Sub-selections, derived from taking this option (like "languages" if you take a background that allows to choose from certain languages, or subclasses from a class). Each is just referrenced via id here (Array of Strings).
      */
      ]
    }
  ]
}