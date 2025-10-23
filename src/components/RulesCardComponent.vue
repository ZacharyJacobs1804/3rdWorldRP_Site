<template>
  <div class="rules-card">
    <h2 class="card-title">Server Rules</h2>
    <div class="card-content">
      <p>Welcome to 3rd World RP! To ensure a fun and fair environment for everyone, please adhere to the following rules:</p>
      <ul>
        <li>Rule 1: Respect all players and staff.</li>
        <li>Rule 2: No metagaming or powergaming.</li>
        <li>Rule 3: Follow all in-game laws and regulations.</li>
        <li>Rule 4: Maintain character integrity at all times.</li>
        <li>Rule 5: No exploiting bugs or glitches.</li>
        <li>Rule 6: Keep OOC (Out Of Character) chat separate from IC (In Character) chat.</li>
        <li>Rule 7: Do not RDM (Random Deathmatch) or VDM (Vehicle Deathmatch).</li>
        <li>Rule 8: Use common sense and good roleplay etiquette.</li>
      </ul>
      <p>Failure to comply with these rules may result in warnings, temporary bans, or permanent bans from the server.</p>
      <p>Thank you for being a part of our community!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RulesCard',
};
</script>

<style scoped>
.rules-card {
  background-color: rgba(0, 0, 0, 0.7); /* Dark semi-transparent background */
  border: 1px solid #333;
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  color: #eee; /* Light text color */
  font-family: 'Arial', sans-serif;
}

.card-title {
  color: #e0a800; /* A gold/orange color for theme */
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.card-content p {
  margin-bottom: 15px;
  line-height: 1.6;
  font-size: 1.1em;
}

.card-content ul {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 15px;
}

.card-content li {
  background-color: rgba(50, 50, 50, 0.5);
  margin-bottom: 8px;
  padding: 10px 15px;
  border-left: 4px solid #e0a800; /* Theme accent color */
  border-radius: 4px;
  font-size: 1em;
}
</style>
