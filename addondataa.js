export const lastest_ver = "1.21.30"
/**
 * markdown support
 * 
 * note image path need ../
 * [img="../images/___.png"] - display image
 * 
 * # message - h1
 * ## message - h2
 * ### message - h3
 * #### message - h4
 * ##### message - h5
 * ###### message - h6
 * 
 * **bold**
 * ***bold italics***
 * *italics* / _italics_
 * __underline__
 * __*underline italics*__
 * __**underline bold**__
 * __***underline bold italics***__
 *  ~~Strikethrough~~
 * 
 * Lists
 * - Hello
 * * This work too
 *   - or this
 *   * this too
 * 
 * ``` code box ``` < you may have to type \`\`\` code \`\`\`
 * 
 * > quotes
 * 
 * § color text support l, o but no k
 * 
 * support html code
 * <p class="text-center">uwu</p>
 */
export const addon = [
    {
        title: "TPA (Teleportation Asking)",
        description: "Use Compass to ask for teleportation.",
        imgSrc: 'tpa.png',
        readId: "tpa",
        pageHref: "#",
        isStable: true,
        longDes: `
        Welcome to the **Teleportation Asking Addon** for Minecraft Bedrock Edition! This innovative addon allows players to easily send and receive teleport requests, enhancing the multiplayer experience and fostering collaboration among players.

        ## Key Features
        - **Simple Teleport Requests**: Players can request to teleport to others or have others teleport to them with just a few clicks, using the intuitive UI integrated with Minecraft's compass item.
        - **Dynamic Request Management**: The addon tracks active requests, allowing players to manage their incoming and outgoing teleport requests effortlessly. Players can see who they are asking and who has asked them, ensuring no request goes unnoticed.
        - **Customizable Reasoning**: When sending a teleport request, players have the option to include a reason. This adds a layer of personalization and context to each request, helping players understand the intent behind teleportation.
        - **Cooldown and Expiration Mechanism**: To prevent spam and ensure fair play, the addon includes a cooldown period for sending requests. Each request also has a 60-second expiration timer, after which it will automatically be canceled if not accepted or denied.
        - **Friendly Notifications**: The addon sends friendly messages to players notifying them of request statuses. Whether a request is accepted, denied, or has expired, players will always be informed, promoting clear communication.
        - **Interactive UI**: The addon utilizes Minecraft's ActionFormData and ModalFormData to create a seamless and engaging user experience. The forms display essential information clearly, making it easy for players to navigate their requests.
        - **Sound Effects**: Enhance your game-play with delightful sound effects when sending requests, accepting them, or encountering errors.

        ## User Experience
        Upon using the addon, players will discover that teleportation is no longer a tedious process. Simply right-click on the compass, and a user-friendly interface will appear, allowing you to:

        - 1. **Ask for Teleportation**: Choose who you want to teleport to or vice versa. Include a reason to persuade them.
        - 2. **Manage Pending Requests**: Keep track of your requests and see the status of others. Accept or deny requests at your convenience.
        - 3. **Receive Notifications**: Get instant feedback about the status of your requests and those of others, keeping communication transparent and friendly.

        ## Conclusion
        The **Teleportation Asking Addon** is a must-have for any Minecraft multiplayer experience. It promotes teamwork, enhances communication, and streamlines the teleportation process. Get ready to explore your world together with friends, making every adventure more accessible and enjoyable!`
    },
    {
        title: "Level (Level System)",
        description: "Add 'xp' structure for basic level system commands.",
        imgSrc: 'level.jpg',
        readId: "level",
        pageHref: "#",
        isStable: true,
        longDes: `
        Welcome to the Level System! This system introduces an engaging way to manage player progression through an experience (XP) structure, allowing for a more dynamic gameplay experience.

        ## Key Features
        - **Easy to Load**: Utilizes structure blocks for a seamless setup.
        - **Fully on Command Block**: Designed for map creators, all functionalities are executed through command blocks.
        - **Scoreboard XP**: Efficiently tracks player experience and maximum XP, making it simple for map creators to set and manage levels.
        - **Customizable Leveling**: Easily adjust XP requirements for leveling up to fit your gameplay needs.
        - **Dynamic Feedback**: Players receive real-time updates on their XP progress, enhancing engagement.
        - **Integration Ready**: Works smoothly with existing command block setups, allowing for easy integration into your maps..`
    },
    {
        title: "Roblox Chat! (Roblox Chat Style)",
        description: "Adds chat on player name tags, customizable by admin.",
        imgSrc: 'rbchat.jpg',
        readId: "rbchat",
        pageHref: "#",
        isStable: false,
        longDes: `
        Introducing the Roblox Chat feature! This script adds customizable chat functionality directly to player name tags, allowing for a more immersive and engaging communication experience within your Minecraft world.

        ## Key Features
        - **Customizable Admin Controls**: Admins can easily configure settings through a user-friendly interface, adjusting chat display options to fit their server's needs.
        - **Enhanced Chat Visibility**: Chat messages appear alongside player names, ensuring visibility even in crowded environments.
        - **Configurable Message Duration**: Set how long messages remain visible, enhancing chat dynamics.
        - **Sound Notifications**: Play sounds upon message sending, adding a fun auditory element to chat interactions.
        - **Dynamic Message Management**: Automatically cut off long messages with a customizable cutoff string, maintaining a clean display.
        - **Scalable Message Display**: Determine how many lines of chat are shown per player, allowing for tailored viewing based on your server's design.
        - **Color Gradation**: Implement fading colors for messages as they near expiration, providing visual feedback for players.
        - **Easy Integration**: Built to work seamlessly with command blocks, making it easy to incorporate into existing maps and server setups.

        ## User Experience
        The Roblox Chat feature is designed with player engagement in mind. With customizable settings, admins can tailor the chat experience to enhance player interactions. Players will enjoy:
        - **Interactive Chats**: Messages are displayed alongside player names, creating an immersive environment where communication is always visible.
        - **Personalized Controls**: Admins can adjust settings like message duration and sound effects, ensuring the chat fits the unique vibe of their server.
        - **Real-Time Feedback**: Players receive immediate audio and visual feedback, making the chat experience lively and engaging.

        ## Conclusion
        The Roblox Chat feature brings a fresh approach to player communication within Minecraft. By allowing chat messages to be displayed alongside player names and providing a range of customizable options, this feature enhances player interactions and overall gameplay experience. Whether you're hosting a community server or creating a unique adventure map, the Roblox Chat feature is an essential addition to elevate player engagement.`
    },
    {
        title: "Wanted! (Bounty Hunting)",
        description: "Basic bounty hunting system customizable by admin.",
        imgSrc: 'wanted.jpg',
        readId: "wanted",
        pageHref: "#",
        isStable: true,
        longDes: `
        Introducing the **Wanted! (Bounty Hunting)** feature! This script allows players to place bounties on each other, creating an exciting dynamic of hunting and reward within your Minecraft server.

        ## Key Features
        - **Dynamic Bounty System**: Players can earn points by killing other players, adding a thrilling incentive to engage in player-versus-player (PvP) interactions.
        - **Leaderboard Display**: A leaderboard shows the bounties of all players currently online, fostering competition among players.
        - **Customizable Bounty Settings**: Admins can easily configure the items used to trigger bounty hunting, the points awarded for kills, and the percentage of bounty stolen upon death.
        - **User-Friendly Interface**: Utilizes forms to allow players and admins to interact with the bounty system seamlessly.
        - **Real-Time Feedback**: Players receive immediate notifications about bounty changes, enhancing the immersive experience.
        - **Integration with Scoreboards**: Utilizes Minecraft's scoreboard system to track and manage bounties efficiently.

        ## User Experience
        The **Wanted!** feature enhances the gameplay by introducing an engaging way for players to interact with each other. With the leaderboard, players can see where they stand and strive to climb the ranks. The customizable settings ensure that the bounty system can be tailored to fit the server's unique style and player base. Players will enjoy:
        - **Competitive Gameplay**: The thrill of hunting down other players for bounties adds a layer of excitement and competition.
        - **Interactive Forms**: Admins can easily modify settings, making the bounty system flexible and adaptable to community needs.
        - **Instant Rewards**: Players receive immediate recognition and rewards for their actions, keeping the gameplay dynamic and engaging.

        ## Conclusion
        The **Wanted! (Bounty Hunting)** feature transforms the Minecraft experience by introducing a fun and competitive way for players to interact. By allowing players to place bounties on each other and providing a leaderboard to track standings, this feature fosters an exciting environment filled with adventure and intrigue. Whether you're running a survival server or a competitive PvP environment, the **Wanted!** feature is a must-have to enhance player engagement.`
    },
    {
        title: "Ban/Unban! (Ban and Unban)",
        description: "Gives admin the ability to ban or unban players.",
        imgSrc: 'ban.jpg',
        readId: "ban",
        pageHref: "#",
        isStable: false,
        longDes: `
        ## Key Features:
        - **Admin Commands**: Admins can ban/unban players using chat commands like *!ban* and *!unban*, and view the ban list with *!list*.
        - **UI Menus**: There are interactive UI forms for help, viewing the ban list, banning players, and unbanning players. 
        - **Scoreboard Management**: Uses scoreboards to track bans and manage player states effectively.
        - **Player Ban Logic**: When a player spawns, the system checks if they're banned and kicks them with a reason.
        - **Time Formatting**: The *linux_to_time* function converts Unix timestamps to a human-readable format.

        ## Suggestions:
        - **Error Handling**: You might want to add more error handling in areas where player names are processed to catch any edge cases.
        - **Command Validation**: Ensuring commands are formatted correctly can prevent unnecessary processing and errors.
        - **Permissions**: Consider adding a more detailed permission system for admin roles if the server grows.`
    },
    {
        title: "VoteKick (Vote to Kick Players)",
        description: "Allows players to vote to kick troublesome users.",
        imgSrc: 'voteKick.jpg',
        readId: "voteKick",
        pageHref: "#",
        isStable: true,
        longDes: `
        ## Key Features
        - **Player Selection**: Players can vote to kick others by selecting them from a list.
        - **Anonymous Voting Option**: Voters have the choice to submit their reasons anonymously.
        - **Real-Time Voting Feedback**: Players see real-time vote counts and percentages for the selected player.
        - **Admin Bypass**: Admins can instantly kick players without waiting for the vote.

        ## User Experience
        - **Intuitive Interface**: The use of ActionFormData provides a straightforward and easy-to-navigate interface for players to vote.
        - **Clear Notifications**: Players receive messages about the voting process, including who is being voted on and the reasons for the vote.
        - **Engaging Interaction**: The voting system encourages community engagement and moderation, allowing players to take part in server management.

        ## Conclusion
        The VoteKick feature enhances player moderation by empowering the community to participate in maintaining a positive gaming environment. It balances player autonomy with the necessary oversight to ensure a fun experience for all participants.`
    },
    {
        title: "UnBreak (Unbreakable Block System)",
        description: "Prevents block breaking/placing (best in MiniGames Server).",
        imgSrc: 'unbreak.jpg',
        readId: "unbreak",
        pageHref: "#",
        isStable: false,
        longDes: `
        Welcome to the Level System! This feature introduces an intuitive experience (XP) structure that allows players to level up and gain rewards as they progress through your map. It's designed to be easy to implement and customize, enhancing gameplay and player engagement.

        ## Key Features
        - **Easy to Load**: Utilizes structure blocks for a quick and simple setup, making it beginner-friendly for map creators.
        - **Fully on Command Block**: All functionalities are implemented through command blocks, ensuring seamless integration into your existing maps.
        - **Scoreboard XP Tracking**: Efficiently manage player XP and maximum XP, allowing map creators to define leveling criteria effortlessly.
        - **Dynamic Leveling System**: Players can gain levels through various in-game activities, fostering a sense of progression and achievement.
        - **Customizable Level Rewards**: Easily assign rewards or perks for leveling up, motivating players to continue playing and achieving higher levels.
        - **Progress Feedback**: Players receive real-time notifications on their XP and level status, enhancing the overall gameplay experience.
        - **Adjustable XP Requirements**: Modify the XP needed to level up, allowing you to create custom challenges for different gameplay styles.
        - **Multi-Player Compatibility**: Works seamlessly in multiplayer environments, ensuring all players can enjoy the leveling system together.
        - **Flexible Configuration**: Admins can customize settings through command inputs, tailoring the system to fit their specific map needs.`
    },
    {
        title: "All Chat (All-in-One Chat Add-On)",
        description: "Combines(RoomChat & NearChat & AntiSpam) previous chat systems into one.",
        imgSrc: 'allchat.jpg',
        readId: "allchat",
        pageHref: "#",
        isStable: false,
        longDes: `
        Welcome to the All-in-One Chat Add-On! This feature merges the previous chat systems—RoomChat, NearChat, and AntiSpam—into a single, seamless chat experience. Enhance your server's communication capabilities while keeping chat organized and user-friendly.

        ## Key Features
        - **Unified Chat System**: Combines RoomChat and NearChat functionalities, allowing players to communicate in designated rooms or nearby, all in one place.
        - **Anti-Spam Mechanism**: Prevents spammy messages from cluttering the chat, ensuring clear and meaningful conversations among players.
        - **Customizable Chat Settings**: Admins can easily configure chat options to fit the style and needs of their server, promoting a positive community environment.
        - **Dynamic Room Management**: Players can switch between chat rooms effortlessly, facilitating collaboration and social interaction in a lively manner.
        - **Proximity-Based Communication**: NearChat allows players to communicate with others nearby, creating a more immersive experience as they explore together.
        - **User-Friendly Commands**: Simple commands for players to join rooms, send messages, and manage their chat experience.
        - **Enhanced Moderation Tools**: Admins have access to tools for moderating chat, including muting or removing players who violate chat rules.
        - **Real-Time Notifications**: Players receive instant updates on chat activities, keeping them engaged and informed about ongoing conversations.`
    },
    {
        title: "Dash (Dasher)",
        description: "Adds Dash tag for use with command blocks.",
        imgSrc: 'dash.jpg',
        readId: "dash",
        pageHref: "#",
        isStable: true,
        longDes: `
        Welcome to the Dash Add-On! This feature enables players to execute quick dashes in the direction they are facing, enhancing movement dynamics and providing an exciting way to navigate through your Minecraft world.

        ## Key Features
        - **Directional Dashing**: Players can dash in the direction they are looking, allowing for agile movement and quick escapes during gameplay.
        - **Customizable Strength**: Admins can set both horizontal and vertical strength for dashing, giving players control over how far they can dash.
        - **Smooth Implementation**: The dash mechanic is integrated into the game smoothly, ensuring it works seamlessly with existing player movement.
        - **Tag-Based Activation**: Players can activate the dash feature through tags, allowing for easy integration and management of dashing capabilities.
        - **Error Handling**: The system checks for valid strength values, preventing issues with invalid inputs and ensuring a stable experience.
        - **Real-Time Feedback**: Players receive immediate feedback when dashing, enhancing the feel of responsiveness in movement.
        - **Dynamic Gameplay**: Adds a new layer of strategy to gameplay, enabling players to maneuver more effectively in various situations.`
    },
    {
        title: "Moon Action (Activity Detector)",
        description: "Adds tags/score for player actions like crouching and jumping.",
        imgSrc: 'moonaction.jpg',
        readId: "moonaction",
        pageHref: "#",
        isStable: true,
        longDes: `Welcome to the Moon Action (Activity Detector) System This addon provides a comprehensive scoreboard system for tracking player statistics in a Minecraft world. With functionalities such as tracking health, kills, deaths, and player actions, this system enhances gameplay experience by providing valuable insights and stats to players.
        ## Key Features 
        - **Player Stats Tracking:** Monitor player health, maximum health, kills, deaths, and fall distance.
        - **Dynamic Tagging System:** Automatically tags players based on their actions, such as jumping, sneaking, or flying.
        - **Custom Scoreboard Objectives:** Create and manage scoreboard objectives seamlessly for various stats.
        - **Health Management:** Handle health changes, including health boosts and damage taken from sources.
        - **Player Interaction Events:** Subscribe to entity hurt events to keep track of kills and deaths effectively.

        ## User Experience
        - **Real-Time Feedback:** Players receive immediate updates on their stats, enhancing their gaming experience.
        - **Easy Integration:** This code can be easily integrated into any Minecraft server setup, making it accessible for all players.

        ## Conclusion
        This scoreboard system provides an excellent way to track and manage player stats in Minecraft, ensuring that players can enjoy a competitive and engaging experience. Enhance your Minecraft gameplay with this powerful and flexible scoring system!        `
    },
    {
        title: "Health NameTag (Mob Health Displaying)",
        description: "Shows health on mob name tags excluding players.",
        imgSrc: 'healthametag.jpg',
        readId: "healthametag",
        pageHref: "#",
        isStable: true,
        longDes: `
        Welcome to the Health NameTag (Mob Health Displaying) Tag System for Minecraft!
        This addon provides an improved way to display entity name tags, showing their health status in real-time. By integrating this system, players can easily identify the health of different entities in the game, enhancing gameplay and strategy.

        ## Key Features
        - **Dynamic Name Tags:** Automatically updates entity name tags to reflect current health, ensuring players always know their status.
        - **Customizable Display:** Converts entity type IDs into a more readable format, making the game more immersive and understandable.
        - **Health Calculation:** Accurately calculates remaining health and displays it visually with hearts, allowing players to gauge threats quickly.

        ## User Experience
        - **Visual Feedback:** Entities now show their health status in a clear and concise manner, improving gameplay strategy.
        - **Immersive Naming:** The use of readable names enhances player engagement, making it easier to identify different creatures.

        ## Conclusion
        This Enhanced Entity Name Tag System is an excellent addition to any Minecraft server, providing players with vital health information for entities. By using this code, you can create a more interactive and engaging gameplay experience!`
    },
    {
        title: "RoomChat (Chat Room)",
        description: "Chat room system for mini-game servers.",
        imgSrc: 'roomchat.jpg',
        readId: "roomchat",
        pageHref: "#",
        isStable: false,
        longDes: `
        Welcome to the Minecraft Chat Room Management System!
        This addon we provides a robust framework for managing a chat room within a Minecraft server, allowing for customizable settings, player visibility, and real-time communication. Players can interact in a designated chat room while having their messages displayed according to specific settings.

        ## Key Features
        - **Chat Room Setup:** Easily create and manage a chat room using scoreboards for players and settings.
        - **Dynamic Player Visibility:** Control which players can see each other's messages based on specific roles and settings.
        - **Customizable King Tag:** Allows players to define a special "king" tag for specific permissions and visibility.
        - **Form Interaction:** Utilizes modal forms for settings adjustments, providing a user-friendly interface for admins.

        ## User Experience
        - **Real-Time Updates:** Changes to chat settings are instantly reflected, allowing for a dynamic chat experience.
        - **Role-Based Messaging:** Players with specific tags can see and send messages based on defined roles, enhancing gameplay strategy and communication.

        ## Conclusion
        This Chat Room Management System is an essential tool for enhancing player interaction in Minecraft. By implementing this code, server admins can create a more organized and engaging chat experience for all players!`
    },
    {
        title: "NearChat (Chat Proximity)",
        description: "Allow players to chat with nearby players.",
        imgSrc: 'nearchat.jpg',
        readId: "nearchat",
        pageHref: "#",
        isStable: false,
        longDes: `
## Key Features
- **Configurable Chat Range**: Players can communicate with others within a specified distance, enhancing immersion and realism in the game.
- **Admin Controls**: Admins have special privileges to see all messages, regardless of distance, and can send messages to all players. This ensures that important announcements are not missed.
- **Customizable Settings**: Admins can easily adjust chat parameters, such as message visibility and chat range, through an intuitive user interface.
- **Feedback Mechanism**: Players receive notifications when their messages can't reach others due to distance, maintaining awareness of their communication limits.

## User Experience
Players will enjoy a more dynamic chat experience, where communication feels more organic and location-based. Admins can efficiently manage the chat environment, ensuring that all players have a clear line of communication while keeping important messages visible to all.

## Conclusion
The Distance Chat System addon significantly enhances the multiplayer experience in Minecraft. By allowing for customizable chat settings and providing admins with powerful control features, it fosters better communication among players, making the game more interactive and engaging. This addon is perfect for server owners looking to create a more connected community!`
    },
    {
        title: "ChatRank (Rank Chat)",
        description: "Shows rank in player chat names.",
        imgSrc: 'chatrank.jpg',
        readId: "chatrank",
        pageHref: "#",
        isStable: false,
        longDes: `
        ## Features
        - **Customizable Chat Prefixes**: Server admins can set a specific prefix for ranks (e.g., "rank:") that will appear in chat messages, allowing for easy identification of players' ranks.
        - **Default Rank Setting**: If a player does not have a specific rank tag, a default title (like "Player") will be displayed, ensuring that every player has a visible identifier.
        - **Intuitive Admin Controls**: Admins can adjust the chat prefix and default rank through a user-friendly GUI by using a compass item, making it simple to update settings without manual command input.
        - **Error Handling**: The addon includes error messages to assist admins if something goes wrong when trying to access settings.

        ## User Experience
        Players will experience a more organized chat environment, where rank prefixes help them identify other players' roles at a glance. The default rank ensures inclusivity, making every player feel acknowledged. Admins will appreciate the straightforward settings interface that allows for quick adjustments.

        ## Conclusion
        The Rank Chat System addon enhances communication in Minecraft servers by introducing rank visibility in chat. By allowing customizable prefixes and default settings, it fosters a sense of community and hierarchy among players. This addon is perfect for server owners looking to enrich the player experience while providing admins with easy management tools.`
    },
    {
        title: "PoliceCaughtThief (Police vs. Thief)",
        description: "Simple police caught thief system with extensive settings.",
        imgSrc: 'policecaughtthief.jpg',
        readId: "policecaughtthief",
        pageHref: "#",
        isStable: true,
        longDes: `
        The **Boss Settings Addon** enhances gameplay in Minecraft by allowing server administrators to manage the behavior and characteristics of players designated as "Officers" and "Bandits." This addon provides a user-friendly interface through a compass item, enabling quick adjustments without needing to access complex command lines.

        ## Features:
        - **Admin Access**: Only players with the 'Admin' tag can access the settings, ensuring that control remains in trusted hands.
        - **Selection Menu**: A sleek UI that allows admins to choose between managing "Officers," "Bandits," "Server settings," or resetting all configurations.
        - **Officer Settings**: Set custom tags and items for officers, tailoring their in-game identity and functionality to fit the server's theme.
        - **Bandit Settings**: Configure bandit characteristics, including whether they can steal money and how much they earn over time. This adds a layer of strategy and engagement for players taking on these roles.
        - **Server Management**: Adjust server-wide settings such as jail coordinates and money object types, allowing for greater control over the game environment.
        - **Reset Functionality**: Quickly reset all configurations to default values, ensuring flexibility in managing server settings.

        ## User Experience:
        Players can enjoy a streamlined process for modifying critical game settings, enhancing engagement and immersion. The intuitive UI makes it easy for admins to make changes on the fly, keeping gameplay fresh and exciting. By managing roles effectively, admins can create unique dynamics within their server, making for a more enjoyable experience for all players.

        ## Conclusion:
        The **Boss Settings Addon** is an essential tool for Minecraft server administrators seeking to enrich their gameplay experience. With its straightforward interface and powerful features, it allows for effective management of player roles and server settings, fostering an engaging and dynamic game environment. Whether you're running a role-playing server or just want to add some flair to your Minecraft world, this addon is a must-have!`
    },
    {
        title: "AFK (Away from Keyboard Detector)",
        description: "Structure to detect AFK players.",
        imgSrc: 'afk.jpg',
        readId: "afk",
        pageHref: "#",
        isStable: true,
        longDes: `
        The **AFK Detector** addon is a simple yet effective tool for Minecraft server owners to monitor player activity. Designed for ease of configuration, this addon allows map owners to set up AFK detection through straightforward commands, ensuring a smoother gaming experience without unnecessary complications.

        ## Features:
        - **Command-Based Detection**: No complex UI required! The AFK Detector operates entirely through commands, making it lightweight and easy to implement.
        - **Customizable AFK Settings**: Server owners can easily configure detection settings directly within the command, allowing for flexibility in defining AFK behavior based on server needs.
        - **Efficient Monitoring**: The addon continually checks player activity, allowing admins to identify AFK players and take necessary actions (like notifications or automatic kick).
        - **Minimal Setup Required**: Quick and easy installation with just a few commands, enabling map owners to get started without extensive technical knowledge.
            
        ## User Experience:
        The **AFK Detector** provides a hassle-free experience for server administrators. By eliminating the need for a graphical interface, it allows for rapid configuration changes via command lines. This simplicity ensures that map owners can focus on creating and enjoying their game without the burden of managing complex systems.
        ## Conclusion:
        The **AFK Detector** is an invaluable tool for any Minecraft server owner looking to maintain an active and engaging environment. With its command-based functionality and straightforward configuration options, it simplifies the AFK monitoring process, allowing for a more enjoyable gameplay experience. Perfect for both casual and serious servers, this addon is a great addition to any Minecraft world!`
    },
    {
        title: "Real Time (UTC+7)",
        description: "Adds scoreboard for real-world time.",
        imgSrc: 'realtime.jpg',
        readId: "realtime",
        pageHref: "#",
        isStable: true,
        longDes: `
        ## Features:

        - **Dynamic Time Settings**: Players can choose between using the Buddhist calendar (BE) or the Gregorian calendar (CE) for in-game time, adding a cultural touch to gameplay.
        - **GMT Customization**: Users can set their desired GMT offset, enabling them to align in-game time with their real-world time, enhancing the overall experience for players in different time zones.
        - **User-Friendly Modal Interface**: The addon features a modal form that is easy to navigate, allowing players to set their preferences quickly and intuitively without complicated commands.
        - **Automatic Time Update** :The addon continually updates in-game time based on the configured GMT, ensuring that players have a real-time experience that reflects their local time accurately.
        - **Error Handling**: The code includes error handling for fetching GMT settings, ensuring smooth operation even if there are issues during execution.

        ## User Experience:
        The **Real Time Settings** addon creates a user-friendly experience for players, particularly those with administrative roles. The modal form makes it easy to select time preferences, and the instant feedback provided through chat messages enhances communication. Players can quickly adjust their settings without diving deep into commands, making the process seamless and enjoyable.

        ## Conclusion:
        The **Real Time Settings** addon is an excellent addition for Minecraft servers aiming to offer players a more personalized and immersive experience. By allowing users to configure their time settings easily and providing real-time updates, this addon enhances gameplay and cultural relevance. Whether for casual or serious gaming sessions, this addon will surely be appreciated by players and admins alike!`

    },
    {
        title: "Anti Spam (Chat Protection)",
        description: "Prevents spamming in chat, configurable by admin.",
        imgSrc: 'antispam.jpg',
        readId: "antispam",
        pageHref: "#",
        isStable: false,
        longDes: `
        The **Server Anti Spam** addon is designed to help Minecraft server administrators manage chat behavior by implementing a customizable delay on player messages. This addon allows for a flexible configuration of message rates and automated warnings, ensuring a smoother chat experience for all players.

        ## Features:
        - **Chat Delay Settings**: Server admins can set a customizable delay (in seconds) between player messages, preventing spam and promoting a more engaging chat environment.
        - **Custom Warning Messages**: Admins can configure a warning message that players receive when they attempt to spam the chat, making it clear that they need to slow down.
        - **Intuitive Modal Form**: The addon uses a modal interface for settings adjustment, providing a user-friendly way for admins to set chat limits and warning messages without needing complex commands.
        - **Dynamic Message Monitoring**: The addon continuously checks and enforces message delays for each player, ensuring that no one can spam regardless of their status in the game.
        - **Error Handling**: Built-in error handling prevents crashes and allows the addon to continue functioning smoothly even if specific player settings are not found.

        ## User Experience:
        The **Server Anti Spam** addon offers a streamlined experience for server admins and players alike. The modal form makes it easy for admins to set chat parameters quickly. Players are kept informed through warning messages, making it clear when they need to adjust their chatting behavior. This proactive approach helps maintain a positive environment and encourages respectful communication.

        ## Conclusion:
        The **Server Anti Spam** addon is an essential tool for any Minecraft server seeking to maintain a friendly and engaging chat atmosphere. By providing adjustable settings for message frequency and customizable warnings, this addon effectively mitigates spam while fostering a more enjoyable gameplay experience. With its user-friendly interface and robust functionality, server administrators can easily implement and manage chat rules, ensuring a respectful community for all players!
        `
    },
    {
        title: "Leader Board (Leader Board)",
        description: "Leader board can only be changed by admin.",
        imgSrc: 'leaderboard.jpg',
        readId: "leaderboard",
        pageHref: "#",
        isStable: true,
        longDes: `
        The **Leaderboard Addon** enhances the Minecraft experience by introducing a customizable leaderboard system that allows players to view rankings based on specific criteria like scoreboards.

        ## Features:
        - **Customizable Leaderboards**: Server administrators can set up leaderboards based on various scoreboard objectives (e.g., money, points), allowing for flexibility in what players can compete for.
        - **Dynamic User Interface**: The addon utilizes a user-friendly interface with action forms, allowing players to easily view their rankings and those of others.
        - **Admin Controls**: Admins have the ability to edit leaderboard settings, including the objective displayed, the title, and the maximum number of players shown.
        - **Interactive Elements**: Players can use a compass item to access their leaderboard, making it easy to check their stats while playing.
        - **Real-time Updates**: The leaderboard updates dynamically, ensuring players always see the most current rankings based on their in-game performance.

        ## User Experience:
        Players will find this addon engaging as it fosters competition and interaction among them. The ability to check their rankings and see how they stack up against others adds a layer of excitement to the gameplay. Admins will appreciate the ease of configuration, allowing them to tailor the leaderboard to fit their server's theme or objectives without extensive technical knowledge.

        ## Conclusion:
        The **Leaderboard Addon** is an excellent addition for Minecraft servers aiming to enhance player engagement through competition. Its customizable features and user-friendly interface make it accessible to both players and administrators. By integrating this addon, servers can create a lively, competitive atmosphere that encourages players to strive for higher ranks and fosters a sense of community.`
    },
    {
        title: "Transfer Money (Money Transfer System)",
        description: "Transfer money to other players in the server.",
        imgSrc: 'transfermoney.jpg',
        readId: "transfermoney",
        pageHref: "#",
        isStable: true,
        longDes: `
        The **Money Transfer Addon** allows players to send virtual currency to each other in Minecraft, enhancing the social interaction and economy within the game.

        ## Features:

        - **Item Activation**: Players can initiate money transfers using a specific item (a clock in this case), making it intuitive to use.
        - **Player Selection GUI**: The addon presents a visually appealing interface that lets players select whom they want to send money to, along with displaying their current balance.
        - **Input Validation**: The addon includes robust checks to ensure the transfer amount is valid, including limits on how much money can be sent based on the sender's balance.
        - **Transfer Confirmation**: Before completing a transfer, players are prompted to enter the amount and an optional message, enhancing the transaction experience.
        - **Sound Feedback**: Sound effects are included to provide auditory feedback for actions like successful transfers and errors, adding to the immersive experience.

        ## User Experience:
        Players will find this addon enjoyable as it fosters a sense of community and interaction. The ability to send money to friends can enhance cooperation and relationships within the game. The intuitive interface and clear prompts make the process straightforward, ensuring that even new players can navigate it with ease.

        ## Conclusion:
        The **Money Transfer Addon** is an excellent tool for Minecraft servers that want to introduce a virtual economy. Its user-friendly design, combined with useful features, creates a seamless experience for players looking to engage in financial transactions. By implementing this addon, servers can enhance player interaction and build a more vibrant in-game community.`
    },
    {
        title: "InvSee (Inventory Viewer)",
        description: "Allows admin to see player's inventory.",
        imgSrc: 'invsee.jpg',
        readId: "invsee",
        pageHref: "#",
        isStable: false,
        longDes: `
        ## Addon Overview: **Inventory See Addon (invsee)**

        The **Inventory See Addon** allows players with specific permissions (like operators) to view the inventories of other players in Minecraft. This enhances server management and interaction, especially in multiplayer settings.

        ## Features:

        - **Command Activation**: Players can use the **!invsee <player_name>** command to view the inventory of another player, making it straightforward for operators to manage inventories.
        - **Player Search**: The addon allows searching for players by name, even if the input is partially matched, providing flexibility when looking for players.
        - **Detailed Inventory Display**: Displays a detailed view of the selected player’s inventory, including: Item names with formatting for readability, Slot numbers, Quantity of each item and Any enchantments present on items.
        - **User-Friendly Error Handling**: No player is specified, The specified player cannot be found. and The target player’s inventory is empty.
        - **Customizable Message Formatting**: Utilizes Minecraft chat formatting to enhance the visual appeal of the displayed inventory, making it easier to read.

        ## User Experience:
        Players with the "op" tag will find this addon helpful for monitoring other players' inventories without the need for physical access to their items. This can foster a sense of transparency and trust among players, as operators can ensure fairness in gameplay. The clear messages and organized inventory display contribute to a positive user experience, allowing for efficient inventory management.

        ## Conclusion:
        The **Inventory See Addon (invsee)** is an essential tool for Minecraft servers that require oversight of player inventories. By enabling operators to view other players' inventories, the addon promotes fair play and effective management. Its user-friendly design and detailed information presentation make it a valuable addition for server administrators and enhance the overall multiplayer experience.`
    },
    {
        title: "TeleportCompass (Compass Teleporter)",
        description: "Use compass to teleport to players in the server.",
        imgSrc: 'teleportcompass.jpg',
        readId: "teleportcompass",
        pageHref: "#",
        isStable: true,
        longDes: `
        The **Teleportation Compass** allows players with administrative privileges to quickly teleport to other online players using a recovery compass. This feature streamlines gameplay and enhances the management capabilities for server administrators.

        ## Features:
        - **Admin-Only Activation**: The teleportation feature is restricted to players with the "Admin" tag, ensuring that only authorized users can teleport, thus maintaining server integrity.
        - **Recovery Compass Trigger**: Players can use the recovery compass to access the teleportation interface, creating an intuitive method for accessing teleportation options.
        - **User-Friendly Interface**: Presents an Action Form with a list of online players, making it easy for admins to choose whom to teleport to. and Displays the number of players currently online for better context.
        - **Visual Feedback**: When the player opens the interface, a sound effect is played to provide immediate feedback, enhancing the interactive experience.
        - **Random Player Icons**: Each player button is displayed with a randomly chosen character icon (Steve or Alex), adding a playful element to the interface.

        ## User Experience:
        This addon significantly improves the administrative experience by providing a quick and efficient way to teleport to other players. The clean interface and sound feedback create a pleasant interaction for admins. The ability to see all online players at once reduces the time taken to find specific players and teleport to them, making server management smoother.

        ## Conclusion:
        The **Teleportation Addon** is a valuable tool for Minecraft server administrators, allowing them to quickly teleport to online players using the recovery compass. By keeping the feature exclusive to admins and providing an easy-to-navigate interface, the addon enhances gameplay efficiency and promotes effective server management. This adds convenience without compromising game integrity, making it a great addition for any multiplayer server.`
    },
    {
        title: "ColorName (Name Color Changer)",
        description: "Change player name colors in the server.",
        imgSrc: 'nametag.jpg',
        readId: "nametag",
        pageHref: "#",
        isStable: true,
        longDes: `
        The **ColorName Addon** introduces an exciting way for players to customize their in-game names with various colors, enhancing individuality and expression on your server.

        ## Features:
        - **Custom Name Colors**: Players can change their name colors using a scoreboard objective called "Name Color." This feature allows for a personalized touch to each player’s appearance.
        - **Comprehensive Color Guide**: The addon includes a helpful color guide displayed to players, detailing the available colors and their corresponding numbers. This ensures that players can easily find and select their preferred name color.
        - **User-Friendly Command**: Players can simply use the scoreboard to set their desired name color, making the process intuitive and straightforward.

        ## User Experience:
        The **ColorName Addon** significantly enhances the player experience by allowing for greater self-expression. Players enjoy customizing their names, which can help in creating a unique identity within the server community. The color guide simplifies the selection process, ensuring everyone can easily choose their favorite shade without confusion.

        ## Conclusion:
        The **ColorName Addon** is a fantastic addition for any Minecraft server, encouraging player creativity and personalization. By enabling users to change their name colors, the addon fosters a more engaging and vibrant community atmosphere. Overall, it elevates the gameplay experience by adding a fun and interactive element to player interactions.`
    },
    {
        title: "ServerUI (Player Menu)",
        description: "Adds clock menu essentials for server",
        imgSrc: 'serverui.jpg',
        readId: "serverui",
        pageHref: "#",
        isStable: true,
        longDes: `
        The **Banking System Addon** provides an engaging banking experience for players, allowing them to manage their in-game currency through a simple and intuitive interface. This addon enhances gameplay by introducing features like depositing, withdrawing, and viewing player details, all while ensuring ease of use across different languages.

        ## Features:
        - **Currency Management**: Players can deposit and withdraw money using a user-friendly interface. The system utilizes scoreboards to track each player's money and bank balance, making transactions straightforward.
        - **Multilingual Support**: The addon supports both English and Thai languages, allowing players to choose their preferred language. This feature enhances accessibility and ensures a wider audience can enjoy the banking experience.
        - **Interactive Menus**: Players navigate through various menus using ActionForms and ModalForms, providing a visually appealing and easy-to-understand interface. Each menu option is clearly labeled, making it simple for users to perform transactions.
        - **Detailed Player Information**: Players can view online player details, giving a sense of community and interaction within the server. The system lists all players currently online, fostering engagement and camaraderie.

        ## User Experience:
        The **Banking System Addon** significantly improves player interaction by making financial transactions engaging and straightforward. Players enjoy the convenience of managing their in-game currency through a clean and easy-to-navigate interface. The ability to select a language adds a personal touch, ensuring players feel comfortable while using the addon.

        ## Conclusion:
        The **Banking System Addon** is an excellent addition for any Minecraft server, enhancing the gameplay experience through effective currency management and user-friendly design. By allowing players to deposit and withdraw money easily while supporting multiple languages, this addon creates a more interactive and inclusive environment for all players. Overall, it adds depth and functionality to the game, making it a must-have for server administrators and players alike.`
    }
]


