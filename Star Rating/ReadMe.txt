Step 1: HTML Structure
Create a container (div) for the stars.
Use span elements with stars (★) and data-value attributes to hold the rating value.
Add a separate element to display the rating.

⭐Remember: The data-value attribute is used to capture the rating value for each star.

Step 2: CSS Styling

Style the stars with a default color (e.g., grey).
Add styles for hover and selected states (e.g., yellow).
Use transitions for smooth hover effects.

⭐ Remember: Transitions enhance the user experience with smooth animations.

Step 3: JavaScript Functionality

⭐updateStars(rating) Function:

Updates the UI to highlight stars based on the current rating.
This function is used for both click and hover effects.
DRY Principle: Reuse this function to avoid redundancy.

⭐Using stars.forEach():

Loop through each star to:
Attach click, mouseover, and mouseout event listeners.
Highlight stars up to the selected one.
Key Point to Remember: Use forEach to efficiently handle multiple elements.

⭐Event Listeners:

Click: Sets the permanent rating and updates the display.
Mouseover: Temporarily highlights stars to preview a rating.
Mouseout: Resets the stars to the last selected rating when the mouse leaves.
