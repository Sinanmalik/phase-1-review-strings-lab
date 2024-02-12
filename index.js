// Define the currentUser variable
const currentUser = 'YourName';

// Define the welcomeMessage function
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Define the excitedWelcomeMessage function
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Define the shortGreeting function
const shortGreeting = `Welcome, ${currentUser.charAt(0)}!`;

module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting
};