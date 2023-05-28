import { Flag } from '../../types/general';

export const FLAGS_EXTRA: Flag[] = [
  { bit: 0, name: `INSTANCE_BIND - creature kill bind instance with killer and killer's group` },
  { bit: 1, name: `CIVILIAN - not aggro (ignore faction/reputation hostility)` },
  { bit: 2, name: `NO_PARRY - creature can't parry` },
  { bit: 3, name: `NO_PARRY_HASTEN - creature can't counter-attack at parry` },
  { bit: 4, name: `NO_BLOCK - creature can't block` },
  { bit: 5, name: `NO_CRUSHING_BLOWS - creature can't do crush attacks` },
  { bit: 6, name: `NO_XP - creature kill not provide XP` },
  { bit: 7, name: `TRIGGER - trigger creature` },
  { bit: 8, name: `NO_TAUNT - creature is immune to taunt auras and effect attack me` },
  { bit: 9, name: `NO_MOVE_FLAGS_UPDATE - Creature won't update movement flags` },
  { bit: 10, name: `GHOST_VISIBILITY - creature will be only visible for dead players` },
  { bit: 11, name: `UNKNOWN` },
  { bit: 12, name: `NO_SELL_VENDOR - players can't sell items to this vendor` },
  { bit: 13, name: `CREATURE_FLAG_EXTRA_IGNORE_COMBAT` },
  { bit: 14, name: `WORLDEVENT - custom flag for world event creatures (left room for merging)` },
  { bit: 15, name: `GUARD - Creature is guard` },
  { bit: 16, name: `IGNORE_FEIGN_DEATH - Creature ignores feign death` },
  { bit: 17, name: `NO_CRIT - creature can't do critical strikes` },
  { bit: 18, name: `NO_SKILL_GAINS - creature won't increase weapon skills` },
  { bit: 19, name: `OBEYS_TAUNT_DIMINISHING_RETURNS - Taunt is a subject to diminishing returns on this creature` },
  { bit: 20, name: `ALL_DIMINISH - Creature is subject to all diminishing returns as player are` },
  { bit: 21, name: `NO_PLAYER_DAMAGE_REQ - Creature does not need to take player damage for kill credit` },
  { bit: 22, name: `AVOID_AOE - ignored by aoe attacks (for icc blood prince council npc - Dark Nucleus)` },
  { bit: 23, name: `NO_DODGE - target cannot dodge` },
  { bit: 24, name: `MODULE - Used by module creatures to avoid blizzlike checks` },
  { bit: 25, name: `DONT_CALL_ASSISTANCE - Prevent creatures from calling for assistance on initial aggro` },
  { bit: 26, name: `IGNORE_ALL_ASSISTANCE_CALLS - Prevents creature from responding to assistance calls` },
  { bit: 27, name: `DONT_OVERRIDE_SAI_ENTRY - Allows creatures to use both GUID and ENTRY specific SAI (Row IDs cannot overlap)` },
  // { bit: 28, name: `DUNGEON_BOSS - creature is a dungeon boss (SET DYNAMICALLY, DO NOT ADD IN DB)` },
  { bit: 29, name: `IGNORE_PATHFINDING - creature ignore pathfinding` },
  { bit: 30, name: `IMMUNITY_KNOCKBACK - creature is immune to knockback effects` },
  { bit: 31, name: `HARD_RESET` },
];
