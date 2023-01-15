// PRIORITY IS RESOLVED FROM LOWEST NUMBER (-101) TO HIGHEST NUMBER (100)

// VILLAGE CORE
const PRIORITY_VILLAGE_MEETING = 0

// WINCHECK PRIORITY
const PRIORITY_WIN_CHECK_DEFAULT = 0
const PRIORITY_WIN_IF_LYNCHED = -10
const PRIORITY_WIN_BY_LYNCHING = -10
const PRIORITY_GAME_WIN_CHECK = PRIORITY_WIN_CHECK_DEFAULT
const PRIORITY_WIN_ALL_SAME_ROLE = PRIORITY_WIN_CHECK_DEFAULT
const PRIORITY_WIN_AMONG_LAST_TWO = PRIORITY_WIN_CHECK_DEFAULT
const PRIORITY_WIN_IF_ALIVE = PRIORITY_WIN_CHECK_DEFAULT
const PRIORITY_WIN_WITH_MAFIA = PRIORITY_WIN_CHECK_DEFAULT
const PRIORITY_WIN_WITH_MONSTERS = PRIORITY_WIN_CHECK_DEFAULT
const PRIORITY_WIN_WITH_VILLAGE = PRIORITY_WIN_CHECK_DEFAULT
const PRIORITY_WIN_ALL_PROBED = PRIORITY_WIN_CHECK_DEFAULT

// NIGHT PRIORITY
const PRIORITY_IDENTITY_STEALER_BLOCK = -200

const PRIORITY_REDIRECT_ACTION_CONTROL = -101
const PRIORITY_REDIRECT_ACTION_TARGET = -100
const PRIORITY_STEAL_ACTIONS = -99
const PRIORITY_SWAP_VISITORS_A = -98
const PRIORITY_SWAP_VISITORS_B_AND_SWAP = -97
const PRIORITY_BLOCK_VISITORS = -96
const PRIORITY_NIGHT_ROLE_BLOCKER = -95
const PRIORITY_NIGHT_NURSE = -95
const PRIORITY_CLEANSE_WEREWOLF_VISITORS = -94
const PRIORITY_KILL_LYCAN_VISITORS_ENQUEUE = -94
const PRIORITY_KILL_VISITORS_ENQUEUE = -94
const PRIORITY_NIGHT_SAVER = -93

const PRIORITY_ASSOGUN_GIVER = -51
const PRIORITY_BITING_WOLF = -50

const PRIORITY_MODIFY_INVESTIGATIVE_RESULT_DEFAULT = -50
const PRIORITY_MAKE_INNOCENT = PRIORITY_MODIFY_INVESTIGATIVE_RESULT_DEFAULT
const PRIORITY_REVEAL_TARGET_ON_DEATH = PRIORITY_MODIFY_INVESTIGATIVE_RESULT_DEFAULT

const PRIORITY_ITEM_GIVER_DEFAULT = -50
const PRIORITY_ARMOR_GIVER = PRIORITY_ITEM_GIVER_DEFAULT
const PRIORITY_GUN_GIVER = PRIORITY_ITEM_GIVER_DEFAULT
const PRIORITY_ORANGE_GIVER = PRIORITY_ITEM_GIVER_DEFAULT
const PRIORITY_PROBE = PRIORITY_ITEM_GIVER_DEFAULT
const PRIORITY_DOUSE = PRIORITY_ITEM_GIVER_DEFAULT

const PRIORITY_MESSAGE_GIVER_DEFAULT = -55
const PRIORITY_CONFIRM_SELF = PRIORITY_MESSAGE_GIVER_DEFAULT

const PRIORITY_INVESTIGATIVE_DEFAULT = -10
const PRIORITY_ALIGNMENT_LEARNER = PRIORITY_INVESTIGATIVE_DEFAULT
const PRIORITY_ROLE_LEARNER = PRIORITY_INVESTIGATIVE_DEFAULT

const PRIORITY_SWAP_ROLES = -4
const PRIORITY_CLEAN_DEATH = -3
const PRIORITY_IDENTITY_STEALER = -2

const PRIORITY_KILL_DEFAULT = 0
const PRIORITY_KILL_LYCAN_VISITORS = PRIORITY_KILL_DEFAULT
const PRIORITY_KILL_VISITORS = PRIORITY_KILL_DEFAULT
const PRIORITY_NIGHT_KILLER = PRIORITY_KILL_DEFAULT
const PRIORITY_POISONER = PRIORITY_KILL_DEFAULT
const PRIORITY_JAIL_EXECUTE = PRIORITY_KILL_DEFAULT

const PRIORITY_MISMASON_MAFIA = 1

const PRIORITY_BECOME_DEAD_ROLE = 50