export const find_me = [
    // http://127.0.0.1:5500/download/?lastest=antispam
    // http://127.0.0.1:5500/download/?ver1.20.40=antispam
    // https://addonhub.online/download/?lastest=allchat
    { url: "tpa", link: "https://github.com/aitji/aitji.addon/raw/main/Stable/tpa/Download.mcpack" },
    { url: "multiaddon", link: "https://github.com/aitji/multiAddon/releases/download/1.1.6/multiAddon.mcpack" },
    { url: "afk", link: "https://github.com/aitji/aitji.addon/raw/main/Other/AFK/Download.mcpack" },
    { url: "allchat", link: "https://github.com/aitji/aitji.addon/raw/main/_ver_/All%20Chat/Download.mcpack" },
    { url: "antispam", link: "https://github.com/aitji/aitji.addon/raw/main/_ver_/AntiSpam/Download.mcpack" },
    { url: "blood_addon", link: "https://github.com/aitji/aitji.addon/raw/main/Stable/Blood/Download%20Addon.mcpack" },
    { url: "blood_res", link: "https://github.com/aitji/aitji.addon/raw/main/Stable/Blood/Download%20Resource.mcpack" },
    { url: "dash", link: "https://github.com/aitji/aitji.addon/raw/main/Stable/Dash/Download.mcpack" },
    { url: "healthametag", link: "https://github.com/aitji/aitji.addon/raw/main/Stable/Health%20NameTag/Download.mcpack" },
    { url: "invSee", link: "https://github.com/aitji/aitji.addon/raw/main/_ver_/InvSee/Download.mcpack" },
    { url: "leaderboard", link: "https://github.com/aitji/aitji.addon/raw/main/Stable/Leaderboard/Download.mcpack" },
    { url: "moonaction", link: "https://github.com/aitji/aitji.addon/raw/main/Stable/Moon%20Action/Download.mcpack" },
    { url: "nametag", link: "https://github.com/aitji/aitji.addon/raw/main/_ver_/NameTag/Download.mcpack" },
    { url: "nearchat", link: "https://github.com/aitji/aitji.addon/raw/main/_ver_/NearChat/Download.mcpack" },
    { url: "chatrank", link: "https://github.com/aitji/aitji.addon/raw/main/_ver_/RankChat/Download.mcpack" },
    { url: "policecaughtthief", link: "https://github.com/aitji/aitji.addon/raw/main/Stable/Police%20Caught%20Thief/Download.mcpack" },
    { url: "rankchat", link: "https://github.com/aitji/aitji.addon/raw/main/_ver_/RankChat/Download.mcpack" },
    { url: "realtime", link: "https://github.com/aitji/aitji.addon/raw/main/Stable/Real-Time/Download.mcpack" },
    { url: "roomchat", link: "https://github.com/aitji/aitji.addon/raw/main/_ver_/Room%20Chat/Download.mcpack" },
    { url: "serverui", link: "https://github.com/aitji/aitji.addon/raw/main/Stable/Server%20UI/Download.mcpack" },
    { url: "teleportcompass", link: "https://github.com/aitji/aitji.addon/raw/main/Stable/Teleport%20Compass/Download.mcpack" },
    { url: "transfermoney", link: "https://github.com/aitji/aitji.addon/raw/main/Stable/Transfer%20Money/Download.mcpack" },
    { url: "unbreak", link: "https://github.com/aitji/aitji.addon/raw/main/_ver_/UnBreak/Download.mcpack" },
    { url: "votekick", link: "https://github.com/aitji/aitji.addon/raw/main/Stable/VoteKick/Download.mcpack" },
    { url: "ban", link: "https://github.com/aitji/aitji.addon/raw/main/_ver_/ban/Download.mcpack" },
    { url: "wanted", link: "https://github.com/aitji/aitji.addon/raw/main/Stable/Wanted/Download.mcpack" },
    { url: "rbchat", link: "https://github.com/aitji/aitji.addon/raw/main/_ver_/rbchat/Download.mcpack" },
    { url: "level", link: "https://github.com/aitji/aitji.addon/raw/main/Other/Level/Download.mcpack" },
]