const PRIORITY_INVESTIGATIVE_AFTER_RESOLVE_DEFAULT = 100
const PRIORITY_TRACK = PRIORITY_INVESTIGATIVE_AFTER_RESOLVE_DEFAULT
const PRIORITY_WATCH = PRIORITY_INVESTIGATIVE_AFTER_RESOLVE_DEFAULT
const PRIORITY_LEARN_VISITORS = PRIORITY_INVESTIGATIVE_AFTER_RESOLVE_DEFAULT
const PRIORITY_CAROL = PRIORITY_INVESTIGATIVE_AFTER_RESOLVE_DEFAULT
const PRIORITY_DREAMER = PRIORITY_INVESTIGATIVE_AFTER_RESOLVE_DEFAULT
const PRIORITY_SNOOP = PRIORITY_INVESTIGATIVE_AFTER_RESOLVE_DEFAULT

const ACT_ON_VISITORS_DEFAULT = 100
const PRIORITY_MAKE_VISITORS_INSANE = ACT_ON_VISITORS_DEFAULT
const PRIORITY_GIVE_VISITORS_ITEM = ACT_ON_VISITORS_DEFAULT

// MEETING PRIORITY
const PRIORITY_JAIL_MEETING = -10
const PRIORITY_CULT_MEETING = -2
const PRIORITY_MASON_MEETING = -2
const PRIORITY_MAFIA_MEETING = -1

// SUNSET PRIORITY
const PRIORITY_LYNCH_REVENGE = 0

module.exports = {
    // VILLAGE CORE
    PRIORITY_VILLAGE_MEETING,

    // WINCHECK PRIORITY
    PRIORITY_WIN_CHECK_DEFAULT,
    PRIORITY_WIN_IF_LYNCHED,
    PRIORITY_WIN_BY_LYNCHING,
    PRIORITY_GAME_WIN_CHECK,
    PRIORITY_WIN_ALL_SAME_ROLE,
    PRIORITY_WIN_AMONG_LAST_TWO,
    PRIORITY_WIN_IF_ALIVE,
    PRIORITY_WIN_WITH_MAFIA,
    PRIORITY_WIN_WITH_MONSTERS,
    PRIORITY_WIN_WITH_VILLAGE,
    PRIORITY_WIN_ALL_PROBED,

    // NIGHT PRIORITY
    PRIORITY_IDENTITY_STEALER_BLOCK,

    PRIORITY_REDIRECT_ACTION_CONTROL,
    PRIORITY_REDIRECT_ACTION_TARGET,
    PRIORITY_STEAL_ACTIONS,
    PRIORITY_SWAP_VISITORS_A,
    PRIORITY_SWAP_VISITORS_B_AND_SWAP,
    PRIORITY_NIGHT_ROLE_BLOCKER,
    PRIORITY_NIGHT_NURSE,
    PRIORITY_BLOCK_VISITORS,
    PRIORITY_CLEANSE_WEREWOLF_VISITORS,
    PRIORITY_KILL_LYCAN_VISITORS_ENQUEUE,
    PRIORITY_KILL_VISITORS_ENQUEUE,
    PRIORITY_NIGHT_SAVER,

    PRIORITY_ASSOGUN_GIVER,
    PRIORITY_BITING_WOLF,

    PRIORITY_MODIFY_INVESTIGATIVE_RESULT_DEFAULT,
    PRIORITY_MAKE_INNOCENT,
    PRIORITY_REVEAL_TARGET_ON_DEATH,

    PRIORITY_ITEM_GIVER_DEFAULT,
    PRIORITY_ARMOR_GIVER,
    PRIORITY_GUN_GIVER,
    PRIORITY_ORANGE_GIVER,
    PRIORITY_PROBE,
    PRIORITY_DOUSE,

    PRIORITY_CONFIRM_SELF,

    PRIORITY_INVESTIGATIVE_DEFAULT,
    PRIORITY_ALIGNMENT_LEARNER,
    PRIORITY_ROLE_LEARNER,

    PRIORITY_CLEAN_DEATH,
    PRIORITY_IDENTITY_STEALER,

    PRIORITY_KILL_DEFAULT,
    PRIORITY_KILL_LYCAN_VISITORS,
    PRIORITY_KILL_VISITORS,
    PRIORITY_NIGHT_KILLER,
    PRIORITY_POISONER,
    PRIORITY_JAIL_EXECUTE,

    PRIORITY_MISMASON_MAFIA,

    PRIORITY_BECOME_DEAD_ROLE,
    PRIORITY_SWAP_ROLES,

    PRIORITY_INVESTIGATIVE_AFTER_RESOLVE_DEFAULT,
    PRIORITY_TRACK,
    PRIORITY_WATCH,
    PRIORITY_LEARN_VISITORS,
    PRIORITY_CAROL,
    PRIORITY_DREAMER,
    PRIORITY_SNOOP,

    PRIORITY_MAKE_VISITORS_INSANE,
    PRIORITY_GIVE_VISITORS_ITEM,

    // MEETING PRIORITY
    PRIORITY_JAIL_MEETING,
    PRIORITY_CULT_MEETING,
    PRIORITY_MASON_MEETING,
    PRIORITY_MAFIA_MEETING,

    // SUNSET PRIORITY
    PRIORITY_LYNCH_REVENGE,
};